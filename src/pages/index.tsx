import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import Botao from "../components/Botao"
import Formulario from '../components/Formulario'
import { useEffect, useState } from 'react'
import ColecaoCliente from '../backend/db/ColecaoCliente'
import ClienteRepositorio from '../core/ClienteRepositorio'

export default function Home() {


  const repo: ClienteRepositorio = new ColecaoCliente()

  const [cliente, setClientes] = useState<Cliente>(Cliente.vazio())
  const [cliente, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')


  useEffect(obterTodos, [])


function obterTodos(){
  repo.obterTodos().then(clientes => {
    setClientes(clientes)
    setVisivel('tabela')
  })
  
}

  function clienteSelecionado(cliente: Cliente) {
    setClientes(cliente)
    setVisivel('form')
  }


  function clienteExcluido(cliente: Cliente) {
    console.log("Excluir..." + cliente.nome)
  }


  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos('tabela')
  }

  function novoCliente(){
    setClientes(Cliente.vazio())
    setVisivel('form')
  }

  return (
    <span className=' 
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-black to-purple-800
    text-white' >
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao className={`mb-4`} 
              onClick = {novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (

          <Formulario 
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')}
          
          ></Formulario>

        )}


      </Layout>
    </span>
  )
}
