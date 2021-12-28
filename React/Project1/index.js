
function Header() {
    return(
        <header>
            <nav>
                <img src="react-icon.png" width="40px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
function MainContent() {
    return(
        <div>
            <h1>Fun facts about React</h1>
            <ul>
                <li>It was released in 2013</li>
                <li>It was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

function Footer() {
    return(
        <footer>
            <small>© 2021 Luziga Development.</small>
        </footer>
        
    )
}

function Page() {
    return(
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"))