import {Routes, Route} from "react-router-dom";
import LoginPage from "../pages/login";
import MenuPage from "../pages/menu";
import ErroPage from "../pages/erro";


function MainRoutes(){

    return (
        <Routes>

            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/menu" element={<MenuPage/>}/>   
            <Route path="/*" element={<ErroPage/>}/>    
            
        </Routes>
    )


}

export default MainRoutes;
