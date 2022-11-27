import React from 'react';

const PopularCourses = () => {
    return (
        <div>
            <div className="pt-5 bg-base-200">
                <h3 className='text-4xl font-bold text-center'>Courses</h3>
                <h2 className='text-2xl font-bold text-center mb-5'>Our Popular Courses</h2>
                <div className='grid gap-4 grid-cols-3 grid-rows-3'>

                    <div className='p-5'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Front End Development
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>Shahriar Ahmmed</p>
                                <div className="card-actions  justify-between">
                                    <div className='inline-block align-middle'>
                                        <div className="badge badge-outline">
                                            <p>5.0 </p>
                                        </div>
                                        <div className="rating">
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <p>(2,331)</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-2xl font-bold'>$ 19.60</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-5'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Front End Development
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>Shahriar Ahmmed</p>
                                <div className="card-actions  justify-between">
                                    <div className='inline-block align-middle'>
                                        <div className="badge badge-outline">
                                            <p>5.0 </p>
                                        </div>
                                        <div className="rating">
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <p>(2,331)</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-2xl font-bold'>$ 19.60</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;