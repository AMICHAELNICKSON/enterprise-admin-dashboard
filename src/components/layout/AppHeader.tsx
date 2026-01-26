import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import { ROUTES } from "../../routes/routes";

function AppHeader() {
    
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate(ROUTES.LOGIN, {replace: true})
    }

    return (
        <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
            <h5>Enterprise-admin-dashboard</h5>
            <button className="btn btn-outline-secondary btn-sm" onClick={handleLogout}>
                Logout
            </button>
        </header>
    )
}

export default AppHeader