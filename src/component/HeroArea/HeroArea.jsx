import React from 'react';
import heroImg from '../../assets/hero-img.png'
const HeroArea = () => {
    return (
        <div className='bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d]'>
            <div className='lg:flex justify-center items-center gap-16 px-4 md:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl pt-40'>
                <div className='lg:w-1/2'>
                    <h2 className='text-[#1A1919] font-extrabold text-4xl md:text-7xl mb-6'>One Step Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h2>
                    <p className='text-[#757575] font-medium text-lg mb-8 mr-10'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary mb-8'>Get Started</button>
                </div>
                <div className='lg:w-1/2'>
                    <img className='w-full' src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroArea;