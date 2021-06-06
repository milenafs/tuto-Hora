import React, { Component } from 'react';
import MenuAluno from '../MenuAluno';
//import Button from 'react-bootstrap/Button';
import "./styleProf.css";
import imgProf from '../../assets/img/imgprof.png'
import imgLogo from '../../assets/img/Logo-TutoHora-unscreen.gif';

export default class Professores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dadosProfs: []
        };
    }
    componentDidMount() {
        const apiUrl = 'https://localhost:5000/api/Professor';
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosProfs: result
                    });
                    console.log("buscaProfs:" + result);
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }
    render() {
        const { dadosProfs } = this.state;
        return (
            <div id="bodyProfessores">
                <MenuAluno></MenuAluno>
                <section id="portfolio" className="portfolio">
                    <div className="container">

                        <div className="section-title">
                            <h2>Professores</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <img src={imgProf} style={{ width: "75%", marginLeft: "12.5%", marginRight: "12.5%" }}></img>
                        <div className="row gx-4 gx-lg-5 align-items-center my-5">
                            <div className="col-lg-7"></div>
                            <div className="col-lg-5">
                                {/*<img id="logo_menu" src={imgLogo} />*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <ul id="portfolio-flters">
                                    <li data-filter="*" className="">Todos os cursos</li>
                                    <li data-filter=".filter-app">Exatas</li>
                                    <li data-filter=".filter-card">Línguas</li>
                                    <li data-filter=".filter-card">Humanas</li>
                                    <li data-filter=".filter-card">Biológicas</li>
                                    <li data-filter=".filter-card">Línguas</li>
                                    <li data-filter=".filter-web">Especiais</li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                        <div className=" row cards-container">
                            {dadosProfs.map(
                                (prof) =>
                                    <div className="card" style={{ width: "300px" }}>
                                        <img className="card-img-bottom" src={prof.foto} alt="Card image" style={{ width: "100%" }} />
                                        <div className="card-body">
                                            <h4 className="card-title">{prof.nomeProf}</h4>
                                            <p className="card-text">   
                                               <b>Idade: </b> {prof.idade} anos
                                            </p>
                                            <p className="card-text">
                                                <b>Formação: </b> {prof.formação}
                                            </p>
                                            <p className="card-text">   
                                                <b>Metodologia: </b> {prof.descricao_metodologia}
                                            </p>
                                            <button href="#" className="btn-agendar-prof">AGENDAR</button>
                                        </div>
                                    </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}