import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './Rotas';
/*
import HomeAluno from './components/HomeAluno';
//import PaginaPrincipal from './components/PaginaPrincipal';
//import Carrossel from './components/Carrossel';
//import HomeAluno from './components/HomeAluno';
import HomeProf from './components/HomeProf';
//import Menu from './components/Menu';
//import CriarConta from './components/CriarConta';
//import Login from './components/Login'; 
// <HomeAluno></HomeAluno> 
*/
function App() {
  return (
    <BrowserRouter>
      <div>
        <Rotas></Rotas>
      </div>
    </BrowserRouter>

  );
}

export default App;
