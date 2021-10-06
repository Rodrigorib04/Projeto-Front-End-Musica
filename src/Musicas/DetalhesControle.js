import React from 'react'

function DetalhesControle(props) {
    return (
        <div className="capa">
            <div className ="capa1">
<img src = {props.ListaMusicas.image}/>
            </div>
           
            <h5 className='detalhedocanal'> {props.ListaMusicas.Canal} </h5>
            <h4 className='detalhedotitulo'> {props.ListaMusicas.Nome} </h4>
        </div>
    )
}

export default DetalhesControle
