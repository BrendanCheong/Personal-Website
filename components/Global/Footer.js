import Github from "@/SVG/Github";
import LinkedIn from "@/SVG/LinkedIn";
import Mail from "@/SVG/Mail";

const Footer = () => {
    /**
     * TODO:
     * 1) Make this footer desktop responsive
     */
    return(
        <div className="flex flex-col content-center w-full h-40 p-5 mt-20 space-y-5 bg-neutral-100 rounded-t-3xl lg:hidden font-poppins" id="footer">
            <h1 className="text-lg font-bold text-center uppercase">Get In Touch With Me!</h1>
            <div className="w-full" id="Links">
                <div className="flex flex-row space-x-5 text-black dark:text-white ml-7">
                    <a className="flex flex-row items-center mt-4 lg:mr-10" href="https://github.com/BrendanCheong" target="_blank" rel="noopener noreferrer">
                        <div className="mt-1">
                            <Github/>
                        </div>
                        <span className="mt-1 mr-1 underline text-md">GitHub</span>
                    </a>
                    <a className="flex flex-row items-center mt-4 lg:mr-10" href="https://www.linkedin.com/in/brendan-cheong-ern-jie/" target="_blank" rel="noopener noreferrer">
                        <div className="mt-1">
                            <LinkedIn/>
                        </div>
                        <span className="mt-1 mr-1 underline text-md">LinkedIn</span>
                    </a>
                    <a className="flex flex-row items-center mt-4 lg:mr-10" href="mailto: brendan_cej@u.nus.edu" target="_blank" rel="noopener noreferrer">
                        <div className="mt-1">
                            <Mail/>
                        </div>
                        <span className="mt-1 mr-1 underline text-md">Email</span>
                    </a>
                </div>
            </div>
        </div>
    )
    
}

export default Footer