import heroImg from '../../assets/images/hero.svg';
import profilePic from '../../assets/images/arafat.png';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const Hero = () => {
  return (
    <section className='bg-emerald-100 py-24 '>
      <div className=' mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-5xl md:text-7xl font-bold tracking-wider'>I'm Arafat</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Front-end developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            Develop a strong understanding of accessibility best practices and implement them in all projects.
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/ar0111' target='_blank'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/arafat-rahman-9062862b3/' target='_blank'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>

        <article className='hidden md:block mx-auto'>
          <img src={profilePic} className='h-96 lg:h-96 rounded' />
        </article>
      </div>
    </section>
  );
};
export default Hero;