import React from 'react';
import PopularCourses from '../../components/PopularCourses/PopularCourses';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Access Your Class<br></br> From Anywhere &<br></br> Anytime.</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            {/* Top section */}
            <div>
                <div className="flex w-full">
                    <div className="grid h-28 flex-grow card  rounded-box place-items-center">
                        <h3 className='text-4xl font-bold'>12k+</h3>
                        <p>Fresh Graduates</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-28 flex-grow card  rounded-box place-items-center">
                        <h3 className='text-4xl font-bold'>9+</h3>
                        <p>Years of Experience</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-28 flex-grow card  rounded-box place-items-center">
                        <h3 className='text-4xl font-bold'>358</h3>
                        <p>Excilence Awards</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-28 flex-grow card  rounded-box place-items-center">
                        <h3 className='text-4xl font-bold'>47+</h3>
                        <p>Brand Partners</p>
                    </div>
                </div>
            </div>
            <PopularCourses></PopularCourses>
        </div>
    );
};

export default Home;