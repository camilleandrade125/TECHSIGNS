import "./style.css"
import img_logo from '../../../public/logo-tech.png'

function Footer(){
    return  (
       <div className="title-footer">
       <img className="navbar-logo" src={img_logo} alt="logo techsigns"/>
       <h1><p>&copy; 2024 Grupo Seleto</p></h1>
       <img className="navbar-logo" src={img_logo} alt="logo techsigns"/>
       </div>
    )
}

export default Footer