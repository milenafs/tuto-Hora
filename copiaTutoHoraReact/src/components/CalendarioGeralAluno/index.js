import React, { Component } from 'react';
import "./styleCalendarioGeralAluno.css";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import MenuAluno from '../MenuAluno';

export default class CalendarioGeralAluno extends Component 
{
    constructor() {
        super();
        this.state = {

        };
    }

    mostarDados(data) {
        console.log(data);
        // FAZER SELECT DOS COMPROMISSOS DESTA DATA E COLOCAR NO STATE
    }

    render() 
    {
        return (
            <div id="bodyAulasAluno">
                <MenuAluno></MenuAluno>
                <br></br><br></br>
                <div className="section-title">
                    <h2>Seu Calendário</h2>
                </div>
                <div id="div-calendario">
                    <Calendar id="calendario" onClickDay={data => this.mostarDados(data)} />
                </div>
                <div id="div-compromissos">
                    <h1 id="h1-compromissos" style={{ margin: "10px" }}>Compromissos</h1>
                    {/*fazer map dos compromissos do state do dia aqui com um buton compromisso*/}
                    <button className="compromissos">Aula de matemática</button>
                </div>
            </div>
        );
    }
}