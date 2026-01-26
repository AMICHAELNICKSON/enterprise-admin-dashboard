import { NavLink } from "react-router-dom"
import { ROUTES } from "../../routes/routes"
import { navLinkClass } from "../../utils/navLinkClass"
//need to check: refactoring the rendering list method

function SideBar() {
    return (
        <aside className="p-3 border-end">
            <ul className="nav flex-column gap-2">
                <li className="nav-item">
                    <NavLink to={ROUTES.DASHBOARD} end className={navLinkClass}>
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={ROUTES.USERS} className={navLinkClass}>
                        Users
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar