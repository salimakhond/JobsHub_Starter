import React from 'react';
import HeroArea from '../HeroArea/HeroArea';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {
    const jobCategory = useLoaderData();
    return (
        <div>
            <HeroArea></HeroArea>
            <div className=' px-4 md:px-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl my-32'>
                <div className='text-center mb-8'>
                    <h2 className='text-[#1A1919] text-5xl font-extrabold mb-4'>Job Category List</h2>
                    <p className='text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid grid-cols-4 gap-6'>

                    {
                        jobCategory.map(category => <JobCategory key={category.id} category={category}></JobCategory>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;