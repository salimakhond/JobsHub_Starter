import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobItem from '../JobItem/JobItem';
import { getShoppingCart } from '../../utilities/fakedb';

const AppliedJobs = () => {
    const features = useLoaderData();

    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storeCart = getShoppingCart();
        const saveCart = [];
        for (const id in storeCart) {
            const addedProduct = features.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            setCart(saveCart);
        }
    }, [features])

    return (
        <div className='container my-32'>
            <ul className='flex flex-col'>
                {
                    cart.map(feature => <JobItem key={feature.id} feature={feature}></JobItem>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;