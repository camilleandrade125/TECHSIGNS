import "./style.css"
import { useState } from 'react'
import robo from '../../../public/robo!.gif'
import  Botao_Voltar  from "../../components/botao-voltar"
import maos_feed from '../../../public/feed-mãos.jpg'

function Feedbackpage(){

    return(
        <>
        <Botao_Voltar link_voltar='/menu'/>
        <main className="perfil">
            <section className="area-info">
                   <h1 className="dese">EM DESENVOLVIMENTO!</h1>
            </section>
        </main>
        </>
    )
}

export default Feedbackpage