import { Link } from "react-router-dom"
import { NavBarLinks } from "../../constants/navBarLinks"

export const NavBar = ()=>{
    return(
        <div>
            {
             NavBarLinks.map((navItem)=>{
                return(
                    <Link key={navItem.name} to={navItem.link} className="nav-links">{navItem.name}</Link>
                )
             })
            }
        </div>
    )
}