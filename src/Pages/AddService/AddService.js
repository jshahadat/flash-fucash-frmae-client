import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const [addServices, setAddservices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAddservices(data))
    }, []);

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.title.value
        const price = form.price.value
        const img = form.img.value;
        const rating = form.rating.value
        const description = form.description.value;

        const addService = {


            name,
            price,
            img,
            rating,
            description
        }



        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }



    return (
        <div>

            <div>
                <form onSubmit={handleAddService}>




                    <section className="bg-gray-50 pt-10 pb-10 flex items-center justify-center">

                        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">

                            <div className="md:w-1/2 px-8 md:px-16">
                                <h2 className="font-bold text-2xl text-[#002D74]">Add Your Service</h2>

                                <div className='flex'>
                                    <div className='pr-4'>
                                        <input className="p-2 rounded-xl border" type="text" name="title"
                                            placeholder="Add Your Service Name" />
                                    </div>
                                    <div className="relative">

                                        <input className="p-2 rounded-xl border" type="text" name="img" placeholder="Service Photo Url " />
                                    </div>
                                </div>


                                <div className='flex mt-5'>

                                    <div className="relative pr-4">

                                        <input className="p-2 rounded-xl border" type="text" name="price" placeholder="Service Price" />
                                    </div>
                                    <div className="relative">

                                        <input className="p-2 rounded-xl border" type="text" name="rating" placeholder="Rating/5" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <input className="p-2 mt-5 h-28 w-full rounded-xl border" type="text" name="description" placeholder="Description" />
                                </div>
                                <div className='mt-5'>

                                    <input className='btn' type="submit" value="Submit Your Service" />
                                </div>
                            </div>

                        </div>

                    </section>



                </form>
            </div>

        </div>
    );
};

export default AddService;