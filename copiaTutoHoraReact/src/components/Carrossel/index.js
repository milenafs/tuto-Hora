import React, { Component } from 'react';
import "../../assets/css/style.css";
import TutoHora from "../../assets/img/slide/TutoHora.gif";
import TutoHora2 from "../../assets/img/slide/TutoHora2.jpg";
import TutoHora3 from "../../assets/img/slide/TutoHora3.jpg";
import Carousel from 'react-bootstrap/Carousel'

export default class Carrossel extends Component {
    render() {
        return (
            <div style={{marginTop: "-50px"}}>
               <Carousel id="hero" fade>
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src={TutoHora}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <div className="container" style={{color:"black",textAlign:"center", marginBottom: "100px"}}>
                                <h2 className="animate__animated animate__fadeInDown">Bem vindo!</h2>
                                <p className="animate__animated animate__fadeInUp">TutoHora é uma escola para todos que buscam <br /> aperfeiçoar ou aprender novas habilidades.</p>
                                <a style={{textDecoration:"none"}} href="../CriarConta/index.html" className="btn-get-started animate__animated animate__fadeInUp scrollto">Quero me inscrever!</a>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src={TutoHora2}                  
                        alt="Second slide"
                        />
                        <Carousel.Caption >
                        <div className="container"style={{marginBottom: "110px"}}>
                            <h2 className="animate__animated animate__fadeInDown">Professores</h2>
                            <p className="animate__animated animate__fadeInUp">Nossa equipe é formada pelos mais diversos profissionais.</p>                        
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src={TutoHora3}                        
                        alt="Third slide"
                        />
                        <Carousel.Caption >
                            <div className="container" style={{marginBottom: "110px"}}>
                                <h2 className="animate__animated animate__fadeInDown"> Matérias</h2>
                                <p className="animate__animated animate__fadeInUp">Temos inúmeros cursos para você!</p>                            
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}