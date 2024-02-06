import {Link} from 'react-router-dom'
import "./style.css"
import img_logo_text from '../../../public/logo-tech-text.png'
import { useLocation } from 'react-router-dom'
import HeaderLogin from '../header-login'



function Header(){

    const { pathname } = useLocation();

    const rotasComHeaderDeLogin = [
        "/sobre",
        "/menu",
        "/conta",
        "/feedback",
        "/niveis_jogo1",
        "/niveis_jogo2",
        "/niveis_jogo3"
    ]

    if ( rotasComHeaderDeLogin.includes(pathname) ){

        return  (
            <header className="navbar-header">
                <nav>
                    <div className="navbar-style">
                        <figure>
                            <Link to="/menu">
                            <img className="navbar-logo-text" src={img_logo_text} alt="lodo escrito techsigns"/>
                            </Link>
                        </figure>
                    </div>
        
                        <ul id="page-select"className="navbar-list">
                            <li><Link to="/menu" className="navbar-link">MENU</Link></li>
                            <li><Link to="/conta" className="navbar-link">PERFIL</Link></li>
                            <li><Link to="/feedback" className="navbar-link">FEEDBACK</Link></li>
                            <li><Link to="/sobre" className="navbar-link">SOBRE</Link></li>
                        </ul>
                    </nav>
                </header>
            )

    }

    return <HeaderLogin/>
}

export default Header