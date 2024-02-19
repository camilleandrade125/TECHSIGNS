import {Link} from 'react-router-dom'
import "./style.css"
import img_logo_text from '../../../public/techsigns-logo.png'
import { useLocation } from 'react-router-dom'
import HeaderLogin from '../header-login'
import { FaHands } from "react-icons/fa6";



function Header(){

    const { pathname } = useLocation();

    const rotasComHeaderDeLogin = [
        "/sobre",
        "/menu",
        "/conta",
        "/feedback",
        "/niveis_jogo1",
        "/niveis_jogo2",
        "/niveis_jogo3",
        "/alfabeto_libras"
    ]

    if ( rotasComHeaderDeLogin.includes(pathname) ){

        return  (
            <header className="navbar-header">
                <div className='testt'>
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

                        <FaHands className="hands"/>
                    </nav>
                    </div>
                </header>
            )

    }

    return <HeaderLogin/>
}

export default Header