import Image from "next/image";

const ProjectCard = () => {
    return ( 
            <div id="card" className="">
                {/** <!-- container for all cards --> */}
                <div className="container flex flex-col mx-auto w-100 lg:w-4/5">
                {/** <!-- card --> */}
                    <div v-for="card in cards" className="flex flex-col mx-2 mt-4 overflow-hidden bg-white rounded-lg shadow-xl md:flex-row w-100">
                        {/** <!-- media --> */}
                        <div className="relative block w-auto h-64 md:w-1/2">
                            <Image className="inset-0 object-cover object-center w-full h-full" 
                            loader={() => "https://picsum.photos/500"} 
                            src={"https://picsum.photos/500"} 
                            alt="Project Preview Image" 
                            width={500}
                            height={300}
                            objectFit="cover"
                            responsive={true}
                            quality={100}
                            />
                        </div>
                        {/** <!-- content --> */}
                        <div className="flex flex-col justify-between w-full px-6 py-4 text-gray-800">
                            <h3 className="text-lg font-semibold leading-tight">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin est diam, lacinia finibus lacus ullamcorper ut. In hendrerit dui eleifend elit finibus, ut viverra lorem tempor. Quisque cursus maximus diam. Vestibulum vestibulum eros vel neque pharetra, a auctor ante aliquet. Sed vitae ipsum lorem. Vivamus condimentum efficitur cursus. Donec et mattis turpis, at tristique felis.
                            </h3>
                            <p className="mt-2">
                                FUCK
                            </p>
                            <p className="mt-2 text-sm font-semibold tracking-wide text-gray-700 uppercase">
                                FUCK
                            </p>
                        </div>
                    </div>
                {/** <!--/ card--> */}
                </div>
                {/** <!--/ flex--> */}
            </div>
    )
}

export default ProjectCard
