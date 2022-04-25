import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Da Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className='flex justify-between items-center bg-gray-100 border-b border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl'><span className='underline decoration-black'>Theories</span> is the place to write and read about Conspiracies.</h1>
          <h2>Free to read and post! No need for an account or anything that's annoying as hell :)</h2>
        </div>
        <div>
          <img className="hidden md:inline-flex h-32 lg:h-full" src="https://png.pngtree.com/element_our/png/20181008/t-logo-with-ink-pen-nibs-png_131009.jpg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home
