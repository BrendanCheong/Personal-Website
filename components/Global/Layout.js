const Layout = ({ children }) => {
    return (
        <div className="flex flex-col w-screen h-screen bg-white dark:bg-bluegray-800">
            {children}
        </div>
    )
}

export default Layout
