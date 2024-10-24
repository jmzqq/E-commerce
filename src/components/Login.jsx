import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!email || !password) {
            setError("Por favor, preencha todos os campos.");
            setLoading(false);
            return;
        }

        try {
            const URL = "http://localhost:5173/api/login";
            await new Promise((resolve) => setTimeout(resolve, 100)); // Certifique-se de que esta URL está correta
            if (email && password) {
                navigate('/home');
            }
        } catch (err) {
            console.error(err);
            setError("Aconteceu um erro ao tentar fazer o login.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="background">
            <div className="login-container">
                <div className="login">
                    <div className="top-section">
                        <h4>
                            <img
                                src="Src/assets/logo.svg"
                                alt="logo"
                                className="logo"
                            />
                            <span className="sysshop">Sys Shop</span>
                        </h4>
                    </div>
                    <h1 className="login-titulo">Login</h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <h3>E-mail</h3>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                            required
                        />
                        <h3>Senha</h3>
                        <input
                            type="password"
                            name="senha"
                            id="senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                            required
                        />
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <button type="submit" className="login-botao" disabled={loading}>
                            {loading ? "Carregando..." : "Entrar"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
