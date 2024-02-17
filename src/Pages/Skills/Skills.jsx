import SectionTitle from '../Components/SectionTitle';
import { skills } from '../../assets/data';
import SkillCard from './SkillCard';
const Skills = () => {
  return (
    <div className='container mx-auto'>
        <section className='px-10 md:px-0 py-20 align-element ' id='skills'>
            <SectionTitle text='tech stack' />
            <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                {skills.map((skill) => {
                return <SkillCard key={skill.id} {...skill} />;
                })}
            </div>
        </section>
    </div>
  );
};
export default Skills;