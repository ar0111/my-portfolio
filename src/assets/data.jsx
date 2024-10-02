import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { IoLogoFirebase } from "react-icons/io5";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Strong understanding of asynchronous programming using promises and async/await. Contributed to an open-source library utilizing web workers for background tasks.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Firebase',
    icon: <IoLogoFirebase className='h-16 w-16 text-emerald-500' />,
    text: 'Implemented user authentication with Firebase Authentication and social logins. Deployed a portfolio website with Firebase Hosting, ensuring fast loading times and global scalability.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://final-project-e507c.web.app/',
    github: 'https://github.com/ar0111/Doctors_Portal_Frontend',
    title: 'Doctors Portal',
    text: 'This is used for book appoinment of specialised doctors. User can book appoinment of an specific date and time. One can not book more than one on an specific date. Admin can add and delete doctors. Admin also make anyone admin.There is two division user and admin. In dashboard user can see only his/her booked appoinment. Also, he/she can pay there. Doing Backend with NodeJS and MongoDB. Provide Authentication with Firebase.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://selz-mart.web.app/',
    github: 'https://github.com/ar0111/Selz-Frontend',
    title: 'Selz Mart',
    text: 'This website for buy and sell of used electronics and gadgets. There are three division - Seller, Buyer and Admin. When one user sign up, by default his/her role will be set to buyer unless he/she choose seller role. Admin role can be available when admin set anyone role as admin. Seller can add or delete any product. He/she can also see all products in dashboard. User can see their booked products in dashboard. Doing Backend with NodeJS and MongoDB. Provide Authentication with Firebase.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://jobster-3d220.web.app/',
    github: 'https://github.com/ar0111/Jobster_Frontend',
    title: 'Jobster',
    text: 'This website for tracking job status for personal use. Any user can track his/her job application status by this site. He can listed all jobs by interview, pending and declined. User can add new job, delete existing job and edit it also.',
  }
];
