import React from 'react';
import './styles/ListaChats.css';
import {Link} from 'react-router-dom';

const ListaChats = props => {
    return (
        <div className='lista-container'>
            {props.nombre ? <h1>{props.nombre}</h1> : null}
            
            <input className='otroschat-busqueda form-control' type="search" placeholder='Buscar o empezar un chat nuevo'/>
            <div className='lista-container-chats'>
                <ChatElement nombreContacto='Amors' imgSrc='https://lh3.googleusercontent.com/nskQ9yGB2ap4K6FaaYqhVyiE9OZXLp_GDZXWtkMflps5IbKCF5xiJcuPzOkDZ7GWHcmc0ap_ykvhGOmV5Jue2qGquwIP2rsVRAOWzVcCfii_o8PVEkM7RyflfxnestYkKTRn586BiSfYC93F8ZPdbT6m9MmLRuu05jfEZO3s9YSTAb25z0bWJcdTwyJuM2tFW8yiH0EnkADN_JIyXt_Vp9YlgOPvo7cwFPaO0NXgvXi5rWNXSJWuZ_59nprzfwt_6UuwmhVPykBh98D5qkYB7czFEAzKGCn9FQ7WAbUmMf2h2cLiXWu3N1CgGzzTGBKMYkFgJ68amixyAKnTE5W-HoAzN9e4TwDqtcgMuPDy0Jyh3WAKnTCjipBuxbRZmaJkt2gWx3nAyGQ7NhM-ZYmIgZ0qWlAq_1rRu6o2bg9J7VP3q2DIy-nnJ9gY6nrRM5HmiultMHbgoadLtNBBwTKDhmJW0TrkQMtLYr1zhegukItbPkfqU098steGMbZ4cvDQm8ZqCKQrbupteERFYTar-P0hg7s9LVo3LYUHXI7WzWPlOA-r7N1V_jpL703Iesqqtd3AQtIwnqTmdniEWazbFoaRq4deEqaBFi0kUgP2m-idt2583xo3t99CofP2yBcn7HJtrtzC3M-2uH9s07OaK0gJsywANQPm-z9ivBInJX2qJFLswFmDtyMg=w693-h924-no'/>
                <ChatElement nombreContacto='Pablis' imgSrc='https://pbs.twimg.com/profile_images/1118313053131628545/s-Sdnspg_x96.jpg'/>
                <ChatElement nombreContacto='Churus' imgSrc='https://lh3.googleusercontent.com/BFalJ9OKE5yWc79lmv1krowuyjwR8Kp6wPjY1r88I7oJ9ay2Tv7ypIHFWrPuL6DfIzUigH0PUCiZy8si3KIOnRPxfz2NAK_s9lBiuZGsfexD1JVQEzU3iVEhcj42G30caZ_D4Tlju7d4mFA1n2d1pxCT5WWNpH3MYF0gcTF0Ul7fmPDAcuIq9VgaR7dol51saGSqSabQYV-djJZJ2li8ULNOk3oIllGTF9CartC1OUQ3c0Yi2BpDI135jZomkhql3A6N0u5aC_ZxzIptNKgbrREq84YwC3cma7vyfCJ16l8QxI1TJI-IOoBa977av0t6uii5khkrO4cG2pNYjWyKqxAMUnfvBvclLN1oIphTEvp6JGDHvs5by7Meh-dfRwksFfdAvaSb-7-L4cBKhd0Zm0ewB8ZnTY4ZujuYpeRMXdSZ8xg-iuhSKw4Q-0m0ZPNuIGt-KN6KwCReSQBCrJFIz51SRu6lUcC_x3zAoAQr-we0sVmshck1pkOQBRa-bhxMRJTZSl4lbaDwpsyIpxpC6FiG4Dkku19A3nOauwZEZVJT8_J6-21KkVlL7JLwpQ5yNPIAswxQHXwQcmZjLTIoJwQBJu56WnWNfE1VYKfosdRIEygrW01RiezjXfJDVVYIBVjMkd1RiJKiAfzlAQRozxdgL8mbz9J6_0HdWMtVDqvu32Vi_kKYd7eC=w732-h975-no'/>
                <ChatElement nombreContacto='Amors' imgSrc='https://lh3.googleusercontent.com/nskQ9yGB2ap4K6FaaYqhVyiE9OZXLp_GDZXWtkMflps5IbKCF5xiJcuPzOkDZ7GWHcmc0ap_ykvhGOmV5Jue2qGquwIP2rsVRAOWzVcCfii_o8PVEkM7RyflfxnestYkKTRn586BiSfYC93F8ZPdbT6m9MmLRuu05jfEZO3s9YSTAb25z0bWJcdTwyJuM2tFW8yiH0EnkADN_JIyXt_Vp9YlgOPvo7cwFPaO0NXgvXi5rWNXSJWuZ_59nprzfwt_6UuwmhVPykBh98D5qkYB7czFEAzKGCn9FQ7WAbUmMf2h2cLiXWu3N1CgGzzTGBKMYkFgJ68amixyAKnTE5W-HoAzN9e4TwDqtcgMuPDy0Jyh3WAKnTCjipBuxbRZmaJkt2gWx3nAyGQ7NhM-ZYmIgZ0qWlAq_1rRu6o2bg9J7VP3q2DIy-nnJ9gY6nrRM5HmiultMHbgoadLtNBBwTKDhmJW0TrkQMtLYr1zhegukItbPkfqU098steGMbZ4cvDQm8ZqCKQrbupteERFYTar-P0hg7s9LVo3LYUHXI7WzWPlOA-r7N1V_jpL703Iesqqtd3AQtIwnqTmdniEWazbFoaRq4deEqaBFi0kUgP2m-idt2583xo3t99CofP2yBcn7HJtrtzC3M-2uH9s07OaK0gJsywANQPm-z9ivBInJX2qJFLswFmDtyMg=w693-h924-no'/>
                <ChatElement nombreContacto='Pablis' imgSrc='https://pbs.twimg.com/profile_images/1118313053131628545/s-Sdnspg_x96.jpg'/>
                <ChatElement nombreContacto='Churus' imgSrc='https://lh3.googleusercontent.com/BFalJ9OKE5yWc79lmv1krowuyjwR8Kp6wPjY1r88I7oJ9ay2Tv7ypIHFWrPuL6DfIzUigH0PUCiZy8si3KIOnRPxfz2NAK_s9lBiuZGsfexD1JVQEzU3iVEhcj42G30caZ_D4Tlju7d4mFA1n2d1pxCT5WWNpH3MYF0gcTF0Ul7fmPDAcuIq9VgaR7dol51saGSqSabQYV-djJZJ2li8ULNOk3oIllGTF9CartC1OUQ3c0Yi2BpDI135jZomkhql3A6N0u5aC_ZxzIptNKgbrREq84YwC3cma7vyfCJ16l8QxI1TJI-IOoBa977av0t6uii5khkrO4cG2pNYjWyKqxAMUnfvBvclLN1oIphTEvp6JGDHvs5by7Meh-dfRwksFfdAvaSb-7-L4cBKhd0Zm0ewB8ZnTY4ZujuYpeRMXdSZ8xg-iuhSKw4Q-0m0ZPNuIGt-KN6KwCReSQBCrJFIz51SRu6lUcC_x3zAoAQr-we0sVmshck1pkOQBRa-bhxMRJTZSl4lbaDwpsyIpxpC6FiG4Dkku19A3nOauwZEZVJT8_J6-21KkVlL7JLwpQ5yNPIAswxQHXwQcmZjLTIoJwQBJu56WnWNfE1VYKfosdRIEygrW01RiezjXfJDVVYIBVjMkd1RiJKiAfzlAQRozxdgL8mbz9J6_0HdWMtVDqvu32Vi_kKYd7eC=w732-h975-no'/>
                <ChatElement nombreContacto='Pablis' imgSrc='https://pbs.twimg.com/profile_images/1118313053131628545/s-Sdnspg_x96.jpg'/>
            </div>
        </div>
    )
}

const ChatElement = props => {
    let to = `/chat/${props.nombreContacto}`
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