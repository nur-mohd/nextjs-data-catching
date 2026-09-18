import React from 'react';

const getPosts = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts", {cache: "force-cache"});
    return res.json();
}

const getPosts2 = async () => {
    try {
        const res =  await fetch("https://jsonplaceholder.typicode.com/posts");
        return res.json();
    } catch (error) {
        throw new Error("Failed to fetch posts");
    }
}


const getPosts3 = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!res.ok) {
        throw new Error("Failed to fetch posts");
    }
    return res.json();
}




const PostPage = async() => {

   const posts = await getPosts(); // getPosts theke data fetch korar por posts variable e store kora holo.

   console.log(posts);

    return (
        <div>
            <h1 className="text-2xl font-bold">Hello, Posts {posts.length}</h1>
        </div>
    );
};

export default PostPage;