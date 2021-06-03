import React, { Component } from 'react';
import MenuProf from '../MenuProf';
import "./styleCalendarioGeralProf.css";

export default class CalendarioGeralProfessor extends Component {
    render(){
        return(<div id="bodyAulaProf">
            <MenuProf></MenuProf>
            <h1>CalendarioGeralProfessor</h1>
        </div>);
    }
}