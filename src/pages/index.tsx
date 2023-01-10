import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente('Bia', 45, "2"),
    new Cliente('Carlos', 30, "3"),
    new Cliente('Barbara', 50, "4"),
    new Cliente('Ariel', 18, "5"),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }


  function clienteExcluido(cliente: Cliente) {
    console.log("Excluir..." + cliente.nome)
  }
  return (
    <span className=' 
    flex justify-center items-center h-screen 
    bg-gradient-to-r from-black to-purple-800
    text-white' >
      <Layout titulo="Cadastro Simples">
        <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </span>
  )
}
