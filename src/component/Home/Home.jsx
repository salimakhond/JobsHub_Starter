import React, { useEffect, useState } from 'react';
import HeroArea from '../HeroArea/HeroArea';
import JobCategory from '../JobCategory/JobCategory';
import { useLoaderData } from 'react-router-dom';
import Features from '../Features/Features';

const Home = () => {
    const [jobCategory, setJobCategory] = useState([])

    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    }, [])


    const features = useLoaderData();
    const [seeAll, setSeeALl] = useState(false);

    return (
        <div>
            <HeroArea></HeroArea>
            <div className='container my-16 md:my-24 lg:my-32'>
                <div className='text-center mb-8'>
                    <h2 className='text-[#1A1919] text-4xl lg:text-5xl font-extrabold mb-4'>Job Category List</h2>
                    <p className='text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        jobCategory.map(category => <JobCategory key={category.id} category={category}></JobCategory>)
                    }
                </div>
            </div>

            <div className='container my-16 md:my-24 lg:my-32'>
                <div className='text-center mb-8'>
                    <h2 className='text-[#1A1919] text-4xl lg:text-5xl font-extrabold mb-4'>Featured Jobs</h2>
                    <p className='text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid lg:grid-cols-2 gap-6'>
                    {
                        features.slice(0, seeAll ? 6 : 4).map(feature => <Features key={feature.id} feature={feature}></Features>)
                    }
                </div>
                <div className='text-center mt-8'>
                    {!seeAll &&
                        <button onClick={setSeeALl} className='btn-primary'>See All Jobs</button>
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;