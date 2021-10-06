import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlay, faPause, faForward, faBackward} from "@fortawesome/free-solid-svg-icons"

function Player(props) {
    return (
        <div className="botoes">
            <button className="bformatacao" onClick = {()=> props.PularMusica (false)}>
        <FontAwesomeIcon icon = {faBackward}/>
        </button>

        <button className="bformatacaopause" onClick = {()=> props.setPlayer (!props.player)}>
        <FontAwesomeIcon icon = {props.player ? faPause : faPlay}/>
        </button>

        <button className="bformatacao" onClick = {()=> props.PularMusica (false)}>
        <FontAwesomeIcon icon = {faForward}/>
        </button>




        
        </div>

    )
}

export default Player
