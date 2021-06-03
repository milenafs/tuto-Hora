import React, { Component } from 'react';
import "./styleCadastro.css";
import { Link } from 'react-router-dom';

export default class CriarConta extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card card-signin flex-row my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Crie seu cadastro</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputUserame" className="form-control" placeholder="Username"
                                            required autofocus />
                                        <label for="inputUserame">Nome Completo</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                                            required />
                                        <label for="inputEmail">Email</label>
                                    </div>



                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                                            required />
                                        <label for="inputPassword">Senha</label>
                                    </div>

                                    <div className="form-label-group">
                                        <input type="text" id="inputTel" className="form-control"
                                            placeholder="9999-9999 ou 9999-99999" required />
                                        <label for="inputTel">Telefone / (00) 00000-0000 </label>
                                    </div>

                                    <hr></hr>


                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                                        Criar
                                    </button>

                                    <Link to="/login">
                                        <a className="d-block text-center mt-2 small">Já possui uma conta?
                                            Clique aqui
                                        </a>
                                    </Link>

                                </form>
                            </div>
                            <div className="card-img-left d-none d-md-flex">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}