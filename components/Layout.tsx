type props = {
    children: React.ReactNode
}

function Layout({children}: props) {
    return (
        <>
            <header>Header content</header>
            <main>{children}</main>
            <footer>Footer Content</footer>
        </>
    )
}

export default Layout;