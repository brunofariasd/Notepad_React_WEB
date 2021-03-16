import React, { Component } from "react";
import "./estilo.css";
class ListaCategorias extends Component {

  constructor(){
    super();
    this.state = {categorias:[]}
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias.bind(this))
  }

  _novasCategorias(categorias){
    this.setState({...this.state,categorias})
  }

  _handleEventoInput(e) {
    if (e.key === "Enter") {
      this.props.categorias.adicionarCategoria(e.target.value)
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li className="lista-categorias_item"
                key={index}>{categoria}
              </li>
            );
          })}
        </ul>
        <input 
          className="lista-categorias_input" 
          type="text" 
          placeholder='Digite a Categoria'
          onKeyPress={this._handleEventoInput.bind(this)} 
        />
      </section>
    );
  }
}

export default ListaCategorias;
