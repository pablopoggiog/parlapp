import React from 'react';
import './styles/ChatPage.css';
import Chat from '../Components/Chat';

const ChatPage = props => {
    return (
        <Chat idChat={props.match.params.idChat} nombreContacto={props.match.params.nombreContacto}/>
    )
}

export default ChatPage;