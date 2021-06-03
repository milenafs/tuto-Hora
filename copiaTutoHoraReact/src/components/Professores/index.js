import React, { Component } from 'react';
import MenuAluno from '../MenuAluno';
import "./styleProf.css";

export default class Professores extends Component {
    render() {
        return (
            <div id="bodyProfessores">
                <MenuAluno></MenuAluno>
                <h1>Professores</h1>
            </div>
        );
    }
}