import React, { Component } from 'react';
import "./style.css"
export default class Login extends Component {
    render() {
        return (
            <div className="container">
		<div className="row">
			<div className="col-lg-10 col-xl-9 mx-auto">
				<div className="card card-signin flex-row my-5">
					<div className="card-img-left d-none d-md-flex">
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
							<br></br>
							<hr></hr>
							<a href="#"> 
								<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit"> Login</button>
							</a>
							<a className="d-block text-center mt-2 small" href="../Criar_Codastro/index.html">Não possui uma conta? Clique aqui</a>
							
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
        );
    }
}