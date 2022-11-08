import React from 'react';
import Supli from '../../../../assets/img/supliment.jpg'

const Supliment = () => {
    return (
        <div>
            <div>

                <section className="flex items-center justify-center">

                    <div className="bg-gray-100 lg:flex   rounded-2xl shadow-lg max-w-full p-5 items-center">



                        <div className="md:w-1/2 px-8 md:px-16">


                            <h1>All-In-One <br />
                                Supliment For <br />
                                Your Strength
                            </h1>

                        </div>

                        <div className="md:block  md:w-full  lg:w-1/2">

                            <img className="rounded-2xl" alt='' src={Supli} />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Supliment;