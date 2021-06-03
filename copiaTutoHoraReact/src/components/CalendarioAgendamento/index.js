import React, { Component } from 'react';
import MenuAluno from '../MenuAluno';
import "./styleCalendarioAgendamento.css";

export default class CalendarioAgendamento extends Component {
    render() {
        return (<div id="bodyAgendamento">
            <MenuAluno></MenuAluno>
            <div className="agenda-container">
                <img className="agenda-img" src="https://i.pinimg.com/originals/b9/26/34/b926340a171ae158fce2e02affa4f203.jpg" alt="FEIOSO" /><br /><br />
                <h6 className="agenda-h6">AGENDAMENTO DE HORÁRIOS</h6><h3 className="agenda-h3"> Rodrigo Barulhento</h3><br />
                <table className="agenda-table-cabecalho">
                    <tr>
                        <td className="td-anterior"><h2><a ><span className="agenda-btn-anterior">&#60</span></a></h2></td>
                        <td className="td-nome"><h2 className="agenda-data-semana">Nome do mes</h2></td>
                        <td className="td-proximo"><h2><a ><span className="agenda-btn-proximo">&gt</span></a></h2></td>
                    </tr>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <th>HORÁRIO</th>
                            <th className="td-dom">DOM</th>
                            <th className="td-seg">SEG</th>
                            <th className="td-ter">TER</th>
                            <th className="td-qua">QUA</th>
                            <th className="td-qui">QUI</th>
                            <th className="td-sex">SEX</th>
                            <th className="td-sab">SÁB</th>
                        </tr>
                        <tr>
                            <td className="td-horario">5:00 às 6:00</td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                        </tr>
                        <tr>
                            <td className="td-horario">6:00 às 7:00</td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                        </tr>
                        <tr>
                            <td className="td-horario">8:00 às 9:00</td>
                            <td className="td-horario-indisponivel"><a className="horario-status"  >INDISPONÍVEL</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                        </tr>
                        <tr>
                            <td className="td-horario">9:00 às 10:00</td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                        </tr>
                        <tr>
                            <td className="td-horario">10:00 às 11:00</td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                        </tr>
                        <tr>
                            <td className="td-horario">11:00 às 12:00</td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                        </tr>
                        <tr>
                            <td className="td-horario">12:00 às 13:00</td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                        </tr>
                        <tr>
                            <td className="td-horario">13:00 às 14:00</td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                        </tr>
                        <tr>
                            <td className="td-horario">14:00 às 15:00</td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                        </tr>
                        <tr>
                            <td className="td-horario">15:00 às 16:00</td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-ausente"></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                        </tr>
                        <tr>
                            <td className="td-horario">16:00 às 17:00</td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                        </tr>
                        <tr>
                            <td className="td-horario">17:00 às 18:00</td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-disponivel"><a className="horario-status" data-toggle="modal" data-target="#agendar-popup">AGENDAR</a></td>
                            <td className="td-horario-indisponivel"><a className="horario-status" >INDISPONÍVEL</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{ width: " 0;", height: "0;", overflow: "hidden;" }}>
                <div className="mes-container">
                    <div className="ui container">
                        <br />
                        <div className="ui container">
                            <div className="ui grid">
                                <div className="ui sixteen column">
                                    <div id="calendar"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<Modal></Modal>*/}


            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="jquery-3.5.1.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.17.1/moment.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.1.0/fullcalendar.min.js"></script>
            <script type="text/javascript" src="javascript.js"></script>
        </div>);
    }
}