import React, { Component } from 'react';
import "./homeAluno.css";
import fotoPerfil from "../../assets/img/perfil.png";
import Menu from '../MenuAluno';

export default class HomeAluno extends Component {
    
    mudarFoto()
    {
        var srcFoto = document.querySelector("#fotoUser");
        var urlFoto = document.querySelector("#urlFoto");
        var novoSrc = urlFoto.value;
        srcFoto.setAttribute('src', novoSrc);
        urlFoto.value = '';
    }
    mostrarSenha(event)
    {
        var senha =  document.querySelector('#senha');  
        if(senha.type === 'text')
        {
            senha.setAttribute('type', 'password');
        }
        else
        {
            senha.setAttribute('type', 'text');
        }
        
    }
    render() {
        return (
            <div id="corpo">
                <Menu></Menu>
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>Dados Pessoais</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form action="forms/contact.php" method="post" className="php-email-form">
                                    <div className="form-group mt-3">
                                        <label>Nome:</label>
                                        <input type="text" name="nome" className="form-control" id="nome" required />
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label>Senha:</label> 
                                            <img id="olho" height="20px" width="20px"
                                                src="https://image.flaticon.com/icons/png/512/37/37090.png" 
                                                onClick={event => this.mostrarSenha(event)}
                                            >
                                            </img>
                                            <input type="password" maxLength="10" name="senha" className="form-control" id="senha" required />
                                        </div>
                                        <div className="form-group col-md-6 mt-3 mt-md-0">
                                            <label>Email: </label>
                                            <input type="email" className="form-control" name="email" id="email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Telefone:</label>
                                        <input type="tel" name="tel" className="form-control" id="tel" required />
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Carregando.</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Suas alterações foram salvas.</div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                    <div className="form-group mt-3">
                                        <label>URL foto:</label>
                                        <input type="text" name="urlFoto" className="form-control" id="urlFoto" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <img id="fotoUser" alt="" src={fotoPerfil} />
                                    </div>
                                    <div className="text-center" ><button id="btnVerImg" type="submit" onClick={event => this.mudarFoto(event)}> Visualizar </button></div>
                                </div>
                            </div>
                            <div className="mx-auto">
                                <button id="btnSalvarHome" type="submit" align="center">Salvar</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}