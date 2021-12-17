import Github from "@/SVG/Github";

const Footer = () => {
    /**
     * TODO:
     * 1) Make this footer desktop responsive
     */
    return(
        <div className="flex flex-col content-center w-full h-48 p-5 mt-24 bg-green-300 rounded-t-3xl lg:hidden font-poppins" id="footer">
            <h1 className="text-center">Get In Touch With Me!</h1>
            <div className="w-full">
                <div className="flex flex-wrap">
                    <a className="flex flex-row items-center mt-4 mr-6 lg:mr-10" href="https://github.com/BrendanCheong" target="_blank" rel="noopener noreferrer"></a>
                        <div className="mt-1">
                            <Github/>
                        </div>
                        <span className="mt-1 ml-2 mr-1 text-md">GitHub</span>
                    <svg className="w-4 h-4 mt-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
                </div>
            </div>
        </div>
    )
    
}

export default Footer