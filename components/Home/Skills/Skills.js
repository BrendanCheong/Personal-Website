import SkillCard from "./SkillCard"

const Skills = () => {
    return (
        <div className="flex flex-no-wrap gap-2 overflow-x-scroll bg-transparent sm:grid lg:overflow-visible sm:grid-cols-2 h-96" id="Skills">
            <SkillCard/>
            <SkillCard/>
            <SkillCard/>
        </div>
    )
}

export default Skills
