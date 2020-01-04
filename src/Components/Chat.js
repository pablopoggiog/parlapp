import React, {useState, useEffect} from 'react';
import './styles/Chat.css';
import ListaChats from './ListaChats';

const Chat = props => {
    return (        
        <div className='chatpage-container'>
            <div className='otroschats-container'>
                <ListaChats className='otroschats-container' />
            </div>
            <div className='chatabierto-container'>
                <div className='chatabierto-info'>
                    <h6>{props.contacto}</h6>
                    <p>En linea</p></div>
                <div className='chatabierto-chat'>
                <div className='historial-chat-container'>
                    <Mensaje esPropio='true' />
                    <Mensaje/>
                    <Mensaje esPropio='true' mensajeLargo='true'/>
                    <Mensaje/>
                    <Mensaje esPropio='true' />
                    <Mensaje esPropio='false' mensajeLargo='true'/>
                    <Mensaje/>
                    <Mensaje esPropio='true' />
                </div>
                </div>
                <div className='chatabierto-teclado'>
                    <input className='form-control' placeholder='Escribe aqui' />
                </div>
            </div>
        </div>
    )
}

const Mensaje = props => {

    let clase;
    let mensaje;

    props.esPropio  == 'true' ? clase = 'mensaje-container propio' : clase = 'mensaje-container ajeno';
    props.mensajeLargo ? mensaje = 'Hola, soy un mensaje largo de este chat, soy mas largo que el mensaje regular. Hasta tengo un punto y una segunda oracion.' : mensaje = 'Hola, soy un mensaje de este chat';

    return (
        <div className={clase}>
            <p>{mensaje}</p>
        </div>
    )
}

export default Chat;