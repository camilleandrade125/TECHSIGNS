import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Modal from "../../components/modal";
import Axios from "axios";

function LoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [genero, setGenero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  const [message, setMessage] = useState("");

  function enviarForm(evento) {
    evento.preventDefault();
  }

  function handleEmail(evento) {
    setEmail(evento.target.value);
  }

  function handleSenha(evento) {
    setSenha(evento.target.value);
  }

  function entrar() {
    if (email && senha) {
      nav("/menu");
    } else {
      setMessage("Por favor, preencha o email e a senha.");
    }
  }

  function cadastrarSe() {
    setShowModal(true);
  }

  function fecharModal() {
    setShowModal(false);
  }

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      nome_completo: nome,
      email: email,
      cpf: cpf,
      genero: genero,
      data_nascimento: dataNascimento,
      senha: senha,
      senha_confirm: senhaConfirm,
    })
      .then((response) => {
        console.log(response);
        setMessage("Sua conta foi cadastrada com sucesso.");
      })
      .catch((error) => {
        console.error("Erro ao enviar solicitação:", error);
      });
  };

  function entrar() {
    Axios.post("http://localhost:3001/login", {
      email: email,
      senha: senha,
    })
      .then((response) => {
        if (response.data.success) {
          // Se o login for bem-sucedido, redireciona para a tela de menu
          nav("/menu");
        } else {
          // Se o login falhar, exibe uma mensagem de erro
          setMessage(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
        setMessage("Erro ao tentar fazer login");
      });
  }

  return (
    <>
      <Modal visible={showModal} onClose={fecharModal} title="Dados cadastrais">
        <form className="conteiner-showModal" onSubmit={enviarForm}>
          <label>
            <p>Nome Completo</p>
            <input type="text" onChange={(e) => setNome(e.target.value)} />
          </label>

          <label>
            <p>Email</p>
            <input type="email" onChange={handleEmail} />
          </label>

          <label>
            <p>CPF</p>
            <input
              type="text"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              placeholder="123.456.789-01"
              title="Enter a valid CPF (123.456.789-01)"
              onChange={(e) => setCpf(e.target.value)}
            />
          </label>

          <label>
            <p>Genero</p>
            <select onChange={(e) => setGenero(e.target.value)}>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outros">Outros</option>
            </select>
          </label>

          <label>
            <p>Data de nascimento</p>
            <input type="date" onChange={(e) => setDataNascimento(e.target.value)} />
          </label>

          <label>
            <p>Senha</p>
            <input type="password" onChange={handleSenha} />
          </label>

          <label>
            <p>Confirmar senha</p>
            <input type="password" onChange={(e) => setSenhaConfirm(e.target.value)} />
          </label>

          <div className="buttons">
            <button id="modal-bts" onClick={handleClickButton}>
              Cadastrar
            </button>
          </div>
        </form>
      </Modal>

      <div className="area-container">
        <div className="login-area">
          <form onSubmit={enviarForm} className="inputs">
            <h1>{message}</h1>
            <p id="texto">
              <strong>Conecte-se além das palavras!</strong>
            </p>
            <h1 id="title-login">Login</h1>
            <label>
              <p>Email</p>
              <input type="email" onChange={handleEmail} />
            </label>

            <label>
              <p>Senha</p>
              <input type="password" onChange={handleSenha} />
            </label>

            <div className="bts">
              <button type="button" onClick={entrar}>
                <strong>Entrar</strong>
              </button>
              <button onClick={cadastrarSe}>
                <strong>Cadastre-se</strong>
              </button>
            </div>
          </form>

          <section className="login-background"></section>
        </div>
      </div>
    </>
  );
}

export default LoginPage;

