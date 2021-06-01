import React, { Component } from 'react';
import "../../assets/css/style.css";
import Menu from '../Menu';

export default class HomeAluno extends Component {
    render() {
        return (
            <div>
               <Menu></Menu>
                <section id="contact" className="contact">
                    <div className="container">
                        <div className="section-title">
                            <h2>Dados Pessoais</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 d-flex align-items-stretch">
                                <div className="info">
                                    <div className="address">
                                        <i class="fas fa-map-marked-alt"></i>
                                        <h4>Sede:</h4>
                                        <p>Bairro Jardim das rosas Amarelas. Rua das Rosas Amarelas, nº 300. Campinas/SP</p>
                                    </div>
                                    <div className="email">
                                        <i class="fas fa-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>tutohora@gmail.com</p>
                                    </div>

                                    <div className="phone">
                                        <i class="fas fa-phone-alt"></i>
                                        <h4>Call:</h4>
                                        <p>+11 5589 55488 55</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form action="forms/contact.php" method="post" className="php-email-form">
                                    <div className="form-group mt-3">
                                        <label for="name">Comentário</label>
                                        <textarea className="form-control" name="message" rows="8" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message">Erro ao enviar comentário.</div>
                                        <div className="sent-message">Obrigada por comentar!!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Enviar comentário</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}