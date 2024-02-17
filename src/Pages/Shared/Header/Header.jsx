import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const menuItems = <>
        <li className='font-semibold text-lg p-0'><a className='px-2' href='#'>Home</a></li>
        <li className='font-semibold text-lg'><a className='px-2' href='#about'>About</a></li>
        <li className='font-semibold text-lg'><a className='px-2' href='#skills'>Skills</a></li>
        <li className='font-semibold text-lg'><a className='px-2' href='#projects'>Projects</a></li>
        <li className='font-semibold text-lg'><a className='px-2' href='#'>Contact</a></li>
    </>

    return (
        <div className='bg-emerald-100'>
            <div className="navbar flex justify-start items-center container mx-auto gap-10 py-6">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-0 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a href='#' className="text-2xl font-bold">Web<span className='text-green-600'>Dev</span></a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;