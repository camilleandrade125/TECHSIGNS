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

        nav('/menu');

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
        <section className="conteiner-showModal">
        <label>
        <p>Nome Completo</p>
        <input type="text"></input>
        </label>

        <label>
        <p>Email</p>
        <input type="email" ></input>
        </label>

        <label>
        <p>Idade</p>
        <input type="number"></input>
        </label>

        <label>
        <p>Senha</p>
        <input type="password"></input>
        </label>

        <label>
        <p>Confirmar senha</p>
        <input type="password"></input>
        </label>

        <button id="modal-bts">Cadastrar</button> 
        </section>
        </Modal>

        <div className="area-container">

                <div className="login-area">

                    <form onSubmit={enviarForm} className="inputs">

                        <h1>{email}</h1>
                        <h1>{senha}</h1>

                        <p id="texto"><strong>Conecte-se além das palavras!</strong></p>
                        <h1 id="title-login">Login</h1>
                        <label>
                        <p>Email</p>
                        <input onChange={handleEmail} type="email"></input>
                        </label>

                        <label>
                        <p>Senha</p>
                        <input onChange={handelSenha} type="password" ></input>
                        </label>

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