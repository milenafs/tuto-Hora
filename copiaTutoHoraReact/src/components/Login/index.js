import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./styleLogin.css"

export default class Login extends Component {

	quemSouEu(event)
	{
		//Ver se é aluno ou professor
		if(event.target.id == "inputAluno")
		{	
			console.log("> DESMARCA O PROF");
		}
		else if(event.target.id == "inputProf")
		{
			console.log("> DESMARCA O ALUNO");
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
									required/>
								<label for="inputEmail">Email</label>
							</div>

							<div className="form-label-group">
								<input type="password" id="inputPassword" className="form-control" placeholder="Password"
									required/>
								<label for="inputPassword">Senha</label>
							</div>

							<div className="form-label-group">
								<label>
								<input type="radio" id="inputAluno" value="Aluno" name="estado" onClick={event => this.quemSouEu(event)}/> Aluno</label>
							</div>
							<br/>
							<div className="form-label-group">
								<label>
								<input type="radio" id="inputProf" value="Prof" name="estado"  onClick={event => this.quemSouEu(event)}/> Professor</label>
							</div>

							<br></br>
							<hr></hr>
							<a href=""> 
								<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"> Login</button>
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