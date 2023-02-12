import logo from '../images/logo.svg'
import { PageLinks } from './LinksComponetns/PageLinks'
import { IconsLinks } from './LinksComponetns/IconsLinks'
 
export const Navbar = () => {
    
  return (
    <nav className="navbar">
      <div className="nav-center">

        <div className="nav-header">

          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
          
        </div>

        <PageLinks parentClass='nav-links' itemClass='nav-link'/>

        <IconsLinks parentClassIcon='nav-icons' itemClassIcon='nav-icon'/>

      </div>
    </nav>
  )
}
