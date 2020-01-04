import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './Components/Layout';
import LoginPage from './pages/LoginPage';
import InicioPage from './pages/InicioPage';
import ChatPage from './pages/ChatPage';


const App = () => {
  return <Router>
          <Layout>
            <Switch>
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/inicio' component={InicioPage} />
              <Route exact path='/chat/:contacto' component={ChatPage} />
              <Redirect from='*' to='/login'/>
            </Switch>
          </Layout>
        </Router>
}

export default App;