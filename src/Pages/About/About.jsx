import React from 'react';
import aboutSvg from '../../assets/images/about.svg'
import Title from '../Components/Title';
import resume from '../../assets/Resume.pdf';

const About = () => {
    return (
        <section className='bg-white py-20 px-10 md:px-0' id='about'>
            <div className='container mx-auto'>
                <Title text='About Me'></Title>
                <div className='flex md:flex-row flex-col justify-between gap-10 md:gap-24'>
                    <img src={aboutSvg} className='w-72 h-72' />

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 shadow-2xl p-6 rounded-lg'>
                        <div className=''>
                            <p className='text-slate-600 leading-loose mb-6'>
                                I am Arafat Rahman, frontend web developer from Dhaka, Bangladesh. I have rich expertise in web site developement, design and customizstion using Html, CSS, Javascript, React, TailwindCSS, BootStrap. I can developing and maintaining server-side applications using Node.js and building and maintaining RESTful APIs. Integrating user-facing elements developed by front-end developers with server-side logic. Provide Authentication with Firebase.
                            </p>

                            <a href={resume} download className='py-2 px-6 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75'>Download CV</a>
                        </div>

                        <div className=''>
                            <div>
                                <div className='flex justify-between'>
                                    <h3>HTML</h3>
                                    <h3>85%</h3>
                                </div>
                                <div className='bg-slate-200 h-3 rounded-lg'>
                                    <div className='bg-amber-500 w-[85%] h-full rounded-lg'></div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='flex justify-between'>
                                    <h3>CSS</h3>
                                    <h3>85%</h3>
                                </div>
                                <div className='bg-slate-200 h-3 rounded-lg'>
                                    <div className='bg-amber-500 w-[85%] h-full rounded-lg'></div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='flex justify-between'>
                                    <h3>Tailwind CSS</h3>
                                    <h3>75%</h3>
                                </div>
                                <div className='bg-slate-200 h-3 rounded-lg'>
                                    <div className='bg-amber-500 w-[75%] h-full rounded-lg'></div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='flex justify-between'>
                                    <h3>Javascript</h3>
                                    <h3>70%</h3>
                                </div>
                                <div className='bg-slate-200 h-3 rounded-lg'>
                                    <div className='bg-amber-500 w-[70%] h-full rounded-lg'></div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='flex justify-between'>
                                    <h3>React JS</h3>
                                    <h3>70%</h3>
                                </div>
                                <div className='bg-slate-200 h-3 rounded-lg'>
                                    <div className='bg-amber-500 w-[70%] h-full rounded-lg'></div>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className='flex justify-between'>
                                    <h3>Node JS</h3>
                                    <h3>40%</h3>
                                </div>
                                <div className='bg-slate-200 h-3 rounded-lg'>
                                    <div className='bg-amber-500 w-[40%] h-full rounded-lg'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default About;