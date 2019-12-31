import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout';
import LoginPage from './pages/LoginPage';
import Inicio from './pages/Inicio';
import Grupo from './pages/Grupo';
import Privado from './pages/Privado';


const App = () => {
  return <Router>
          <Layout>
            <Switch>
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/inicio' component={Inicio} />
              <Route exact path='/grupo' component={Grupo} />
              <Route exact path='/privado' component={Privado} />
            </Switch>
          </Layout>
        </Router>
}

export default App;