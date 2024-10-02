import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import img1 from "../../assets/images/doctorsportal.png";
import img2 from "../../assets/images/selzmart.png";
import img3 from "../../assets/images/6.png";

const ProjectCard = ({ url, img, github, title, text, idx }) => {
    const imgarr = [];
    imgarr.push(img1);
    imgarr.push(img2);
    imgarr.push(img3);
    return (
        <article className='bg-white rounded-lg shadow-md hover:shadow-xl duration-300'>
            <img
                src= {imgarr[idx]}
                alt={title}
                className='w-full object-cover rounded-t-lg h-64'
            />
            <div className='capitalize p-8 flex flex-col'>
                <div className='h-3/4'>
                    <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
                    <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
                </div>
                <div className='mt-4 flex gap-x-4 h-1/4'>
                    <a href={url} target="_blank">
                        <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                    <a href={github} target="_blank">
                        <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;