import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-gray-500 to-blue-800 `}>
  <Layout titulo="Ola, meus amores"></Layout>
  </div>
  
  )
}
