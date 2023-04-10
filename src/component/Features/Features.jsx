import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

const Features = ({ feature }) => {
    // console.log(feature)
    const { picture, title, companyName, type, location, time, salary } = feature
    return (
        <div className='p-10 border border-[#E8E8E8] rounded-lg'>
            <div className='inline-block mb-8'>
                <img className='w-[120px]' src={picture} alt="" />
            </div>
            <h4 className='text-[#474747] font-extrabold text-xl mb-2'>{title}</h4>
            <p className='text-[#757575] text-lg font-bold mb-4'>{companyName}</p>
            <p className='text-[#7E90FE] text-lg font-bold mb-5'>
                <span className='mr-4 border border-[#7E90FE] px-5 py-2 rounded'>{type}</span>
                <span className='border border-[#7E90FE] px-5 py-2 rounded'>{time}</span>
            </p>
            <p className='text-[#757575] text-lg font-bold mb-6'>
                <span className='mr-6'><MapPinIcon className="h-6 w-6 inline-block"/> {location}</span>
                <span className=''><CurrencyDollarIcon className="h-6 w-6 inline-block"/> Salary : {salary}</span>
            </p>
            <button className='btn-primary px-4 lg:py-3 lg:font-bold'>View Details</button>
        </div>
    );
};

export default Features;