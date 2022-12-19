import { ReactNode } from 'react'
import Header from '@components/header'
import Navigation from '@components/navigation'
import Head from 'next/head'

type PageProps = {
  children?: ReactNode
}

const Page = ({ children }: PageProps ) => {
  return (
    <>
      <Head>
        <title>All about NextJS</title>
      </Head>
      <main>
        <Header />
        <Navigation />
        {children}
      </main>
    </>
  )
}

export default Page
