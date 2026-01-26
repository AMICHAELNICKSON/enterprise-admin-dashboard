import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import MainLayout from "../components/layout/MainLayout";
import { ROUTES } from "./routes";
import ProtectedRoute from "./ProtectedRoute";
//need to check: lazyloading and dynamic loading of the routes

function AppRoutes () {
    return (
        <Routes>
            <Route path={ROUTES.LOGIN} element={ <Login/> }/>
            <Route element={<ProtectedRoute/>}>
                <Route element={ <MainLayout/> }>
                    <Route index element={<Navigate to={ROUTES.DASHBOARD} replace/>} />
                    <Route path={ROUTES.USERS} element={<Users/>}/>
                    <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes