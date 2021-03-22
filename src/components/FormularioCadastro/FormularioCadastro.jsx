import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo = '';
    this.nota = '';
    this.categoria = 'Sem Categoria';
    this.state = {
      categorias: []
    }
    this._novaCategoria = this._novaCategoria.bind(this);
  }

  componentDidMount(){
    this.props.categorias.inscrever(this._novaCategoria);
  }

  componentWillUnmount(func){
    this.props.categorias.desinscrever(this._novaCategoria);
  }

  _novaCategoria(categorias){
    this.setState({...this.state, categorias})
  }

  _changeCategoria(event) {
    event.stopPropagation();
    this.categoria = event.target.value;
  }

  _changeTitulo(event) {
    event.stopPropagation();
    this.titulo = event.target.value;
  }

  _changeNota(event) {
    event.stopPropagation();
    this.nota = event.target.value;
  }

  _criarNota(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.nota, this.categoria);
  }


  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <select onChange={this._changeCategoria.bind(this)} className="form-cadastro_input">
          <option>Sem Categoria</option>
          {this.props.categorias.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          name='tituloNota'
          className="form-cadastro_input"
          onChange={this._changeTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          name='textoNota'
          className="form-cadastro_input"
          onChange={this._changeNota.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
