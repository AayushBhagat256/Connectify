import { useState, useRef } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

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
                variant={'ghost'}
                backgroundColor={'cyan.700'}
                _hover={{
                    bg:'cyan.400'
                }} mt={4}>
                    Submit
                </Button>
                </Flex>
            </form>
        </Box>
    );
};

export default AddPost;
