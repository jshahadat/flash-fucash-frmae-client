import React from 'react';


const Goals = () => {
    return (
        <div className='lg:pl-20 lg:pr-20 pl-5 pr-5'>

            <div className='container mx-auto'>

                <section className="flex items-center justify-center">

                    <div className="bg-gray-100 lg:flex   rounded-2xl shadow-lg max-w-full p-5 items-center">

                        <div className="md:block  md:w-full  lg:w-1/2">
                            <h1 className='text-center mb-5 text-xl font-bold'>History of Photography</h1>
                            <img className="rounded-2xl w-full" alt='' src='https://i.ibb.co/mtnt19j/history.jpg' />
                        </div>

                        <div className="md:w-1/2 px-8 md:px-16">

                            <h1 className='mb-6 mt-5 text-xl font-semibold'>"To me, photography is an art of observation. It’s about ﬁnding something interesting in an ordinary place… I’ve found it has little to do with the things you see and everything to do with the way you see them.”</h1>
                            <ul className='list-disc list-inside'>
                                <li className='pb-5'>Photography, as we know it today, began in the late 1830s in France. Joseph Nicéphore Niépce used a portable camera obscura to expose a pewter plate coated with bitumen to light. This is the first recorded image that did not fade quickly.</li>
                                <li>Different styles of photography are dependent on the. motivation for the photoshoot. Equipment and lighting resources available determine the style and purpose of the shoot. Portraiture, nature photography, macro photography, or landscape photography all have different motivations.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Goals;