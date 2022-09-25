import React from "react";

const Home = () => {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <h1 className="text-5xl font-bold">Welcome to GitHub API</h1>
            <p className="text-xl">Type your username with "/" after the root URL</p>
            <p className="text-xl">Ex: http://localhost:3000/0nahid</p>
        </div>
    );
};

export default Home;
