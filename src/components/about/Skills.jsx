import React from 'react'
import './skills.css'

const frontendSkills = [
    {
        title: 'Javascript',
        percentage: '85%'
    },
    {
        title: 'HTML',
        percentage: '95%'
    },
    {
        title: 'CSS',
        percentage: '85%'
    },
    {
        title: 'React Js',
        percentage: '90%'
    },
    {
        title: 'Redux',
        percentage: '70%'
    }
]

const backendSkills = [
    {
        title: 'Node Js',
        percentage: '85%'
    },
    {
        title: 'Express.js',
        percentage: '90%'
    },
    {
        title: 'MongoDB',
        percentage: '85%'
    },
    {
        title: 'AWS',
        percentage: '70%'
    }
]

const Skills = () => {
    return <div className="skills__wrapper d-flex gap-5">
        <div className="frontend__skills w-50">
            {
                frontendSkills.map((item, index) => (
                    <SkillItem 
                    key={index} 
                    title={item.title} 
                    percentage={item.percentage}/>
                ))
            }
        </div>

        <div className="backend__skills w-50">
            {
                backendSkills.map((item, index) => (
                    <SkillItem 
                    key={index} 
                    title={item.title} 
                    percentage={item.percentage}/>
                ))
            }
        </div>
    </div>
};

const SkillItem = ({title, percentage}) => {
    return <div className="skill__data mb-3">
        <div className="skill__title d-flex align-items-center justify-content-between">
            <h6>{title}</h6>
            <span>{percentage}</span>
        </div>

        <div className="skill__bar">
            <span className="skill__bar-percentage" style={{width: `${percentage}`}}>

            </span>
        </div>
    </div>
};

export default Skills