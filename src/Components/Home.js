import React, { useRef } from "react";

const Home = () => {
    const name = useRef();
    const handleUserNameSearch = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        // send the user as url 
        window.location.href = `/${name.current.value}`;
    };
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <h1 className="text-5xl font-bold">Welcome to GitHub API</h1>
            <p className="text-xl">Type your username with "/" after the root URL</p>
            <p className="text-xl">Ex: http://localhost:3000/0nahid</p>
            <form className="mt-5">
                <input type="text" ref={name} placeholder="Enter Username" className="input input-bordered input-success w-full max-w-xs mt-2 mb-2" />
                <button
                    onClick={handleUserNameSearch}
                    className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Home;
