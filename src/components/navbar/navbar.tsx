import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
 return (
  <div className={styles.container}>

   {/* ul>li*5>a{Link $$} contoh emet mempercepat buat ul dan li hasil dibawah */}
   <ul>
    <li><a href="">navbar</a></li>
    <li><a href="">link 02</a></li>
    <li><a href="">link 03</a></li>
    <li><a href="">link 04</a></li>
    <li><a href="">link 05</a></li>
    <li><a href="">link 06</a></li>
    <li><a href="">link 07</a></li>
    <li><a href="">link 08</a></li>
   </ul>
   <ul>
    <li><a href="">navbar</a></li>
    <li><a href="">link 02</a></li>
    <li><a href="">link 03</a></li>
    <li><a href="">link 04</a></li>
    <li><a href="">link 05</a></li>
   </ul>

  </div>
 )
}
