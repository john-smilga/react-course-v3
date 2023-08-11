import SkillsCard from './SkillsCard';
import { skills } from '../data';
import SectionTitle from './SectionTitle';
const Skills = () => {
  return (
    <section className='py-20 align-element' id='skills'>
      <SectionTitle text='tech stack ' />

      <div class=' py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
