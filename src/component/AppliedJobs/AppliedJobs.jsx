import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobItem from '../JobItem/JobItem';
import { getShoppingCart } from '../../utilities/fakedb';
import vectorFirst from '../../assets/vector-1.png';
import vectorSecond from '../../assets/vector.png';
import FilterJobs from '../FilterJobs/FilterJobs';

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


   const [filterTextValue, setFilterTextValue] = useState('all')

   let filteredJobs = cart.filter((job)=>{
    if(filterTextValue === 'Remote'){
        return job.type === 'Remote';
    }
    else if (filterTextValue === "Onsite"){
        return job.type === 'Onsite';
    }
    else{
        return job;
    }
   })

    function onFilterValueSelected(filterValue){
        setFilterTextValue(filterValue)
    }

    return (
        <>
            <div className='bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] py-28 pb-16 md:pb-20 lg:pt-48 lg:pb-32 relative'>
                <h2 className='font-extrabold text-3xl text-[#1A1919] text-center'>Applied Jobs</h2>
                <img className='absolute top-0 right-0 w-20 md:w-32 lg:w-80' src={vectorFirst} alt="" />
                <img className='absolute bottom-0 left-0 w-20 md:w-32 lg:w-80' src={vectorSecond} alt="" />
            </div>
            <div className='container my-16 md:my-24 lg:my-32'>
                <div className='text-end mb-8'>
                    {/* <button onClick={()=>handelOnsite(cart)} className='btn-primary px-4 lg:py-3 lg:font-bold mr-6'>Onsite</button>
                    <button className='btn-primary px-4 lg:py-3 lg:font-bold'>Remote</button> */}
                    <FilterJobs filterValueSelected={onFilterValueSelected}></FilterJobs>
                </div>
                <ul className='flex flex-col'>
                    {
                        filteredJobs.map(feature => <JobItem key={feature.id} feature={feature}></JobItem>)
                    }
                </ul>
            </div>
        </>
    );
};

export default AppliedJobs;