import React from 'react';

const JobCategory = ({ category }) => {
    const { name, picture, jobsAvailable } = category
    return (
        <div>
            
            <div className='p-10 bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d]'>
                <div className='p-4 bg-gradient-to-r from-[#7e90fe1a] to-[#9873ff1a] inline-block rounded-lg mb-8 text-white'>
                    <img className='w-[40px]' src={picture} alt="" />
                </div>
                <h4 className='text-[#474747] font-extrabold text-lg mb-2'>{name}</h4>
                <p className='text-[#A3A3A3;] '>{jobsAvailable}</p>
            </div>
        </div>
    );
};

export default JobCategory;