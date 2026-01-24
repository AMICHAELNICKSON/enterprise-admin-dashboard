import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import MainLayout from "../components/layout/MainLayout";
//need to check: lazyloading and dynamic loading of the routes

function AppRoutes () {
    return (
        <Routes>
            <Route path="/login" element={ <Login/> }/>
            <Route element={ <MainLayout/> }>
                <Route path="/" element={<Navigate to="/dashboard"/>} />
                <Route path="/users" element={<Users/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes