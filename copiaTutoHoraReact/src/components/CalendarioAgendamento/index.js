//import { Modal } from 'bootstrap';
import React, { Component } from 'react';
import MenuAluno from '../MenuAluno';
import Modal from '../ModalAgendamento';
//import Modal from 'react-bootstrap/Modal'
import "./styleCalendarioAgendamento.css";
import Calendar from 'react-calendar'



export default class CalendarioAgendamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }
    mostarDados(data) {
        console.log(data);
        // FAZER SELECT DOS COMPROMISSOS DESTA DATA E COLOCAR NO STATE
    }

    aparecerModal() {
        this.setState({
            modal: true
        });
    }

    render() {
        return (<div id="bodyAgendamento">
            <MenuAluno></MenuAluno>
            <br></br><br></br>
            <div className="section-title">
                    <h2>Calendário Agendamento</h2>
                </div>
            <div className="agendamento-container">
                <img className="agenda-img" src="https://i.pinimg.com/originals/b9/26/34/b926340a171ae158fce2e02affa4f203.jpg" alt="FEIOSO" /><br /><br />
                <h6 className="agenda-h6">AGENDAMENTO DE HORÁRIOS</h6><h3 className="agenda-h3"> Rodrigo Barulhento</h3><br />
                <br />
                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <Modal id="horari e dia da aula">AGENDAR</Modal>
                </div>

                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <button className="td-horario-indisponivel">INDISPONÍVEL</button>
                </div>

                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <Modal id="horari e dia da aula">AGENDAR</Modal>
                </div>

                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <Modal id="horari e dia da aula">AGENDAR</Modal>
                </div>

                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <Modal id="horari e dia da aula">AGENDAR</Modal>
                </div>
                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <button className="td-horario-indisponivel">INDISPONÍVEL</button>
                </div>
                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <button className="td-horario-indisponivel">INDISPONÍVEL</button>
                </div>

            </div>
            <div id="div-calendario-agendamento">
                <Calendar id="calendario" onClickDay={data => this.mostarDados(data)} />
            </div>
            {this.state.modal && <Modal></Modal>}

        </div>);
    }
}