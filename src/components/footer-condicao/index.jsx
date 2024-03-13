import { useLocation } from 'react-router-dom'
import Footer from '../footer'

function Footercond(){

    const { pathname } = useLocation();

    const rotasComFooter = [
        "/login",
        "/menu",
        "/conta",
        "/feedback",
        "/sobre",
        "/niveis_jogo1",
        "/niveis_jogo2",
        "/niveis_jogo3",
        "/alfabeto_libras",
        "/ranking"
    ]

    if ( rotasComFooter.includes(pathname) ){
        return <Footer/>
    }
}

export default Footercond