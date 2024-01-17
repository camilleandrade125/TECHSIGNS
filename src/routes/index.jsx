import {Routes, Route} from "react-router-dom";
import LoginPage from "../pages/login";
import MenuPage from "../pages/menu";
import ErroPage from "../pages/erro";
import MenuConta from "../pages/conta";
import MenuSobre from "../pages/sobre";
import MenuFeedback from "../pages/feedback";
import NiveisPage from "../pages/niveis_jogo1";
import NiveisPage2 from "../pages/niveis_jogo2";
import NiveisPage3 from "../pages/niveis_jogo3";
import Jogo1 from "../pages/jogo1/nivel1";
import Jogo2 from "../pages/jogo2/nivel1";

function MainRoutes(){

    return (
        <Routes>

            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/menu" element={<MenuPage/>}/>   
            <Route path="/conta" element={<MenuConta/>}/>
            <Route path="/sobre" element={<MenuSobre/>}/>
            <Route path="/feedback" element={<MenuFeedback/>}/>
            <Route path="/niveis_jogo1" element={<NiveisPage/>}/>
            <Route path="/niveis_jogo2" element={<NiveisPage2/>}/>
            <Route path="/niveis_jogo3" element={<NiveisPage3/>}/>
            <Route path="/*" element={<ErroPage/>}/>    
            <Route path="/jogo1" element={<Jogo1/>}/>
            <Route path="/jogo2" element={<Jogo2/>}/> 

        </Routes>
    )


}

export default MainRoutes;
