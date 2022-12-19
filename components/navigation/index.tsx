import Link from 'next/link'
import { GiAstronautHelmet as Astronaut } from 'react-icons/gi'
import { navigationStyles } from './styles'


const Navigation = () => {
  return (
    <nav css={navigationStyles}>
      <Link href="/" aria-label="Back to home">
        <Astronaut />
      </Link>
      <Link href="/about">About</Link>
    </nav>
  )
}
export default Navigation
