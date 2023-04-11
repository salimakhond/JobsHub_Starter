import React from 'react';
import vectorFirst from '../../assets/vector-1.png';
import vectorSecond from '../../assets/vector.png';

const Blog = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-[#7e90fe0d] to-[#9873ff0d] py-28 pb-16 md:pb-20 lg:pt-48 lg:pb-32 relative'>
                <h2 className='font-extrabold text-3xl text-[#1A1919] text-center'>Blog</h2>
                <img className='absolute top-0 right-0 w-20 md:w-32 lg:w-80' src={vectorFirst} alt="" />
                <img className='absolute bottom-0 left-0 w-20 md:w-32 lg:w-80' src={vectorSecond} alt="" />
            </div>
            <div className='container my-16 md:my-24 lg:my-32'>
                <div className='mb-8'>
                    <h3 className='text-[#1A1919] font-bold text-xl mb-4'>1. When should you use context API?
                    </h3>
                    <p className='text-[#757575] text-lg font-medium'>Ans: If you only want to avoid passing some props through many levels is often a simpler solution than Context API. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
                </div>
                <div className='mb-8'>
                    <h3 className='text-[#1A1919] font-bold text-xl mb-4'>2. What is a custom hook?</h3>
                    <p className='text-[#757575] text-lg font-medium'>Ans: custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. when you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
                </div>
                <div className='mb-8'>
                    <h3 className='text-[#1A1919] font-bold text-xl mb-4'>3. What is useRef?
                    </h3>
                    <p className='text-[#757575] text-lg font-medium'>Ans: useRef is a React Hook that lets you reference a value that's not needed for rendering. useRef Hook mainly used for creating a reference of the DOM element or directly accessing it inside a functional component.</p>
                </div>
                <div className=''>
                    <h3 className='text-[#1A1919] font-bold text-xl mb-4'>4. What is useMemo?</h3>
                    <p className='text-[#757575] text-lg font-medium'>Ans: useMemo hook that is used in the functional component of React that returns a memoized value. useMemo hook is related to the fact that we try to avoid the unnecessary re-rendering of components and props in our program.</p>
                </div>
            </div>
        </>
    );
};

export default Blog;