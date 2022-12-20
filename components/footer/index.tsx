import { IoLogoGithub as Github } from 'react-icons/io'
import { FiTwitter as Twitter } from 'react-icons/fi'
import { SiUdemy as Udemy } from 'react-icons/si'
import { footer } from './style'
import FootPrint from '@components/footprint'

const Footer = () => {
  return (
    <footer css={footer}>
      <ul>
        <li>
          <a
            href="#"
            aria-label="Abdulmaleek Adams' Github profile"
            rel="noopener"
            target="_blank"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Abdulmaleek Adams' Twitter profile"
            rel="noopener"
            target="_blank"
          >
            <Twitter />
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Abdulmaleek Adams' Udemy profile"
            rel="noopener"
            target="_blank"
          >
            <Udemy />
          </a>
        </li>
      </ul>
      <FootPrint />
    </footer>
  )
}

export default Footer
