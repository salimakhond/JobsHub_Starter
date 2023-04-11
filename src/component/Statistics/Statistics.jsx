import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';


const Statistics = () => {

    const data = useLoaderData();
    
    return (
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
    );
};

export default Statistics;