import React from 'react';


const PostPage = async() => {

    const res =await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();


    return (
        <div>
            <h1 className="text-2xl font-bold">Hello, Posts {posts.length}</h1>
        </div>
    );
};

export default PostPage;