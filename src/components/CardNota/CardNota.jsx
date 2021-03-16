import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as Delete} from "../../assets/img/delete.svg"

class CardNota extends Component {

  apagarNota(){
    this.props.deletarNota(this.props.indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <Delete onClick={this.apagarNota.bind(this)}/>
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.nota}</p>
      </section>
    );
  }
}

export default CardNota;
