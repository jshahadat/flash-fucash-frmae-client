import React from 'react';
import fit from '../../../../assets/img/fit.jpg'

const Goals = () => {
    return (
        <div>

            <div>

                <section className="flex items-center justify-center">

                    <div className="bg-gray-100 lg:flex   rounded-2xl shadow-lg max-w-full p-5 items-center">

                        <div className="md:block  md:w-full  lg:w-1/2">
                            <h1 className='text-center mb-5'>Achieve your physical Goals at CrossFit Crew</h1>
                            <img className="rounded-2xl" alt='' src={fit} />
                        </div>

                        <div className="md:w-1/2 px-8 md:px-16">

                            <h1>"There are two kinds of pain in this world: pain that hurts you, and pain that changes you."</h1>
                            <ul className='list-disc list-inside'>
                                <li>Basic Yoga</li>
                                <li>Cardio Strength</li>
                                <li>Lift Weights</li>
                                <li>Lose weight/fat</li>
                                <li>Prioritize Recovery Days</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Goals;