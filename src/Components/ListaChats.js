import React, {useState, useEffect} from 'react';
import './styles/ListaChats.css';
import {Link} from 'react-router-dom';
import axios from 'axios';


const ListaChats = props => {

    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        fetchContactos();
    },[])

    const fetchContactos = async () => {
        const response = await axios.get('http://localhost:2020/chat', {});
        console.log(await response.data.body);
        setContactos(await response.data.body);
    }

    return (
        <div className='lista-container'>
            {props.nombre ? <h1>{props.nombre}</h1> : null}
            
            <input className='otroschat-busqueda form-control' type="search" placeholder='Buscar o empezar un chat nuevo'/>
            <div className='lista-container-chats'>

                {contactos.map(contacto => <ChatElement nombreContacto={contacto.users[1].name} idChat={contacto._id} imgSrc={contacto.users[1].imgSrc} idUser={contacto.users[1]._id} />)}
                {contactos.map(contacto => <ChatElement nombreContacto={contacto.users[1].name} idChat={contacto._id} imgSrc={contacto.users[1].imgSrc} idUser={contacto.users[1]._id} />)}
                {contactos.map(contacto => <ChatElement nombreContacto={contacto.users[1].name} idChat={contacto._id} imgSrc={contacto.users[1].imgSrc} idUser={contacto.users[1]._id} />)}

            </div>
        </div>
    )
}

const ChatElement = props => {
    let to = `/chat/${props.idChat}/${props.nombreContacto}`
    return (
        <Link to={to} className='chatelement-container'>
            <div className='chatelement-innercontainer'>
                <img src={props.imgSrc} />
                <div>
                    <p className='nombreContacto'>{props.nombreContacto}</p>                    
                    <p className='ultimoMensaje'>Soy un chat, y este es mi ultimo mensaje</p>
                </div>
            </div>
        </Link>
    )
}

export default ListaChats;