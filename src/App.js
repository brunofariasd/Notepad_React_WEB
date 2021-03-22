import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategorias from "./components/ListaCategorias"
import "./assets/App.css";
import './assets/index.css';
import Categoria from "./data/Categoria";
import arrayNotas from './data/Nota';

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categoria();
    this.notas = new arrayNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)} 
        />
        <main className="conteudo-principal">
          <ListaCategorias 
            addCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas 
            notas={this.notas} 
            deletarNota={this.notas.deletarNota.bind(this.notas)} 
          />
        </main>
      </section>
    );
  }
}

export default App;
