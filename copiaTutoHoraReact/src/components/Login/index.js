import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./styleLogin.css"

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.quemEh = "";
	}
	async login(event) 
	{
		var apiUrlLogin = "https://localhost:5000/api";
		var qualEmail = document.querySelector("#inputEmail").value;
		var qualSenha = document.querySelector("#inputPassword").value;
		if (this.quemEh === "") {
			alert("[ERROR] Marque uma opção!")
		}
		else {
			if (qualEmail === "" || qualSenha === "") {
				alert("[ERROR] Informe todas os dados!")
			}
			else 
			{
				const usuario = await (await fetch(apiUrlLogin + "/" + this.quemEh + "/" + qualEmail)).json();
				if (usuario.senha === qualSenha) {
					if (this.quemEh === "Cliente") 
					{
						window.location.href = `http://localhost:3000/homeAluno`;
					}
					if (this.quemEh === "Professor") 
					{
						window.location.href = `http://localhost:3000/homeProfessor`;
					}
				}
				else if (usuario.email === qualEmail && usuario.senha !== qualSenha) {
					alert("[ERROR] Senha Incorreta!");
				}
				else {
					alert("[ERROR] Usuario inexistente ou erro no Servidor!");
				}
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
			<div id="bodyLogin" className="container">
				<div className="row">
					<div className="col-lg-10 col-xl-9 mx-auto">
						<div className="card card-signin flex-row my-5">
							<div className="card-img-left-login d-none d-md-flex">
							</div>
							<div className="card-body">
								<h2 className="card-title text-center">Login</h2>
								<form className="form-signin">

									<hr></hr><br></br>

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
										</img></p>
									<div className="form-label-group">
										<input type="password" id="inputPassword" className="form-control" placeholder="Password"
											required />
										<label for="inputPassword">Senha</label>
									</div>

									<div className="form-label-group">
										<label>
											<input type="radio" id="inputAluno" value="Aluno" name="estado" onClick={event => this.quemSouEu(event)} /> Aluno</label>
									</div>
									<br />
									<div className="form-label-group">
										<label>
											<input type="radio" id="inputProf" value="Prof" name="estado" onClick={event => this.quemSouEu(event)} /> Professor</label>
									</div>

									<br></br>
									<hr></hr>
									<a>
										<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={event => this.login(event)}> Login</button>
									</a>
									<Link to="/criarConta">
										<a className="d-block text-center mt-2 small">Não possui uma conta? Clique aqui</a>
									</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}