import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente"

interface FormularioProps{
    cliente: Cliente
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente.id ?? null
    const[nome, setNome] = useState(props.cliente?.nome ?? '')
    const[idade, setIdade] = useState(props.cliente?.idade ?? '')

    return(
        <div>
            {id ? (
                <Entrada 
                somenteLeitura
                texto="Codigo"
                valor={id}
                ></Entrada>
            ) : false}

           <Entrada 
           texto="Nome" 
           valor={nome}
           valorMudou={setNome}
           ></Entrada> 

           <Entrada 
            texto="Idade"
            tipo="number" 
            valor={idade}
            valorMudou={setIdade}

            ></Entrada> 
        </div>
    )
}