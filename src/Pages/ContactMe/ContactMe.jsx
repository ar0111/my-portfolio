import React, { useRef } from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        
        emailjs.sendForm('service_1ei2fwj', 'template_dh9yh7a', form.current, 'tJL8oiV37682Rs2bq')
          .then((result) => {
                console.log(result.status);
                toast.success("Thank you for reaching out to me. I will get back to you soon")
                e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
    };

    return (
        <div className='bg-emerald-100'>
            <div className='container mx-auto pt-6 pb-10' id='contact'>
                <div className='text-center'>
                    <h4>Get in Touch</h4>
                    <h1 className='text-4xl font-bold uppercase py-4'>Contact Me</h1>
                </div>
            
                <div className='grid grid-cols-1 md:grid-cols-2 gap-24 mt-10 px-10 md:px-64 items-center'>
                    <div>
                        <div className='flex justify-start gap-6 items-center'>
                            <div className='w-10 h-10 rounded-full bg-emerald-300'><FaPhone className='mx-auto my-2' size={26} style={{color: "#4b5563",}}/></div>
                            <a href="#">+8801632267145</a>
                        </div>
                        <div className='flex justify-start gap-6 py-10 items-center'>
                            <div className='w-10 h-10 rounded-full bg-emerald-300'>
                                <MdEmail className='mx-auto my-2' size={26} style={{color: "#4b5563",}}/>
                            </div>
                            
                            <a href="#">arafat.rahman9190@gamil.com</a>
                        </div>
                        <div className='flex justify-start gap-6 items-center'>
                            <div className='w-10 h-10 rounded-full bg-emerald-300'>
                                <IoLocation className='mx-auto my-2' size={26} style={{color: "#4b5563"}}/>
                            </div>
                            <a href="#">Dhaka, Bangladesh</a>
                        </div>
                    </div>

                    <div>
                        <div className='md:basis-1/3 sm:basis-1/4'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="sm:col-span-3">
                                    <label className="text-start block text-sm font-medium leading-6 text-gray-900">Name</label>
                                    <div className="mt-2">
                                        <input type="text" name="from_name" id="first-name" autoComplete="given-name" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3 my-3">
                                    <label className="text-start block text-sm font-medium leading-6 text-gray-900">Email</label>
                                    <div className="mt-2">
                                        <input type="email" name="email_id" id="email_id" autoComplete="given-name" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div className="sm:col-span-3 my-3">
                                    <label className="text-start block text-sm font-medium leading-6 text-gray-900">Type Your Message</label>
                                    <div className="mt-2">
                                        <textarea id="about" name="message" rows="4" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>

                                <input className="btn btn-info w-full my-3 text-xl uppercase" type="submit" value="Send email" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default ContactMe;