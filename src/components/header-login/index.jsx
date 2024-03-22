import "./style.css"
import img_logo_text from '../../../public/techsigns-logo.png'

function HeaderLogin(){
    return(
        <header className="navbar-login">
        <div className="navbar-login-style">
        <img className="navbar-logo-text" src={img_logo_text} alt="lodo escrito techsigns"/>
        
        </div>
        </header>
         
    
    )

}

export default HeaderLogin