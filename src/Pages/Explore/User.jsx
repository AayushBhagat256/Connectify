import React from 'react'
import './User.css'

function User() {
    return (
        <div>

            <div class="card">
                <div class="infos">
                    <div class="image">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="John Doe" srcset="" />
                    </div>
                    <div class="info">
                        <div>
                            <p class="name">
                                John Doe
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
