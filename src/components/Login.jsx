import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
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
            await new Promise((resolve) => setTimeout(resolve, 100)); // certifique-se de que esta URL está correta, isso aqui é um atraso aritficial, esperando por uma requisição (para o futuro do projeto que pode ter um back-end)
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
                <div className="login p-4 text-light " >
                    <div className="top-section">
                        <h4 className="d-flex align-items-center justify-content-end m-0" 
                        style={{ fontFamily: 'Montserrat, sans-serif', display: 'flex', alignItems: 'center' }}>
                            <img
                                src="Src/assets/logo.svg"
                                alt="logo"
                                className="logo mb-0 me-1"
                            />
                            <span className="sysshop mx-0 mb-2 display-4">Sys Shop</span>
                        </h4>
                    </div>
                    <h1 className="login-titulo text-center mb-4 display-5" style={{ fontFamily: 'Montserrat, sans-serif'}}>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-2 text-start">
                            <label htmlFor="email" className="form-label d-flex flex-column" >E-mail</label>
                            <div className="d-flex">
                                <div className="col-8">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Digite seu e-mail"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 text-start">
                            <label htmlFor="senha" className="form-label d-flex flex-column">Senha</label>
                            <div className="d-flex">
                                <div className="col-8">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg mb-4"
                                        name="senha"
                                        id="senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Digite sua senha"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        {error && <div className="text-danger mb-2 text-center">{error}</div>}
                        <button 
                        type="submit" 
                        className="btn btn-primary w-75 p-2 rounded-4" 
                        disabled={loading} 
                        style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.2rem', marginLeft: '12%', backgroundColor: '#8c3f83', border: 'none'}}>
                            {loading ? "Carregando..." : "Entrar"}
                        </button>
                    </form>


                </div>
            </div>
        </div>
    );
}

export default Login;
