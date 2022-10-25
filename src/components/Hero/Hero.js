import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.postimg.cc/rFh2WBnk/hero-image.png" className="max-w-xl rounded-lg " />
                <div>
                    <h1 className="text-6xl font-bold"><span className='text-yellow-400'>Access Your Class</span><br></br>From Anywhere & Anytime.</h1>
                    <p className="py-6">A learing system based on formalized teaching but with the help of <br></br>eletronic resourse for your knowledge.</p>
                    <button className="btn bg-teal-600 hover:bg-teal-700 px-9 shadow">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;