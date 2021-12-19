import Github from "@/SVG/Github";
import LinkedIn from "@/SVG/LinkedIn";
import Mail from "@/SVG/Mail";

const Footer = () => {
    /**
     * TODO:
     * 1) Make this footer desktop responsive
     */
    return(
        <section className="bg-transparent">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-5 overflow-hidden sm:px-6 lg:px-8">
                <h1 className="text-xl text-center font-poppins text-neutral-400">Get In Touch With Me!</h1>
                <div className="flex justify-center mt-8 space-x-6">
                    <a href="https://www.linkedin.com/in/brendan-cheong-ern-jie/" className="text-gray-400 hover:text-gray-500" target="_blank"
                    rel="noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <LinkedIn/>
                    </a>
                    <a href="https://github.com/BrendanCheong" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub</span>
                        <Github/>
                    </a>
                    <a href="mailto: brendan_cej@u.nus.edu" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Email</span>
                        <Mail/>
                    </a>
                </div>
                <p className="mt-8 font-sans text-base leading-6 text-center text-gray-400 dark:text-white">
                    Made by Brendan Cheong.
                </p>
            </div>
    </section>
    )
}

export default Footer