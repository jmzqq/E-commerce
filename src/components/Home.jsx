import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home.css";

function Home() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(20, 20, 20)" }}>
                <div className="container-fluid d-flex align-items-center">
                    <a className="navbar-brand" href="home">
                        <img
                            src="Src/assets/logo.svg"
                            alt="Logo Sys Shop"
                            className="logo-home"
                            style={{ width: "60px", height: "auto" }}
                        />
                    </a>

                    <div className="d-flex align-items-center mx-1">
                        <a className="nav-link p-0 mx-2" href="home" style={{ color: "white", fontSize: "1.2rem" }}>
                            Início
                        </a>
                        <a className="nav-link p-0 mx-2" href="#" style={{ color: "white", fontSize: "1.2rem" }}>
                            Sobre
                        </a>
                    </div>

                    <div className="d-flex align-items-center ms-auto">
                        <a className="nav-link p-0 mx-1 cart-icon" href="#">
                            <img
                                src="Src/assets/cart.svg"
                                alt="Cart Icon"
                                className="icon"
                                style={{ width: "40px", height: "auto", margin: "0 0 8px 0" }}
                            />
                        </a>
                        <a className="nav-link p-0 mx-1" href="#">
                            <img
                                src="Src/assets/pfp.svg"
                                alt="Account Icon"
                                className="icon"
                                style={{ width: "40px", height: "auto" }}
                            />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Home;
