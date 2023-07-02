import React from 'react'
import './User.css'

function User(props) {
    return (
        <div>

            <div class="card">
                <div class="infos">
                    <div class="image">
                        <img src={props.image} alt="John Doe" srcset="" />
                    </div>
                    <div class="info">
                        <div>
                            <p class="name">
                                {props.name}
                            </p>
                            <p class="function">
                                Front-end dev
                            </p>
                        </div>
                        <div class="stats">
                            <p class="flex flex-col">
                                Following
                                <span class="state-value">
                                    34
                                </span>
                            </p>
                            <p class="flex">
                                Followers
                                <span class="state-value">
                                    455
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
                <button class="request" type="button">
                    Follow
                </button>
            </div>

        </div>
    )
}

export default User
