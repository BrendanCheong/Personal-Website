import Image from "next/image";
import BuildMe from "@/pictures/BuildMe.png";

const ProjectCard = () => {
    return (
            <div id="card" className="">
                {/** <!-- container for all cards --> */}
                <div className="container flex flex-col mx-auto w-100 lg:w-4/5">
                {/** <!-- card --> */}
                    <div v-for="card in cards" className="flex flex-col w-11/12 mx-2 mt-4 ml-4 overflow-hidden rounded-lg shadow-xl bg-stone-50 dark:bg-slate-500 md:flex-row">
                        {/** <!-- media --> */}
                        <Image className="relative inset-0 block object-cover object-center w-auto h-auto p-3 lg:ml-14 md:w-1/2" 
                        src={BuildMe} 
                        alt="Project Preview Image" 
                        width={500}
                        height={300}
                        objectFit="cover"
                        responsive={"true"}
                        quality={100}
                        />
                        {/** <!-- content --> */}
                        <div className="flex flex-col justify-between w-full px-6 py-4 space-y-4 text-gray-800">
                            <h1 className="text-xl font-bold capitalize font-poppins">Build.Me, Your PC Building Friend</h1>
                            <p className="text-[16px] font-medium leading-tight font-nunito">
                                A price aggregator that collates different 
                                computer parts from a wide range of e-commerce websites such 
                                that computer building enthusiasts can easily 
                                find the best deals for computer parts.
                            </p>
                            <section className="flex flex-row space-x-2 font-poppins" id="Links">
                                <h2 className="mt-2 text-lg font-semibold tracking-wide text-gray-700 uppercase">
                                    Links:
                                </h2>
                                <section className="grid grid-cols-2 mt-[10px] divide-x divide-zinc-500">
                                    
                                    <p className="px-2 text-base font-semibold tracking-wide text-gray-700 underline ">
                                        Github
                                    </p>
                                    <p className="px-2 text-base font-semibold tracking-wide text-gray-700 underline">
                                        App
                                    </p>
                                </section>
                            </section>
                            <section id="tags" className="pt-2">
                                <h3 className="text-xs uppercase font-poppins">
                                fullstack development
                                </h3>
                            </section>
                        </div>
                    </div>
                {/** <!--/ card--> */}
                </div>
              {/** <!--/ flex--> */}
            </div>
    )
}

export default ProjectCard
