import React, { Component } from 'react';
import "../../assets/css/style.css";
export default class PaginaPrincipal extends Component {
    render() {
        return (
            <div>
                <section id="topbar" className="d-flex align-items-center">
                    <div className="container d-flex justify-content-center justify-content-md-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope-fill"></i><a href="mailto:tutohora@gmail.com">tutohora@gmail.com</a>
                            <i className="bi bi-phone-fill phone-icon"></i> +1 5589 55488 55
                    </div>
                        <div className="social-links d-none d-md-block">
                            <a href="https://twitter.com/TutoHora?s=09" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a  className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/tutohora/" className="instagram"><i className="bi bi-instagram"></i></a>
                            <a className="linkedin"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </section>
                <div id="header" className="d-flex align-items-center">
                    <div className="container d-flex align-items-center">
                        <h1 className="logo me-auto"><a href="index.html">TutoHora</a></h1>
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                                <li><a className="nav-link scrollto" href="#about">O Colégio</a></li>
                                <li><a className="nav-link scrollto" href="#services">Matérias</a></li>
                                <li><a className="nav-link scrollto " href="#portfolio">Professores</a></li>
                                <li><a className="nav-link scrollto" href="#team">Criadoras</a></li>
                                <li><a className="nav-link scrollto" href="#contact">Contatos</a></li>
                                <li><a className="getstarted scrollto" href="Login/Login.html">Entrar</a></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                </div>
                
                <script src="../src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="../src/assets/vendor/glightbox/js/glightbox.min.js"></script>
                <script src="../src/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                <script src="../src/assets/vendor/php-email-form/validate.js"></script>
                <script src="../src/assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="../src/assets/js/main.js"></script>
            </div>
        )
    }
}
