import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {

  constructor(props){
    super(props);
    this.state = {
      notas: []
    }
    this._novaNota = this._novaNota.bind(this);
  }

  componentDidMount(){
    this.props.notas.inscrever(this._novaNota)
  }

  componentWillUnmount(){
    this.props.notas.desinscrever(this._novaNota)
  }

  _novaNota(notas){
    this.setState({...this.state, notas})
  }


  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota 
                titulo={nota.titulo} 
                categoria={nota.categoria} 
                nota={nota.nota} 
                deletarNota={this.props.deletarNota} 
                indice={index} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
