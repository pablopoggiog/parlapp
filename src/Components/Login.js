import React from 'react';
import './styles/Login.css';

const Login = () => {
    return (
        <>
            <div className='login-container'>
                <form>
                    <img src='https://i.pinimg.com/564x/bc/57/9f/bc579f0d8c435b9d2a0d71df93ec1e78.jpg' />
                    <div class="form-group">
                        <label for="exampleInputEmail1">Usuario</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre de usuario"/>
                        <small id="emailHelp" class="form-text text-muted">No compartiremos tu info con nadie más.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Guardar datos</label>
                    </div>
                        <button type="submit" class="btn btn-primary">Entrar</button>
                </form>
            </div>
        </>
    )
}

export default Login;