import React, { Component } from 'react';
import "./homeProf.css";
import fotoPerfil from "../../assets/img/perfil.png";
import Menu from '../MenuProf';

export default class HomeProf extends Component {
    render() {
        return (
            <div id="corpoProf">
                <Menu></Menu>
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>Dados Pessoais</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form action="forms/contact.php" method="post" className="php-email-form">
                                    
                                        <label>Nome:</label>
                                        <input type="text" name="nome" className="form-control" id="nome" required />
                                   
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label>Senha:</label>
                                            <input type="text" name="senha" className="form-control" id="senha" required />
                                        </div>
                                        <div className="form-group col-md-6 mt-3 mt-md-0">
                                            <label>Email: </label>
                                            <input type="email" className="form-control" name="email" id="email" required />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label>Telefone:</label>
                                            <input type="tel" name="tel" className="form-control" id="tel" required />
                                        </div>
                                        <div className="form-group col-md-6 mt-3 mt-md-0">
                                            <label>Idade:</label>
                                            <input type="number" name="idade" className="form-control" id="idade" required />
                                        </div>
                                    </div>
                                    
                                        <label for="name">Formação:</label>
                                        <input type="text" className="form-control" name="subject" id="subject" required />
                                    
                                    
                                        <label for="name">Metodologia:</label>
                                        <textarea class="form-control" name="message" rows="4" required></textarea>
                                    
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
                                    <div className="text-center" ><button id="btnVerImg" type="submit"> Visualizar </button></div>
                                    <br></br><br></br>
                                    <div className="mx-auto0">
                                        <i class="fas fa-chalkboard-teacher" style={{marginLeft:"17%",marginRight:"15%"}}></i> 
                                        <i class="fas fa-user-graduate"></i>
                                        <i class="far fa-id-badge" style={{marginLeft:"15%",marginRight:"15%"}}></i>
                                    </div>
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