import { socialLinks } from "../data";

export const IconsLinks = ({parentClassIcon, itemClassIcon}) => {
  return (
    <ul className={parentClassIcon}>
    {
      socialLinks.map( link => {
        
        const {id, href, icon} = link;

        return(
          <li key={id}>
            <a href={href} target="_blank" className={itemClassIcon}>
              <i className={icon}></i>
            </a>
          </li>
        )
      })
    }
  </ul>
  )
}
