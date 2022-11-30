import logo from '../img/logo192.png'

const Header =() => {
    return (
        <header>
            <nav className="nav">
                <img className="nav-logo" src={logo} alt= "React logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        <h1 Style="font-family:verdana">Fun facts about React</h1>
        </header>
    )
}

export default Header