import "./style.css"
import CardInformacoes from "../cards/card-informacoes";

function Bodysobre(){
    return  (
        <section className="space-sobre">
            <main className="infos-card-space"> 

                <CardInformacoes
                    fotoPerfil="https://avatars.githubusercontent.com/u/98554053?v=4"
                    cargo="Front-End Developer" 
                    email="camilleandrade12@gmail.com" 
                    github="https://github.com/camilleandrade125" 
                    localidade="Belém-PA" 
                    numeroTelefone="985940434" 
                    nome="camille andrade"   
                />
                
                <CardInformacoes
                    fotoPerfil="https://avatars.githubusercontent.com/u/110643065?v=4"
                    cargo="Game Developer" 
                    email="pedrolimaifpa@gmail.com" 
                    github="https://github.com/PedroLimaIFPA" 
                    localidade="Ananindeua-PA" 
                    numeroTelefone="983924388" 
                    nome="pedro lima"
                />

                <CardInformacoes
                    fotoPerfil="https://avatars.githubusercontent.com/u/127912394?v=4"
                    cargo="Front-End Developer" 
                    email="liandervinicius13@gmail.com" 
                    github="https://github.com/Lianderdev" 
                    localidade="Ananindeua-PA" 
                    numeroTelefone="992736250" 
                    nome="liander souza"
                />

                <CardInformacoes
                    fotoPerfil="https://avatars.githubusercontent.com/u/133993579?v=4"
                    cargo="Database Analyst" 
                    email="eduardo.vic.goncalves@gmail.com" 
                    github="https://github.com/T4kinho" 
                    localidade="Belém-PA" 
                    numeroTelefone="981178669" 
                    nome="Eduador Victor"
                />
            </main>
            <section className="space-sobre-menor">

                    <h2>Sobre o projeto</h2>

                    <p>O TechSigns é um software contendo uma variedade de jogos educativos adptados à Libras (Língua Brasileira de Sinais), com o propósito de fomentar a eduacção inclusiva. O software busca proporcionar acessibildade e inclusão no processo de ensino-aprendizagem de estudantes surdos. Os jogos buscam oferecer uma abordagem gamifiada para compreensão de conceitos fundamentais de informática.</p>

                    <div className="divt"></div>

            </section>
            <div className="div"></div>
            
            
        </section>

    
    )
}

export default Bodysobre




