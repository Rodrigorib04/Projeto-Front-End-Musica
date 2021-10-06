import React, { useState, useEffect } from 'react'
import Controles from "./Controles"


function Musica() {
const [ListaMusicas]= useState ([

    
{
    Nome: "Boy do Pernambuco",
    Canal: "DEV_RIBEIRO",
    image: "/imagens/boy1.gif",
    src_src: "/imagens/boy.mp3"
    
    },
    {
        Nome: "Charlie Brown Jr",
        Canal: "DEV_RIBEIRO",
        image: "/imagens/jr.gif",
        src_src: "/imagens/c.mp3"
        
        },
    {
Nome: "Mc Hariel",
Canal: " DEV_RIBEIRO",
image: "/imagens/h1.gif",
src_src: "/imagens/hariel.mp3"

},



]);

const [atualMuiscaIndex, SetAtualMusica] = useState (0)
const [proximaMusica, SetProximaMusica]  = useState (atualMuiscaIndex +1);

useEffect (()=>{
    SetProximaMusica (()=>{
        if (atualMuiscaIndex +1 > ListaMusicas.length -1){
            return 0;

        }else 
        return atualMuiscaIndex +1
    })
}, [atualMuiscaIndex])










    return (
        <div className ="estrutura">
            <Controles
            atualMuiscaIndex = {atualMuiscaIndex}
            SetAtualMusica = {SetAtualMusica}
            proximaMusica = {proximaMusica}
            ListaMusicas ={ListaMusicas} 
            />
        </div>
    )
}

export default Musica
