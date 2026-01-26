import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import { ROUTES } from "../../routes/routes";

function Login() {

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate(ROUTES.DASHBOARD, {replace: true})
    }

    return (
        <div className="container mt-5" style={{maxWidth: 400}}>
            <h3>Login</h3>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control"/>
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input type="password" className="form-control"/>
            </div>
            <button className="btn btn-primary w-100" onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}

export default Login