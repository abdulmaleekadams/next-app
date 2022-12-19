import Logo from '@components/logo'
import { container, title } from './styles'

const Header = () => {
  return (
    <header css={container}>
      <h1 css={title}>Devlog</h1>
      <Logo />
    </header>
  )
}

export default Header
