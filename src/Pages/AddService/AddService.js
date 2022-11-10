import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                    toast('Your service Add successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>

            <div>
                <form onSubmit={handleAddService}>
                    <section className="flex mr-10 ml-10 justify-center">
                        <div className="bg-gray-100 flex rounded-2xl shadow-lg  lg:w-fit w-96 p-5 items-center">

                            <div className='flex justify-center'>
                                <div className="">
                                    <h2 className="font-bold text-2xl text-[#002D74]">Add Your Service</h2>

                                    <div className='lg:flex'>
                                        <div className=' pb-6 lg:mr-6'>
                                            <input className="p-2 w-full  rounded-xl border" type="text" name="title"
                                                placeholder="Add Your Service Name" />
                                        </div>
                                        <div className="relative  ">

                                            <input className="p-2 w-full rounded-xl border" type="text" name="img" placeholder="Service Photo Url " />
                                        </div>
                                    </div>
                                    <div className='lg:flex mt-5'>
                                        <div className="relative pb-6 lg:mr-6">
                                            <input className="w-full p-2 rounded-xl border" type="text" name="price" placeholder="Service Price" />
                                        </div>
                                        <div className="relative">
                                            <input className="p-2 w-full rounded-xl border" type="text" name="rating" placeholder="Rating/5" />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <input className="p-2 mt-5 h-28 lg:w-96 w-full rounded-xl border" type="text" name="description" placeholder="Description" />
                                    </div>
                                    <div className='mt-5'>
                                        <input className='btn' type="submit" value="Submit Your Service" />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>



                </form>
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default AddService;