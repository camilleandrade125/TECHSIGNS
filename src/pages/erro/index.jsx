
import "./style.css"

import Erro from "../../components/erro-componente"

function ErroPage(){

    return(
        <div className="error-container">
            <Erro/>
            <h1>Ops, parece que essa página não existe...</h1>
        </div>
    )

}

export default ErroPage