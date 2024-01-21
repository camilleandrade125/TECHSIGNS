import './style.css';


export default function CardInformacoes({ nome, cargo, fotoPerfil, numeroTelefone,email,localidade,github}){
    
    return(
        <div className="card-infos-conteiner">
            <div className="foto-infos">
                <img src={fotoPerfil}/>
            </div>
            <div className="infos-pessoais">
                <h1>{nome.toUpperCase()}</h1>
                <h3>{cargo}</h3>
                <p>{numeroTelefone}</p>
                <p>{email}</p>
                <p>{localidade}</p>
                <a  target="_blank" href="https://github.com/camilleandrade125" rel="noreferrer">{github}</a>
            </div>
           

        </div>
    )
}