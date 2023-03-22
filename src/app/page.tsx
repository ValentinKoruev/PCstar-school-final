import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.scss'

import Slider from '@components/Slider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='container'>
      <Slider />
    </main>
  )
}
