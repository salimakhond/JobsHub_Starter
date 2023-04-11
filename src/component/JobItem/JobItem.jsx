import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const JobItem = ({ feature }) => {
    const { id, picture, title, companyName, type, location, time, salary } = feature
    return (
        <li className='flex flex-col lg:items-center mb-6 lg:flex-row lg:justify-between gap-7 p-8 border border-[#E8E8E8] rounded-lg'>
            <div className='md:flex md:items-center space-x-2 sm:space-x-4'>
                <div className='rounded px-10 py-20 bg-[#F4F4F4]'>
                    <img className=' md:w-[150px]' src={picture} alt="" />
                </div>
                <div className='mt-6 md:mt-0'>
                    <h4 className='text-[#474747] font-extrabold text-xl mb-2'>{title}</h4>
                    <p className='text-[#757575] text-lg font-bold mb-4'>{companyName}</p>
                    <p className='text-[#7E90FE] text-lg font-bold mb-5'>
                        <span className='mr-4 border border-[#7E90FE] px-5 py-2 rounded'>{type}</span>
                        <span className='border border-[#7E90FE] px-5 py-2 rounded'>{time}</span>
                    </p>
                    <p className='text-[#757575] text-lg font-bold mb-6'>
                        <span className='mr-6 block lg:inline-block'><MapPinIcon className="h-6 w-6 inline-block" /> {location}</span>
                        <span className=''><CurrencyDollarIcon className="h-6 w-6 inline-block" /> Salary : {salary}</span>
                    </p>
                </div>
            </div>
            <Link to={`/jobDetails/${id}`}><button className='btn-primary px-4 lg:py-3 lg:font-bold'>View Details</button></Link>
        </li>
    );
};

export default JobItem;