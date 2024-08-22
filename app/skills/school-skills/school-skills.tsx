import { skills } from "@/app/models/skill";

export default function SchoolSkills() {
    return <div className="school-skills">
        <table className="school-skills-table">
            <thead>
                <tr>
                    <td>Année</td>
                    {skills.map((skill, key) => <th key={key}>{skill.label}</th>)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    {skills.map((skill, key) => <td key={key}>{skill.y1Desc}</td>)}
                </tr>
                <tr>
                    <td>2</td>
                    {skills.map((skill, key) => <td key={key}>{skill.y2Desc}</td>)}
                </tr>
                <tr>
                    <td>3</td>
                    {skills.map((skill, key) => <td key={key}>{skill.y3Desc}</td>)}
                </tr>
            </tbody>
        </table>
    </div>
}