import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from "../../utils/data";
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {

    const [selectedSKill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
    }

  return (
    <section className='skills-container'>
        <h5>Conhecimentos Técnicos</h5>

        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) => (
                    <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSKill.title === item.title}
                        onClick={() => {
                            handleSelectedSkill(item);
                        }}
                    />
                ))}
            </div>

            <div className="skills-info">
                    <SkillsInfoCard
                        heading={selectedSKill.title}
                        skills={selectedSKill.skills}
                    />
            </div>
        </div>
    </section>
  )
}

export default Skills