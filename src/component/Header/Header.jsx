import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='px-4 md:px-8 py-5 lg:py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl'>
            <div className='relative flex items-center justify-between'>
                <div className=''>
                    <h2 className='font-extrabold text-[#1A1919] text-3xl'>JobHub</h2>
                </div>
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to='/appliedJobs' className={({ isActive }) => (isActive ? 'active' : 'default')}>Applied Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                    </li>
                </ul>
                <button className='btn-primary hidden'>Star Applying</button>

                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3Icon className="h-10 w-10" />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute z-10 top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <h2 className='font-extrabold text-[#1A1919] text-3xl'>JobHub</h2>
                                    </div>
                                    <div>
                                        <button
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className="h-8 w-8" />
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <NavLink to='/'
                                                className={({ isActive }) => (isActive ? 'active' : 'default')}>Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/statistics' className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/appliedJobs' className={({ isActive }) => (isActive ? 'active' : 'default')}>Applied Jobs</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
                                        </li>
                                    </ul>
                                    <button className='btn-primary mt-5'>Star Applying</button>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;