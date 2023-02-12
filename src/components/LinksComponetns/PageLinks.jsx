import { pageLinks } from "../../data"


export const PageLinks = ({ parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
        { pageLinks.map((link) =>{
            return ( 
              <li>
                <a href={link.href} className={itemClass}> {link.text} </a>
              </li>
            )
        })}
    </ul>
  )
}
