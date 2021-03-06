const Navbar = () => {
    /**
     * TODO:
     * 1) Remove Shadow Upon Scrolling with document.adddEventListener('scroll', event)
     * 2) Make Navbar Desktop Responsive on Laptops and Monitors
     */
    return (
        <div className="flex flex-row w-screen h-[60px] bg-white top-0 z-50 fixed" id="navbar">
            <div id="navbar content" className="absolute flex flex-row p-5 space-x-10">
                <svg className="w-[30px] h-[30px] -mt-1" fill="currentColor" id="home" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <div id="right section" className="flex flex-row">
                    <div id="Navbar Text Redirects" className="flex flex-row font-medium uppercase space-x-[12px] font-nunito text-sm">
                        <h1>Projects</h1>
                        <h1>Skills</h1>
                        <h1>Contact</h1>
                    </div>
                    <svg className="w-[35px] h-[35px] -mt-2 relative top-0 left-10" fill="currentColor" id="lightbulb" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar
