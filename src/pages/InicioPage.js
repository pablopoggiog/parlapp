import React from 'react';
import ListaChats from '../Components/ListaChats';
import './styles/InicioPage.css';

const Inicio = () => {
    return (
        <div className='inicio-container'>
            <ListaChats nombre='Chats' />          
            <ListaChats nombre='Grupos' />
        </div>
    )
}

export default Inicio;