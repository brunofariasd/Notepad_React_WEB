export default class arrayNotas{

    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => func())
    }

    criarNota(titulo, nota, categoria) {
        const novaNota = new Nota(titulo, nota, categoria)
        this.notas.push(novaNota)
    }

    deletarNota(index) {
        this.notas.splice(index, 1);
    }
}

class Nota{
    constructor(titulo, nota, categoria) {
        this.titulo = titulo;
        this.nota = nota;
        this.categoria = categoria;
    }
}