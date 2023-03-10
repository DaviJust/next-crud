export default class Cliente {
    #id: any
    #nome: any
    #idade: any

    constructor(nome: any, idade: any, id: any = ``) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    static vazio() {
        return new Cliente('', 0, '')
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }
}