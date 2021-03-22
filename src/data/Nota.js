export default class arrayNotas{

    constructor(){
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    _notificar(){
        this._inscritos.forEach(func => 
            func(this.notas)
        )
    }

    criarNota(titulo, nota, categoria) {
        const novaNota = new Nota(titulo, nota, categoria);
        this.notas.push(novaNota);
        this._notificar();
    }

    deletarNota(index) {
        this.notas.splice(index, 1);
        this._notificar();
    }
}

class Nota{
    constructor(titulo, nota, categoria) {
        this.titulo = titulo;
        this.nota = nota;
        this.categoria = categoria;
    }
}