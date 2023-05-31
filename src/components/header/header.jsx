import Navbar from "./navbar"

const Header = () => {

    return (
    <header className="header">
        <div className="headerContainer">
            <h1 className="brand">Crazy<span>4</span>Boxing</h1>
            <Navbar />
        </div>
    </header>
    )
}

export default Header