import "./style.css"
import img_logo_text from '../../../public/TECHSIGNS!-ESCRITO.png'
import img_logo from '../../../public/logo-tech.png'

function Header(){
    return  (
    <header className="navbar-header">
        <nav>
            <div className="navbar-style">
                <img className="navbar-logo-text" src={img_logo_text} alt="lodo escrito techsigns"/>
            </div>

                <ul className="navbar-list">
                    <li><a className="navbar-link" href="#">MENU</a></li>
                    <li><a className="navbar-link"href="#">CONTA</a></li>
                    <li><a className="navbar-link"href="#">FEEDBACK</a></li>
                    <li><a className="navbar-link"href="#">SOBRE</a></li>
                </ul>

                <div>
                    <img className="navbar-logo"src={img_logo} alt="logo techsigns"/>
                </div>
            </nav>
        </header>
    )
}

export default Header