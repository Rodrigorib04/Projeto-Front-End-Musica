import React, {useRef, useState, useEffect} from 'react'
import Player from './Player';
import DetalhesControle from './DetalhesControle';
function Controles(props) {
const MusicaEL = useRef (null);
const [player, setPlayer ] = useState (false)

useEffect (()=>{
    if(player){
        MusicaEL.current.play ();

    }else {
        MusicaEL.current.pause ();
    }
});

const PularMusica = (forwards = true) =>{
    if (forwards){
        props.SetAtualMusica (()=>{
            let temp = props.atualMuiscaIndex
            temp ++;
            if (temp > props.ListaMusicas.length -1){
                temp = 0;
            }
            return temp;
        });
    }else {
        props.SetAtualMusica (()=>{
            let temp = props.atualMuiscaIndex
            temp --;
            if (temp < 0) {
                temp = props.ListaMusicas.length -1;
            }
            return temp;
        });
    }
    
} 




    return (
        <div className="Controles">
     <audio src= {props.ListaMusicas[props.atualMuiscaIndex].src_src} ref = {MusicaEL}> </audio>
    
           
            <h1>TV FILROD</h1>
            <DetalhesControle ListaMusicas = {props.ListaMusicas[props.atualMuiscaIndex]}/>
            <Player
            player = {player}
            setPlayer ={setPlayer}
            PularMusica = {PularMusica}
            />
        </div>
    )
}

export default Controles
