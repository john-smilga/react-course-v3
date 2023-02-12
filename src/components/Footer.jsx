import { pageLinks, socialLinks } from "../data"
import { IconsLinks } from "./LinksComponetns/IconsLinks";
import { PageLinks } from "./LinksComponetns/PageLinks";

export const Footer = () => {
  return (
    <footer className="section footer">
      
      <PageLinks parentClass='footer-links' itemClass='footer-link'/>

      <IconsLinks parentClassIcon='footer-icons' itemClassIcon='footer-icon'/>

      <p className="copyright">

        copyright &copy; Backroads travel tours company
        <span id="date"> 
          {new Date().getFullYear()} 
        </span> all rights reserved.

      </p>
    </footer>
  )
}
