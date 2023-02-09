import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
 
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

        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) =>{
            return ( 
              <li>
                <a href={link.href} className="nav-link"> {link.text} </a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          { socialLinks.map( link => {

            const { id, href, icon} = link

            return (
              <li>
                <a href={href} target="_blank" rel='noreferrer' className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
