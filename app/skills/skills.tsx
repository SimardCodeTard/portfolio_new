import SchoolSkills from './school-skills/school-skills';
import './skills.css';
import TechList from './tech-list/tech-list';

export default function SkillsPage() {

    return <div id='skills' className='skills-page w-full'>
        <h2 className="mx-6 ">Mes compétences</h2>
        <SchoolSkills></SchoolSkills>
        <TechList></TechList>
    </div>
}