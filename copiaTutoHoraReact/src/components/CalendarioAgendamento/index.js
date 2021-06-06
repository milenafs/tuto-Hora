import React, { Component } from 'react';
import MenuAluno from '../MenuAluno';
import Modal from '../ModalAgendamento';
import "./styleCalendarioAgendamento.css";
import Calendar from 'react-calendar'

//  Milena: hj de manha peguei pra fazer essa tela 
//  mas acabei nem testei nada kkkkkk mas acho q deu pra adiantar um pouco
//  P.S. fiz uma copia e comentei da versão anterior, tá no final desse index

export default class CalendarioAgendamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profAtual: [],  //prof selecionado
            modal: false,
            dataAtual: 'aaaa-mm-dd',
            diaSemAtual: 0,
            dadosData: [],  //todos os horarios desse dia desse prof
            dadosDataInd: [] //horarios indisponiveis
        };
    }
    componentDidMount() {
        const apiUrlDatas = 'https://localhost:5000/api/';//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa N SEI A URL
        const apiUrlDatasIndis = 'https://localhost:5000/api/';  //aaaaaaaaaaaaaaaaaaaaaaaaaaaa
        fetch(apiUrlDatas)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosData: result
                    });
                    console.log("buscaData:" + result);
                },
                (error) => {
                    this.setState({ error });
                }
            )
        fetch(apiUrlDatasIndis)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        dadosDataInd: result
                    });
                    console.log("buscaDataIndisponiveis:" + result);
                },
                (error) => {
                    this.setState({ error });
                }
            )
    }

    mostarDados(data) {
        var dataAtual = data+ "";
        var d,m,a;
        a = dataAtual.substring(11,15)
        d = dataAtual.substring(8,10)

        if(dataAtual.includes("Jan")){m = "01"}
        else if(dataAtual.includes("Feb")){m = "02"}
        else if(dataAtual.includes("Mar")){m = "03"}
        else if(dataAtual.includes("Apr")){m = "04"}
        else if(dataAtual.includes("May")){m = "05"}
        else if(dataAtual.includes("Jun")){m = "06"}
        else if(dataAtual.includes("Jul")){m = "07"}
        else if(dataAtual.includes("Aug")){m = "08"}
        else if(dataAtual.includes("Sep")){m = "09"}
        else if(dataAtual.includes("Oct")){m = 10}
        else if(dataAtual.includes("Nov")){m = 11}
        else if(dataAtual.includes("Dec")){m = 12}

        this.state.dataAtual = a+"-"+m+"-"+d;

        if(dataAtual.includes("Mon")){console.log(this.state.dataAtual+"   -- segunda");this.state.diaSemAtual = 1;}
        else if(dataAtual.includes("Tue")){console.log(this.state.dataAtual+"   -- terça");this.state.diaSemAtual = 2;}
        else if(dataAtual.includes("Wed")){console.log(this.state.dataAtual+"   -- quarta");this.state.diaSemAtual = 3;}
        else if(dataAtual.includes("Thu")){console.log(this.state.dataAtual+"   -- quinta");this.state.diaSemAtual = 4;}
        else if(dataAtual.includes("Fri")){console.log(this.state.dataAtual+"   -- sexta");this.state.diaSemAtual = 5;}
        else if(dataAtual.includes("Sat")){console.log(this.state.dataAtual+"   -- sábado");this.state.diaSemAtual = 6;}
        else if(dataAtual.includes("Sun")){console.log(this.state.dataAtual+"   -- domingo");this.state.diaSemAtual = 7;}
    }

    aparecerModal() {
        this.setState({
            modal: true
        });
    }

    render() {
        const { dadosData, dadosDataInd } = this.state;
        return (<div id="bodyAgendamento">
            <MenuAluno></MenuAluno>
            <br></br><br></br>
            <div className="section-title">
                    <h2>Calendário Agendamento</h2>
                </div>
            <div className="agendamento-container">
                {this.state.profAtual.map(professor => // DADOS PROFESSOR
                <>
                    <img className="agenda-img" src={professor.foto} alt={professor.nome} /><br /><br />
                    <h6 className="agenda-h6">AGENDAMENTO DE HORÁRIOS</h6><h3 className="agenda-h3">{professor.nome}</h3><br />
                    <br />    
                </>)}

                {this.state.dadosData.filter(profhorario => profhorario.idProf == this.state.profAtual.id)
                .map(profhorario => <div className="card-horario">

                    <div className="card-hora">{profhorario.horarioInicio} ás {profhorario.horarioFinal}</div>

                    {this.state.dadosDataInd.filter(clienteprofhorario => //INDISPONIVEL
                        clienteprofhorario.data === this.state.dataAtual &&  //pega os horarios ind do dia selecionado,
                        clienteprofhorario.idProfHorario == this.state.profhorario.id).map(clienteprofhorario =>  //que são do prof selecionado
                            <button className="td-horario-indisponivel">INDISPONÍVEL</button>)}  

                    {this.state.dadosDataInd.filter(clienteprofhorario => //DISPONIVEL
                        clienteprofhorario.data === this.state.dataAtual  &&
                        clienteprofhorario.idProfHorario !== this.state.profhorario.id).map(clienteprofhorario =>
                            <Modal id="horari e dia da aula">AGENDAR</Modal>)}
                </div>)}
        </div>);
    }
    
}

/*
import React, { Component } from 'react';
import MenuAluno from '../MenuAluno';
import Modal from '../ModalAgendamento';
import "./styleCalendarioAgendamento.css";
import Calendar from 'react-calendar'



export default class CalendarioAgendamento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }
    mostarDados(data) {
        console.log(data);
        // FAZER SELECT DOS COMPROMISSOS DESTA DATA E COLOCAR NO STATE
    }

    aparecerModal() {
        this.setState({
            modal: true
        });
    }

    render() {
        return (<div id="bodyAgendamento">
            <MenuAluno></MenuAluno>
            <br></br><br></br>
            <div className="section-title">
                    <h2>Calendário Agendamento</h2>
                </div>
            <div className="agendamento-container">
                <img className="agenda-img" src="https://i.pinimg.com/originals/b9/26/34/b926340a171ae158fce2e02affa4f203.jpg" alt="FEIOSO" /><br /><br />
                <h6 className="agenda-h6">AGENDAMENTO DE HORÁRIOS</h6><h3 className="agenda-h3"> Rodrigo Barulhento</h3><br />
                <br />
                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <Modal id="horari e dia da aula">AGENDAR</Modal>
                </div>

                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <button className="td-horario-indisponivel">INDISPONÍVEL</button>
                </div>

                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <Modal id="horari e dia da aula">AGENDAR</Modal>
                </div>

                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <Modal id="horari e dia da aula">AGENDAR</Modal>
                </div>

                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <Modal id="horari e dia da aula">AGENDAR</Modal>
                </div>
                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <button className="td-horario-indisponivel">INDISPONÍVEL</button>
                </div>
                <div className="card-horario">
                    <div className="card-hora">6:00 às 7:00</div>
                    <button className="td-horario-indisponivel">INDISPONÍVEL</button>
                </div>

            </div>
            <div id="div-calendario-agendamento">
                <Calendar id="calendario" onClickDay={data => this.mostarDados(data)} />
            </div>
            {this.state.modal && <Modal></Modal>}

        </div>);
    }
}*/
