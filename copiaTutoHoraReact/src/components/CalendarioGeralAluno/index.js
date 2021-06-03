import React, { Component } from 'react';
import "./styleCalendarioGeralAluno.css";
import MenuAluno from '../MenuAluno';

export default class CalendarioGeralAluno extends Component {
    render(){
        return(<div id="bodyAulasAluno">
            <MenuAluno></MenuAluno>   
            <h1>CalendarioGeralAluno</h1>
        </div>);
    }
}