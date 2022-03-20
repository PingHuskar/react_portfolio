import './Footer.css'
import { about } from '../../portfolio'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/rajshekhar26/cleanfolio'
      className='link footer__link'
    >
      Created By {about.name}
    </a>
  </footer>
)

export default Footer
