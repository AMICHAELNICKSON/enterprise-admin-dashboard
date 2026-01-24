import { NavLink } from "react-router-dom"
import { ROUTES } from "../../routes/routes"
//need to check: refactoring the rendering list method

function SideBar() {
    return (
        <aside className="p-3 border-end">
            <ul className="nav flex-column gap-2">
                <li>
                    <NavLink
                        to={ROUTES.DASHBOARD}
                        className={({isActive}) =>
                            isActive ? "fw-bold text-primary" : ""
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={ROUTES.USERS}
                        className={({isActive}) =>
                            isActive ? "fw-bold text-primary" : ""
                        }
                    >
                        Users
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar