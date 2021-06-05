import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
//Aluno
//HomeAluno, HorariosAlunos, Professores, Agendamento
import HomeAluno from './components/HomeAluno';
import HorarioAluno from './components/CalendarioGeralAluno';
import Agendamento from './components/CalendarioAgendamento';
import Professores from './components/Professores';
//Prof
// HomeProf , HorariosProf
import HomeProf from './components/HomeProf';
import HorarioProf from './components/CalendarioGeralProf';
//Geral
// PaginaPrincipal, Login, Cadastro
import PaginaPrincipal from './components/PaginaPrincipal';
import Login from './components/Login';
import CriarConta from './components/CriarConta';
//teste api
import TesteAPI from './components/TesteAPI/TesteAPI';

export default class Rotas extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={PaginaPrincipal} />
                <Route path="/login" component={Login}/>
                <Route path="/criarConta" component={CriarConta} />
                <Route path="/homeProfessor" component={HomeProf}/>
                <Route path="/homeAluno" component={HomeAluno} />
                <Route path="/horarioAluno" component={HorarioAluno} />
                <Route path="/horarioProf" component={HorarioProf} />
                <Route path="/professores" component={Professores} />
                <Route path="/agendamento" component={Agendamento} />
                <Route path="/teste" component={TesteAPI} />
                <Redirect from='*' to='/' />
            </Switch>
        )
    }
}