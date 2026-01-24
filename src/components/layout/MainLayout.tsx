import { Outlet } from "react-router-dom"
import AppHeader from "./AppHeader"
import SideBar from "./SideBar"

function MainLayout() {
    return (
        <div className="d-flex vh-100">
            <SideBar/>
            <div className="flex-grow-1">
                <AppHeader/>
                <main className="p-3">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default MainLayout