import React, { Component } from 'react';
import '../PaginaPrincipal/stylePaginaPrincipal.css'
import fotoEscola from '../../assets/img/about.jpg';
import prof1 from '../../assets/img/professores/1.jpg';
import prof2 from '../../assets/img/professores/2.jpg';
import prof3 from '../../assets/img/professores/3.jpg';
import prof4 from '../../assets/img/professores/4.jpg';
import prof5 from '../../assets/img/professores/5.jpg';
import prof6 from '../../assets/img/professores/6.jpg';
import prof7 from '../../assets/img/professores/7.jpg';
import prof8 from '../../assets/img/professores/8.jpg';
import fotoGi from '../../assets/img/perfil.png';
import fotoIsa from '../../assets/img/perfil.png';
import fotoLena from '../../assets/img/perfil.png';
import Carrossel from '../Carrossel'
import { Link } from 'react-router-dom';

export default class PaginaPrincipal extends Component {
    render() {
        return (
            <div id="bodyPrincipal">            
               <section id="topbar" className="d-flex align-items-center">
                    <div className="container d-flex justify-content-center justify-content-md-between">
                        <div className="contact-info d-flex align-items-center">
                            <i class="fas fa-envelope"></i><a style={{textDecoration:"none"}}  href="mailto:tutohora@gmail.com">tutohora@gmail.com </a>
                            <i class="fas fa-phone-alt" style={{marginLeft: "10px"}}></i> +11 5589 55488 55
                             </div>
                             <div className="social-links d-none d-md-block">
                                <a style={{textDecoration:"none"}} href="https://twitter.com/TutoHora?s=09" className="twitter"><i class="fab fa-twitter"></i></a>
                                <a style={{textDecoration:"none"}} className="facebook"><i class="fab fa-facebook"></i></a>
                                <a style={{textDecoration:"none"}} href="https://www.instagram.com/tutohora/" className="instagram"><i class="fab fa-instagram"></i></a>
                            </div>
                    </div>
                </section>
                <div id="header" className="d-flex align-items-center" >
                    <div className="container d-flex align-items-center">
                        <h1 className="logo me-auto"><a style={{textDecoration:"none", marginRight:"250px"}} href="index.html">TutoHora</a></h1>
                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><a style={{textDecoration:"none"}} className="nav-link scrollto active" href="#hero">Home</a></li>
                                <li><a style={{textDecoration:"none"}} className="nav-link scrollto" href="#about">O Colégio</a></li>
                                <li><a style={{textDecoration:"none"}} className="nav-link scrollto" href="#services">Matérias</a></li>
                                <li><a style={{textDecoration:"none"}} className="nav-link scrollto " href="#portfolio">Professores</a></li>
                                <li><a style={{textDecoration:"none"}} className="nav-link scrollto" href="#team">Criadoras</a></li>
                                <li><a style={{textDecoration:"none"}} className="nav-link scrollto" href="#contact">Contatos</a></li>
                                <Link to="/login">
                                    <li><a style={{textDecoration:"none"}} className="getstarted scrollto">Entrar</a></li>
                                </Link>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                </div>
                <section style={{marginBottom:"-60px", marginTop:"-10px"}}>
                    <Carrossel/>
                </section>
                <main id="main" >
                    <section id="featured-services" className="featured-services section-bg">
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-lg-4 col-md-6">
                                    <div className="icon-box">
                                        <div className="icon"><i class="far fa-calendar-alt"></i></div>
                                        <h4 className="title"><a style={{textDecoration:"none"}} href="">Agendamento Personalizado</a></h4>
                                        <p className="description">Agende um horário com um tutor de sua escolha no horário e dia que for melhor para você.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="icon-box">
                                        <div className="icon"><i class="fas fa-laptop"></i></div>
                                        <h4 className="title"><a style={{textDecoration:"none"}} href="">Aprenda de onde quiser</a></h4>
                                        <p className="description">Tenha atendimentos de professores renomados á distância sem sair de sua casa ou venha aprender na nossa sede</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="icon-box">
                                        <div className="icon"><i class="fas fa-wallet"></i></div>
                                        <h4 className="title">   <a style={{textDecoration:"none"}} href="">Baixo Custo</a></h4>
                                        <p className="description">Não pesa no seu bolso, escolha os professores com os menores custos, e pague apenas pelas tutorias realizadas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="about" className="about">
                        <div className="container">
                            <div className="section-title">
                                <h2>Sobre o colégio</h2>
                                <p>Criado com o objetivo de ajudar pessoas por todo o país, TutoHora é uma escola onde você pode aprender o que você quiser com os melhores professores ou simplesmente cessarem dúvidas de algumas matérias.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 order-1 order-lg-2">
                                    <img src={fotoEscola} className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                    <h3>TutoHora, um sonho de melhora</h3>
                                    <p className="fst-italic">
                                        TutoHora foi criado com o objetivo de ajudar pessoas do Brasil inteiro a conquistarem seus sonhos de
                                        aprenderem novas habilidades.
                                        No momento, só possuímos uma sede, que fica em Campinas, mas logo teremos sedes em outros locais.
                                        </p>
                                    <ul>
                                        <li><i className="bi bi-check-circled"></i>Nosso prédio conta com:
                                                <p>- Laboratórios especializados</p>
                                            <p>- Diversas quadras esportivas e uma piscina interna</p>
                                            <p>- Uma biblioteca e muitos outros </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="services" className="services">
                        <div className="container">

                            <div className="section-title">
                                <h2>Matérias</h2>
                                <p>Encontre as mais diversas matérias, desde do ensino fundamental ao ensino superior e também tutorias extras
            como pintura, yoga ou até natação. </p>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box iconbox-blue">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                    d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174">
                                                </path>
                                            </svg>
                                            <i class="fas fa-futbol"></i>                                    </div>
                                        <h4><a style={{textDecoration:"none"}} href="">Esportes</a></h4>
                                        <p>Temos tutorias de esportes como: Basquete, Volêi, Futebol, Natação, etc</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in"
                                    data-aos-delay="200">
                                    <div className="icon-box iconbox-orange ">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                    d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426">
                                                </path>
                                            </svg>
                                            <i className="fas fa-globe"></i>
                                        </div>
                                        <h4><a style={{textDecoration:"none"}} href="">Humanas</a></h4>
                                        <p>Temos tutorias de humanas como: Geografia, História, Filosofia, Sociologia, etc.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in"
                                    data-aos-delay="300">
                                    <div className="icon-box iconbox-pink">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                    d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781">
                                                </path>
                                            </svg>
                                            <i className="fas fa-square-root-alt"></i>
                                        </div>
                                        <h4><a style={{textDecoration:"none"}} href="">Exatas</a></h4>
                                        <p>Temos tutorias de exatas como: Matemática, Física, Raciocínio lógico, etc.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box iconbox-yellow">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                    d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813">
                                                </path>
                                            </svg>
                                            <i className="fas fa-seedling"></i>
                                        </div>
                                        <h4><a style={{textDecoration:"none"}} href="">Biológicas</a></h4>
                                        <p>Temos tutorias de biológicas como: Biologia, Neurociência, Primeiros socorros, etc.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                                    <div className="icon-box iconbox-red">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                    d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572">
                                                </path>
                                            </svg>
                                            <i className="fas fa-language"></i>
                                        </div>
                                        <h4><a style={{textDecoration:"none"}} href="">Idiomas</a></h4>
                                        <p>Temos tutorias de idiomas como: Inglês, Chinês, Japonês, Frânces, etc.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                                    <div className="icon-box iconbox-teal">
                                        <div className="icon">
                                            <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke="none" stroke-width="0" fill="#f5f5f5"
                                                    d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762">
                                                </path>
                                            </svg>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h4><a style={{textDecoration:"none"}} href="">Especiais</a></h4>
                                        <p>Temos tutorias especiais como: Pintura, Programação, Xadrez, Yoga, Canto, etc.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    <section id="cta" className="cta">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-9 text-center text-lg-start">
                                    <h3>Quer saber quais outras matérias nós temos?</h3>
                                </div>
                                <div className="col-lg-3 cta-btn-container text-center">
                                    <Link to="/criarConta">
                                        <a style={{textDecoration:"none"}} className="cta-btn align-middle">Quero me inscrever!</a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section id="portfolio" className="portfolio">
                        <div className="container">

                            <div className="section-title">
                                <h2>Professores</h2>
                                <p>Venha conhecer nossos professores cadastrados!</p>
                            </div>
                            <div className="row portfolio-container">

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src={prof1} className="img-fluid" alt="" height="300px" width="400px" />
                                        <div className="portfolio-info">
                                            <h4>Maria Antonieta</h4>
                                            <p>Formada em Biologia e Química na UNICAMP</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src={prof2} className="img-fluid" alt="" height="300px" width="400px" />
                                        <div className="portfolio-info">
                                            <h4>Aria Neto</h4>
                                            <p>Formado em Pedagogia</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src={prof3} className="img-fluid" alt="" height="300px" width="400px" />
                                        <div className="portfolio-info">
                                            <h4>Sônia Alves Mendes</h4>
                                            <p>Formada em Biomedicina e Farmácia na Unicamp</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src={prof4} className="img-fluid" alt="" height="300px" width="400px" />
                                        <div className="portfolio-info">
                                            <h4>Carlos Darwin Melo</h4>
                                            <p>Dortor em Física Quântica pela Universidade de Boston</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src={prof5} className="img-fluid" alt="" height="300px" width="400px" />
                                        <div className="portfolio-info">
                                            <h4>Ísis Skazok Verdano</h4>
                                            <p>Formada em História e Doutorada em História do Brasil </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src={prof6} className="img-fluid" alt="" height="300px" width="400px" />
                                        <div className="portfolio-info">
                                            <h4>Lana Nakayama</h4>
                                            <p>Formada em Letras pela Unicamp</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src={prof7} className="img-fluid" alt="" height="300px" width="400px" />
                                        <div className="portfolio-info">
                                            <h4>Amélia Sivan Bief</h4>
                                            <p>Formada em Agrônomia Sustentável</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div className="portfolio-wrap">
                                        <img src={prof8} className="img-fluid" alt="" height="300px" width="400px" />
                                        <div className="portfolio-info">
                                            <h4>Carolinne Cross Park</h4>
                                            <p>Formada em Ciências Humanas na Usp</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="team" className="team section-bg">
                        <div className="container">

                            <div className="section-title">
                                <h2>Criadoras</h2>
                                <p>Conheça as mulheres por trás desse projeto!</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="member">
                                        <img src={fotoGi} alt="" />
                                        <h4>Giovana Mendonça Zambanini</h4>
                                        <span>COO</span>
                                        <div className="social">
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-twitter"></i></a>
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-facebook"></i></a>
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-instagram"></i></a>
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="member">
                                        <img src={fotoIsa} alt="" />
                                        <h4>Isabela Clementino Ponciano</h4>
                                        <span>CEO</span>
                                        <div className="social">
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-twitter"></i></a>
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-facebook"></i></a>
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-instagram"></i></a>
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                    <div className="member">
                                        <img src={fotoLena} alt="" />
                                        <h4>Milena Furuta Shishito</h4>
                                        <span>CFO</span>
                                        <div className="social">
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-twitter"></i></a>
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-facebook"></i></a>
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-instagram"></i></a>
                                            <a style={{textDecoration:"none"}} href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="contact" className="contact">
                        <div className="container">
                            <div className="section-title">
                                <h2>Contatos</h2>
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
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
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

                </main>
                <footer id="footer">
                    <div className="container">
                        <h3>TutoHora</h3>
                        <p>Nao perca nenuma novidade! Nos siga nas redes socias abaixo.</p>
                        
                        <div className="copyright">
                            &copy; Copyright <strong><span>Green</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            Created by <a style={{textDecoration:"none"}} href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </footer>
                <a style={{textDecoration:"none"}} href="#" className="back-to-top d-flex align-items-center justify-content-center"><i
                    className="bi bi-arrow-up-short"></i></a>
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
