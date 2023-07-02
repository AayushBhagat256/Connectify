import { useState, useRef } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import { Toast } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const ajwt = localStorage.getItem("AJWT");
    const toast = useToast()
    // console.log(ajwt);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log('Submitted:', { title, description, image });
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
        console.log(selectedImage)
        console.log(fileInputRef)
    };


    const postPost = () => {
        if (fileInputRef.current && fileInputRef.current.files.length > 0) {
          let data = new FormData();
          data.append('postPic', fileInputRef.current.files[0]);
          data.append('description', description);
          data.append('title', title);
          data.append('userModelId',localStorage.getItem('id'))
      
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/post/',
            headers: {
              'Authorization': `${localStorage.getItem('token')}`,
            },
            data: data
          };

          console.log(config.headers)
      
          axios.request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
              toast({
                title: 'Your Post is uploaded',
                description: JSON.stringify(response.data.message),
                status: 'success',
                duration: 2500,
                isClosable: true,
              })
              setDescription('')
              setTitle('')
            })
            .catch((error) => {
              console.log(error);
              toast({
                title: 'Post cannot be created',
                description: "Try again...",
                status: 'error',
                duration: 2500,
                isClosable: true,
              })
            });
        } else {
          // Handle the case when no file is selected
        //   alert("Please select a file");
          toast({
            title: 'No Image found',
            description: "Please upload a Image",
            status: 'error',
            duration: 2500,
            isClosable: true,
          })
        }
      }
      

    return (
        <Box maxWidth="500px" mx="auto" p='4'>
            <Heading fontSize={'xx-large'}>Create new Post</Heading>
            <br />
            <form onSubmit={handleSubmit}>
                <FormControl id="title" mb={4}>
                    <FormLabel>Blog Article Title</FormLabel>
                    <Input
                        placeholder='Enter title here'
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormControl>
                <FormControl id="description" mb={4}>
                    <FormLabel>Blog Article Description</FormLabel>
                    <Textarea
                        placeholder='Enter description here'
                        type="text"
                        value={description}
                        rows='5'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FormControl>
                <FormControl id="image" mb={4}>
                    <FormLabel>Blog Article Image</FormLabel>
                    {/* <Input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          /> */}
                    <div className="image-uploader">
                        <label htmlFor="upload-input" className="upload-label">
                            <span className="upload-text">Upload your Blog image describing it</span>
                            <input id="upload-input" type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} />
                        </label>
                        {selectedImage && <img src={selectedImage} alt="Preview" className="preview-image" />}
                    </div>
                </FormControl>
                <Flex justify={'flex-end'}>
                    <Button type="submit"
                        onClick={postPost}
                        variant={'ghost'}
                        backgroundColor={'cyan.700'}
                        _hover={{
                            bg: 'cyan.400'
                        }} mt={4}>
                        Submit
                    </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default AddPost;
