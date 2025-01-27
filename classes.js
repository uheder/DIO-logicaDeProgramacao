
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    tipos = {
        "mago": "magia",
        "guerreiro": "espada",
        "monge": "artes marciais",
        "ninja": "shuriken"
    }

    atacar() {
        if (this.tipo in this.tipos) {
            console.log(`O ${this.tipo} atacou usando ${this.tipos[this.tipo]}`)
        } else {
            console.log("Herói inválido")
        }
    }
}

let merlin = new Heroi("Merlin", 85, "mago");
merlin.atacar()