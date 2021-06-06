import React, { Component, useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import '../CalendarioAgendamento/styleCalendarioAgendamento.css'
import Form from 'react-bootstrap/Form'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

  const App = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
  
    return (
      <>
        <button className="td-horario-disponivel" style={{backgroundColor:"rgba(126, 252, 0, 0.329);"}}
         onClick={showModal}>AGENDAR</button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Corfirmar Agendamento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <label>Observações:</label>
                <textarea style={{width:"100%", height:"150px"}}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Digite aqui os tópicos a serem abordados na aula..."/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hideModal}>Cancel</Button>
            <Button>Confirmar</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  export default class ModalAgendamento extends Component {
    render(){
        return(<App></App>);
    }
 }