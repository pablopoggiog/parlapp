import React from 'react';
import './styles/ChatPage.css';
import Chat from '../Components/Chat';

const ChatPage = props => {
    return (
        <Chat contacto={props.match.params.contacto}/>
    )
}

export default ChatPage;