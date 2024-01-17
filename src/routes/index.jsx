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
            
        </Routes>
    )


}

export default MainRoutes;
