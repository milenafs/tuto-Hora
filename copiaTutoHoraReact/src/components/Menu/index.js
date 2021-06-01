import React, { Component } from 'react';
import "../../assets/css/estilo.css";
import logoTt from '../../assets/img/Logo-TutoHora-unscreen.gif';
import ft1 from '../../assets/img/1.jpg';
export default class Menu extends Component {
    openBar(){
        document.getElementById("mySidenav").style.width = "250px";
    }
    closeBar(){
        document.getElementById("mySidenav").style.width = "0"
    }
    render() {
        return(
         <div>
              <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeBar()}>&times;</a>
                    <img id="logo_menu" src={logoTt} />
                    <a href="#">Início</a>
                    <a href="MeusHorariosA.html">Meus Horários</a>
                    <a href="Professores.html">Professores</a>
                    <br></br><br></br>
                    <button type="button" className="btnSair"> Sair </button>
                </div>
                <header id="header" className="d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                        <span id="menu" style={{ fontSize: "30px", cursor: "pointer" }} onClick={() => this.openBar()/*"*/}>&#9776;</span>
                        <h1 className="logo me-auto"> TutoHora</h1>
                        <h5 id="nome-profile">Roberto</h5>
                        <div id="profile-container">

                            <img id="image-profile" src={ft1} />
                        </div>
                    </div>
                </header>  
         </div>   
        )
    }
}