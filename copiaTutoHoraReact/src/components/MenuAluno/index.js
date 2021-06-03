import React, { Component } from 'react';
import "./menuAluno.css";
import logoTt from '../../assets/img/Logo-TutoHora-unscreen.gif';
import ft1 from '../../assets/img/1.jpg';
import { Link } from 'react-router-dom';

export default class MenuAluno extends Component {
    openBar(){
        document.getElementById("mySidenav").style.width = "250px";
    }
    closeBar(){
        document.getElementById("mySidenav").style.width = "0"
    }
    render() {
        return(
         <div id="bodyMenuAluno">
              <div id="mySidenav" className="sidenav">
                    <a /*href="javascript:void(0)" */className="closebtn" onClick={() => this.closeBar()}>&times;</a>
                    <img id="logo_menu" src={logoTt} alt=""/>
                    <Link to="/homeAluno">
                        <a className="opcaoMenu">Início</a>
                    </Link>
                    <Link to="/horarioAluno">
                        <a className="opcaoMenu">Meus Horários</a> 
                    </Link>
                    <Link to="/professores">
                        <a className="opcaoMenu">Professores</a>
                    </Link><br></br><br></br>
                    <Link to="/">
                        <button type="button" className="btnSair"> Sair </button>
                    </Link>
                </div>
                <header id="header" className="d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                        <span id="menu" style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => this.openBar()/*"*/}>&#9776;</span>
                        <h1 className="logo me-auto"> TutoHora</h1>
                        <h5 id="nome-profile">Roberto</h5>
                        <div id="profile-container">

                            <img id="image-profile" src={ft1} alt="" />
                        </div>
                    </div>
                </header>  
         </div>   
        )
    }
}