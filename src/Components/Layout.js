import React from 'react';
import Navbar from './Navbar';
import Pie from './Pie';
import './styles/Layout.css';

const Layout = (props) => {
    return (
        <>
            <Navbar className='navbar' />
            <div className='main'>
                <div className='children'>
                   {props.children}
                </div>
                <Pie className='pie' />
            </div>
        </>
    )
}

export default Layout;