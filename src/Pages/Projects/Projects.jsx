import React from 'react';
import SectionTitle from '../Components/SectionTitle';
import { projects } from '../../assets/data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className='container mx-auto px-10 md:px-0'>
            <section className='py-20 align-element' id='projects'>
                <SectionTitle text='web creations' />
                <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {projects.map((project, idx) => {
                    return <ProjectCard key={project.id} {...project} idx={idx} />;
                    })}
                </div>
            </section>
        </div>
    );
};

export default Projects;