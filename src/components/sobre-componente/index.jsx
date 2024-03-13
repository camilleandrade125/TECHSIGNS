import "./style.css"
import CardInformacoes from "../cards/card-informacoes";

// imports styled components
import { Titulo } from '../../components/styled-components';

function Bodysobre(){
    return  (
        <section className="space-sobre">
        
            <main className="infos-card-space">
                <Titulo>Sobre o Projeto</Titulo>
                    <div id="sobre-projeto">
                        <h4>    
                            O TechSigns apresenta a criação de um software contendo uma variedade de jogos educativos adaptados à Libras 
                            (Língua Brasileira de Sinais), com o próposito de fomentar a educação inclusiva. Os jogos almejam oferecer uma abordagem gamificada para a compreensão de conceitos fundamentais de informática.
                        </h4>
                    </div>
                
                <div className="about-cards">
                    <CardInformacoes
                        fotoPerfil="https://avatars.githubusercontent.com/u/98554053?v=4"
                        cargo="Front-End Developer" 
                        email="camilleandrade12@gmail.com" 
                        github="https://github.com/camilleandrade125" 
                        localidade="Ananindeua-PA" 
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
                </div>
            </main>         
            
        </section>

    
    )
}

export default Bodysobre




