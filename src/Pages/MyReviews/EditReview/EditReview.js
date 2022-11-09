import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h1>{user.name}</h1>

        </div>
    );
};

export default EditReview;