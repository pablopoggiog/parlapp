import React, {useState, useEffect} from 'react';
import './styles/Chat.css';
import ListaChats from './ListaChats';
import axios from 'axios';
import io from 'socket.io-client';
import moment from 'moment';

class Chat extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listaMensajes: [],
            contactos: [],
            userVigente: '5e18073eea6b1120a0483a1b'
        }

        this.handleCrearMensaje = this.handleCrearMensaje.bind(this);
        this.fetchChat = this.fetchChat.bind(this);
        // this.fetchContactos = this.fetchContactos.bind(this);

    //     const socket = io.connect('http://localhost:2020', {
    //     forceNew: true
    // });
    //     socket.on('message', (data) => {
    //         if(data.chat == this.props.idChat) {
    //             console.log(data.message);
    //             this.setState({listaMensajes: this.state.listaMensajes.concat(data)});
    //         }
    // })
    }

  // llamo a fetchear el chat y los contactos implicados (para tener nombre y foto) cada vez que se monta el componente
    componentDidMount() {   
        this.fetchChat(); 
        // this.fetchContactos()
    }

    componentDidUpdate (prevProps) {   
        if (this.props.idChat !== prevProps.idChat) {
            this.fetchChat(); 
            // this.fetchContactos()
        }
    }

    // metodo que fetchea chats
    fetchChat = async () => {
        try {
            const response = await axios.get(`http://localhost:2020/message?chat=${this.props.idChat}`, {});
            console.log(await response.data.body);
            this.setState({ listaMensajes: await response.data.body});
            console.log('this.state.listaMensajes: ' + this.state.listaMensajes);
        }
        catch(e) {            
            console.error(e)
        }
    }
    
    // metodo que fetchea contactos
    // fetchContactos = async () => {
    //     try {
    //         const response = await axios.get(`http://localhost:2020/chat?users=${this.props.idChat}`, {});
    //         console.log(await response.data.body);
    //         this.setState({ listaMensajes: await response.data.body});
    //         console.log('this.state.listaMensajes: ' + this.state.listaMensajes);
    //     }
    //     catch(e) {            
    //         console.error(e)
    //     }
    // }

   

    // metodo que crea mensaje, manda peticion post al servidor, blanquea input de escritura, y a la vez cuando termina hace peticion get para actualizar historial de chat
    handleCrearMensaje = async () => {
        try {
            await axios.post('http://localhost:2020/message', {
                "user": '5e18073eea6b1120a0483a1b',
                "message": document.getElementById('input-mensaje').value,
                "chat": this.props.idChat
            });
            document.getElementById('input-mensaje').value = '';
            this.fetchChat()
        }
        catch(e) {
            console.error(e)
        }
    }

    render() {
         
        return (        
            <div className='chatpage-container'>
                <div className='otroschats-container'>
                    <ListaChats className='otroschats-container' />
                </div>
                <div className='chatabierto-container'>
                    <div className='chatabierto-info'>
                        <h6>{this.props.nombreContacto}</h6>
                        <p>En linea</p></div>
                    <div className='chatabierto-chat'>
                    <div className='historial-chat-container'>
                        {this.state.listaMensajes.map(mensaje => <Mensaje date={mensaje.date} message={mensaje.message} userId={mensaje.user._id} userVigente={this.state.userVigente} />)}
                    </div>
                    </div>
                    <div className='form-inline' id='form-inline'>
                        <input className='form-control' id='input-mensaje' placeholder='Escribe aqui' onKeyDown={(e) => {
                            if (e.keyCode == 13){
                                this.handleCrearMensaje()
                            }
                        }} />
                    </div>
                </div>
            </div>
        )        
    }
}

const Mensaje = props => {

    let clase;
    let mensaje;

    props.mensajeLargo ? mensaje = 'Hola, soy un mensaje largo de este chat, soy mas largo que el mensaje regular. Hasta tengo un punto y una segunda oracion.' : mensaje = 'Hola, soy un mensaje de este chat';
    props.userVigente == props.userId ? clase = 'mensaje-container propio' : clase = 'mensaje-container ajeno';

    return (
        <>
            <div className={clase}>
                <div className='cajita-mensaje'>
                    <p>{props.message}</p>
                </div>
                <p id='relative-date' >{moment(props.date).fromNow()}</p>
            </div>
        </>
    )
}

export default Chat;