import Header from "@components/header"
import Navigation from "@components/navigation"
import Head from "next/head"

const Page = () => {
    return (
        <>
        <Head>
          <title>All about NextJS</title>
        </Head>
        <main>
          <Header />
          <Navigation />
        </main>
      </>
    )
}

export default Page