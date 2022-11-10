import React from 'react';

const Learn = () => {
    return (
        <div>
            <div className='lg:pl-20 lg:pr-20 mt-10 pl-5 pr-5'>

                <div className='container mx-auto'>

                    <section className="flex items-center w-full justify-center">

                        <div className="bg-gray-100 lg:flex   rounded-2xl shadow-lg max-w-full p-5 items-center">



                            <div className="md:w-1/2 px-8 md:px-16">
                                <h1 className='text-center mb-5 text-xl font-bold'>learn in photography online Some Tips</h1>


                                <ul className='list-disc list-inside'>
                                    <li className='pb-5'>You can read the blog.</li>
                                    <li className='pb-5'>You can do paid course</li>
                                </ul>
                            </div>
                            <div className="md:block   w-full  lg:w-1/2">

                                <img className="rounded-2xl w-full h-fuu" alt='' src='https://i.ibb.co/Th5RRtm/tips.webp' />
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default Learn;