import Image from "next/image";
import nodejs from "@/pictures/nodejs.png";

const SkillCard = () => {
    const frameworks = ["React", "JavaScript", "HTML", "CSS"]
    return (
        <div className="flex-none w-3/4 pt-10 h-5/6 sm:w-full" id="skillCard">
            <div className="overflow-visible ">
                <div className="relative w-full p-5 text-black bg-transparent h-80 pt-full transform-none md:w-4/6" id="skill tile">
                    <div className="absolute top-0 flex flex-col justify-between w-full h-full px-8 py-8 font-thin bg-indigo-500 rounded-md font-poppins text-slate-800">
                        <h1 className="w-1 text-xl">Frontend Development</h1>
                        <div className="relative w-full h-full bottom-28 left-8">
                            <Image
                            src={nodejs}
                            alt="NodeJs"
                            responsive={"true"}
                            className=""
                            quality={100}
                            objectFit="contain"
                            placeholder="blur"
                            // layout="fill"
                            width="300"
                            height="300"
                            objectPosition={75}
                            />
                        <section className="relative right-10 bottom-12">
                            {frameworks.map((item) => {
                                return <>
                                    <h2>
                                    {item}
                                    </h2>
                                </>
                            })}
                        </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCard
