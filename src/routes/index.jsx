import {Routes, Route} from "react-router-dom";
import LoginPage from "../pages/login";
import MenuPage from "../pages/menu";
import ErroPage from "../pages/erro";
import MenuConta from "../pages/conta";
import MenuSobre from "../pages/sobre";
import MenuFeedback from "../pages/feedback";


function MainRoutes(){

    return (
        <Routes>

            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/menu" element={<MenuPage/>}/>   
            <Route path="/conta" element={<MenuConta/>}/>
            <Route path="/sobre" element={<MenuSobre/>}/>
            <Route path="/feedback" element={<MenuFeedback/>}/>
            <Route path="/*" element={<ErroPage/>}/>    
            
        </Routes>
    )


}

export default MainRoutes;
