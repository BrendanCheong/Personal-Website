import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className="relative flex flex-col mt-20 space-y-5" id="Projects">
            <h1 className="p-5 text-3xl font-bold underline capitalize font-poppins">Projects</h1>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    )
}

export default Projects
