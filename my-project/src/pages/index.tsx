import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Titulo from './components/Titulo'
import Layout from './components/Layout'

export default function Home() {
  return (
    <div className='
    bg-red-900	 text-white text-9x1' >
      <Titulo></Titulo>
      <Layout titulo="aaa"><h1>ola  </h1></Layout>
    </div>
  )
}
