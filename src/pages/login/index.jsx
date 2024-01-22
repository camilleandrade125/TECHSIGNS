import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./style.css"
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
        <Modal visible={showModal} onClose={fecharModal} title="Dados cadastrais">

        <form className="conteiner-showModal">
    <label>
        <p>Nome Completo</p>
        <input type="text" />
    </label>

    <label>
        <p>Email</p>
        <input type="email" />
    </label>

    <label>
        <p>CPF</p>
        <input
            type="text"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            placeholder="123.456.789-01"
            title="Enter a valid CPF (123.456.789-01)"
        />
    </label>

    <label>
        <p>Genero</p>
        <select>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outros</option>
        </select>
    </label>

    <label>
        <p>Data de nascimento</p>
        <input type="date" />
    </label>

    <label>
        <p>Senha</p>
        <input type="password" />
    </label>

    <label>
        <p>Confirmar senha</p>
        <input type="password" />
    </label>

    <div className="buttons">
        <button id="modal-bts">Cadastrar</button>
    </div>
</form>


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
                        <button onClick={entrar}><strong>Entrar</strong></button>
                        <button onClick={cadastrarSe}><strong>Cadastre-se</strong></button>
                        </div>

                
                    </form>

                    <section className="login-background"></section>
                    
                </div>

        </div>
        
        </>

    )

}

export default LoginPage