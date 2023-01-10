export default class Cliente {
    #id: any
    #nome: string
    #idade: number

    constructor(nome:string, idade:number, id: any = null ){
        this.#nome = nome
        this.#idade = idade
        this.#id = id

    }   
    static vazio(){
        return new Cliente('',0,)
    }
    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }
}