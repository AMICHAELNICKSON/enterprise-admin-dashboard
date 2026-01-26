import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"
import { ROUTES } from "../../routes/routes";
import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const isFormValid = email && password;

    const { login } = useAuth();
    const navigate = useNavigate();

    const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const handleLogin = () => {
        setError("");

        if (!password || !email) {
            setError("Email and password are required");
            return;
        }
        else if (email) {
            if(!isValidEmail(email)) {
                setError("Please enter a valid email address");
                return;
            }
        }


        login();
        navigate(ROUTES.DASHBOARD, { replace: true })
    }

    return (
        <div className="container mt-5" style={{ maxWidth: 400 }}>
            <h3>Login</h3>
            {error && (
                <div className="alert alert-danger py-2">{error}</div>
            )}
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                    }}
                />
            </div>
            <button className="btn btn-primary w-100" disabled={!isFormValid} onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}

export default Login