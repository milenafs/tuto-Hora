import React, { Component } from 'react';
import "./styleCadastro.css";
import { Link } from 'react-router-dom';

export default class CriarConta extends Component {
    constructor(props) {
        super(props);
        this.quemEh = "";
    }
    criarConta(event) {
        if (this.quemEh === "") {
            alert("[ERROR] Marque uma opção!")
        }
        else {
            var qualFoto = "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png";
            var qualNome = document.querySelector("#inputUserame").value;
            var qualTel = document.querySelector("#inputTel").value;
            var qualEmail = document.querySelector("#inputEmail").value;
            var qualSenha = document.querySelector("#inputPassword").value;
            if (qualNome === "" || qualTel === "" || qualEmail === "" || qualSenha === "") 
            {
                alert("[ERROR] Informe todos os dados!")
            }
            else 
            {
                alert("> Criar um " + this.quemEh +
                    "\n Nome: " + qualNome +
                    "\n Email: " + qualEmail +
                    "\n Senha: " + qualSenha +
                    "\n Telefone: " + qualTel +
                    "\n Foto: " + qualFoto
                )
            }

        }
    }
    quemSouEu(event) {
        if (event.target.id === "inputAluno") {
            this.quemEh = "Cliente";
        }
        else if (event.target.id === "inputProf") {
            this.quemEh = "Professor";
        }
    }
    mostrarSenha(event) {
        var senha = document.querySelector('#inputPassword');
        if (senha.type === 'text') {
            senha.setAttribute('type', 'password');
        }
        else {
            senha.setAttribute('type', 'text');
        }

    }
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


                                    <p>   Ver a senha:
									    <img id="olho" height="20px" width="20px"
                                            src="https://image.flaticon.com/icons/png/512/37/37090.png"
                                            onClick={event => this.mostrarSenha(event)}
                                        >
                                        </img>
                                    </p>
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
                                    <h5>Sou: </h5>
                                    <div className="form-label-group">
                                        <label>
                                            <input type="radio" id="inputAluno" value="Aluno" name="estado" onClick={event => this.quemSouEu(event)} />
                                            Aluno
                                        </label>
                                    </div>
                                    <br></br>
                                    <div className="form-label-group">
                                        <label>
                                            <input type="radio" id="inputProf" value="Prof" name="estado" onClick={event => this.quemSouEu(event)} />
                                            Professor
                                        </label>
                                    </div>
                                    <br></br>
                                    <hr></hr>
                                    <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={event => this.criarConta(event)}>
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