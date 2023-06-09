import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import { MapPinIcon, CurrencyDollarIcon, EnvelopeIcon, PhoneIcon, CalendarDaysIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';
import vectorFirst from '../../assets/vector-1.png';
import vectorSecond from '../../assets/vector.png';

const JobDetails = () => {
    const dynamic = useParams();
    const features = useLoaderData();

    const [featureDetails, setFeatureDetails] = useState({});

    const { title, location, salary, description, responsibility, requirements, experiences, email, phone } = featureDetails;

    useEffect(() => {
        const exist = features.find(feature => feature.id == dynamic.id);
        if (exist) {
            setFeatureDetails(exist);
        }
    }, [])


    const handleAddToCart = featureDetails => {
        addToDb(featureDetails.id);
        toast.success('Apply Done!', { autoClose: 500 })
    }


    return (
        <>
            <div className='bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] py-28 pb-16 md:pb-20 lg:pt-48 lg:pb-32 relative'>
                <h2 className='font-extrabold text-3xl text-[#1A1919] text-center'>Job Details</h2>
                <img className='absolute top-0 right-0 w-20 md:w-32 lg:w-80' src={vectorFirst} alt="" />
                <img className='absolute bottom-0 left-0 w-20 md:w-32 lg:w-80' src={vectorSecond} alt="" />
            </div>
            <div className='container my-16 md:my-24 lg:my-32 lg:flex lg:gap-6'>
                <div className='lg:w-2/3'>
                    <h4 className='text-[#1A1919] font-extrabold text-lg mb-6'>Job Description: <span className='text-[#757575] font-medium text-base'>{description}</span></h4>
                    <h4 className='text-[#1A1919] font-extrabold text-lg mb-6'>Job Responsibility: <span className='text-[#757575] font-medium text-base'>{responsibility}</span></h4>
                    <h4 className='text-[#1A1919] font-extrabold text-lg mb-6'>Educational Requirements: <br /> <span className='text-[#757575] font-medium text-base'>{requirements}</span></h4>
                    <h4 className='text-[#1A1919] font-extrabold text-lg mb-6'>Experiences: <br /> <span className='text-[#757575] font-medium text-base'>{experiences}</span></h4>
                </div>
                <div className='lg:w-1/3'>
                    <div className='bg-gradient-to-r from-[#7e90fe1a] to-[#9873ff1a] p-8 rounded-lg'>
                        <h4 className='text-[#1A1919] font-extrabold text-xl mb-6 pb-6 border-b border-[#7e90fe4d] '>Job Details</h4>
                        <div className='mb-8'>
                            <p className='mb-4'>
                                <CurrencyDollarIcon className="text-[#7e90fe] h-6 w-6 inline-block mr-2" />
                                <span className='text-[#474747] font-bold text-xl'>Salary : </span>
                                <span className='text-[#757575] font-medium text-xl'>{salary} </span>
                            </p>
                            <p className='mb-4'>
                                <CalendarDaysIcon className="text-[#7e90fe] h-6 w-6 inline-block mr-2" /> <span className='text-[#474747] font-bold text-xl'>Job Title : </span>
                                <span className='text-[#757575] font-medium text-xl'>{title} </span>
                            </p>
                        </div>
                        <h4 className='text-[#1A1919] font-extrabold text-xl mb-6 pb-6 border-b border-[#7e90fe4d] '>Contact Information</h4>
                        <div className=''>
                            <p className='mb-4'>
                                <PhoneIcon className="text-[#7e90fe] h-6 w-6 inline-block mr-2" />
                                <span className='text-[#474747] font-bold text-xl'>Phone : </span>
                                <span className='text-[#757575] font-medium text-xl'>{phone} </span>
                            </p>
                            <p className='mb-4'>
                                <EnvelopeIcon className="text-[#7e90fe] h-6 w-6 inline-block mr-2" /> <span className='text-[#474747] font-bold text-xl'>Email : </span>
                                <span className='text-[#757575] font-medium text-xl'>{email} </span>
                            </p>
                            <p className=''>
                                <MapPinIcon className="text-[#7e90fe] h-6 w-6 inline-block mr-2" /> <span className='text-[#474747] font-bold text-xl'>Address : </span>
                                <span className='text-[#757575] font-medium text-xl'>{location} </span>
                            </p>
                        </div>
                    </div>
                    <button onClick={() => handleAddToCart(featureDetails)} className='btn-primary mt-6 w-full'>Apply Now</button>
                </div>
            </div>
        </>
    );
};

export default JobDetails;