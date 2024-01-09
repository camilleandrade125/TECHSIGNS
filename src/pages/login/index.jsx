import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./style.css"
import Footer from '../../components/footer';
import Modal from "../../components/modal";

function LoginPage(){

    const nav = useNavigate();

    const [ email, setEmail ] = useState('');
    const [senha, setSenha ] = useState('');
    const [ showModal, setShowModal ] = useState(false);
    
    function enviarForm(evento){
  
        evento.preventDefault()

    }

    function handleEmail(evento){

        setEmail(evento.target.value);

    }

    function handelSenha(evento){

        setSenha(evento.target.value);

    }

    function entrar(){

        nav('/entrar');

    }

    function cadastrarSe(){

        setShowModal(true)

    }

    function fecharModal(){

        setShowModal(false);

    }


    return (
   
        <>

        <Modal visible={showModal} onClose={fecharModal}>
            
            <div id="div-modal">  
            <input placeholder="Nome"/>
            <input type="email" placeholder="Email"/>
            <input type="number" placeholder="Idade"/>
            <input type="password" placeholder="Senha"/>
            <input type="password"placeholder="Confirmar senha"/>
            </div>

            <button id="modal-bts">Cadastrar</button>
        
            

        </Modal>

        <div className="area-container">

                <div className="login-area">

                    <form onSubmit={enviarForm} className="inputs">

                        <h1>{email}</h1>
                        <h1>{senha}</h1>

                        <p id="texto"><strong>Conecte-se além das palavras!</strong></p>
                        <h1 id="title-login">Login</h1>

                        <input onChange={handleEmail} type="email" placeholder="Email"></input>
                        <input onChange={handelSenha} type="password" placeholder="Senha"></input>

                        <div className="bts"> 
                        <button onClick={entrar}>Entrar</button>
                        <button onClick={cadastrarSe}>Cadastre-se</button>
                        </div>

                
                    </form>

                    <section className="login-background"></section>
                    
                </div>

        </div>

            <Footer/>
        </>

    )

}

export default LoginPage