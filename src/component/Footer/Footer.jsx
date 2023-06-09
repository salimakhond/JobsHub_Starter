import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#1A1919] text-white py-16 md:py-24 lg:py-32'>
            <div className='container'>
                <div className='md:flex md:flex-wrap lg:flex-nowrap lg:gap-24 container bg-[#1A1919] text-white border-b border-[#7E90FE]'>
                    <div className='md:w-6/12 lg:w-4/12 mb-10'>
                        <Link to='/'><h2 className='font-extrabold text-3xl mb-5'>JobsHub</h2></Link>
                        <p className='mb-5 md:mr-10 lg:mr-0  text-[#ffffffb3]'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    </div>
                    <div className='md:w-6/12 lg:w-2/12 mb-10'>
                        <h4 className='mb-4'>Company</h4>
                        <ul className='text-[#ffffffb3]'>
                            <li className='mb-4'>About Us</li>
                            <li className='mb-4'>Work</li>
                            <li className='mb-4'>Latest News</li>
                            <li className='mb-4'>Careers</li>
                        </ul>
                    </div>
                    <div className='md:w-6/12 lg:w-2/12 mb-10'>
                        <h4 className='mb-4'>Product</h4>
                        <ul className='text-[#ffffffb3]'>
                            <li className='mb-4'>Prototype</li>
                            <li className='mb-4'>Plans & Pricing</li>
                            <li className='mb-4'>Customers</li>
                            <li className='mb-4'>Integrations</li>
                        </ul>
                    </div>
                    <div className='md:w-6/12 lg:w-2/12 mb-10'>
                        <h4 className='mb-4'>Support</h4>
                        <ul className='text-[#ffffffb3]'>
                            <li className='mb-4'>Help Desk</li>
                            <li className='mb-4'>Sales</li>
                            <li className='mb-4'>Become a Partner</li>
                            <li className='mb-4'>Developers</li>
                        </ul>
                    </div>
                    <div className='md:w-6/12 lg:w-3/12 mb-10'>
                        <h4 className='mb-4'>Contact</h4>
                        <ul className='text-[#ffffffb3]'>
                            <li className='mb-4'>524 Broadway , NYC</li>
                            <li className='mb-4'>+1 777 - 978 - 5570</li>
                            <li className='mb-4'>info@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className='md:flex justify-between text-center text-[#ffffff66] pt-12'>
                    <p className='mb-4 md:mb-0'>@2023 CareerHub. All Rights Reserved</p>
                    <p>Powered by CareerHub</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;