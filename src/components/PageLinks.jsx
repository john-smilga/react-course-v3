import { pageLinks } from "../data"


export const PageLinks = () => {
  return (
    <ul className="nav-links" id="nav-links">
        { pageLinks.map((link) =>{
            return ( 
              <li>
                <a href={link.href} className="nav-link"> {link.text} </a>
              </li>
            )
        })}
    </ul>
  )
}
