const Layout = ({ children }) => {
    return (
        <div className="outline-none">
            <div className="flex flex-col w-screen h-full min-h-screen transition duration-500 ease-in-out bg-white dark:bg-slate-800">
                <div className="container relative mx-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
