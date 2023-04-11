import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';
import vectorFirst from '../../assets/vector-1.png';
import vectorSecond from '../../assets/vector.png';

const Statistics = () => {

    const data = useLoaderData();

    return (
        <>
            <div className='bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] py-28 pb-16 md:pb-20 lg:pt-48 lg:pb-32 relative'>
                <h2 className='font-extrabold text-3xl text-[#1A1919] text-center'>Statistics</h2>
                <img className='absolute top-0 right-0 w-20 md:w-32 lg:w-80' src={vectorFirst} alt="" />
                <img className='absolute bottom-0 left-0 w-20 md:w-32 lg:w-80' src={vectorSecond} alt="" />
            </div>
            <div className='container my-16 md:my-24 lg:my-32'>
                <ResponsiveContainer width='100%' aspect={3}>
                    <AreaChart
                        width={1280}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                        className='w-full'
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default Statistics;