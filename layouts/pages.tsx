import { ReactNode } from 'react'
import Header from '@components/header'
import Navigation from '@components/navigation'
import SEO, {SEOProps} from '@components/seo'

type PageProps = {
  meta?: SEOProps
  children?: ReactNode
}

const Page = ({ meta, children }: PageProps) => {
  return (
      <>
          <SEO {...meta} />
      <main>
        <Header />
        <Navigation />
        {children}
      </main>
    </>
  )
}

export default Page
