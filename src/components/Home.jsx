import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home.css";

function Home() {
    const [input, setInput] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleInput = () => {
        setInput(!input);
    };

    return (
      <>
        <nav
          className="navbar navbar-expand-lg position-relative"
          style={{ backgroundColor: "rgb(20, 20, 20)" }}
        >
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
              {!isMobile && (
                <>
                  <a
                    className="nav-link p-0 mx-2"
                    href="home"
                    style={{ color: "white", fontSize: "1.2rem" }}
                  >
                    Início
                  </a>
                  <a
                    className="nav-link p-0 mx-2"
                    href="#"
                    style={{ color: "white", fontSize: "1.2rem" }}
                  >
                    Sobre
                  </a>
                </>
              )}

              {isMobile ? (
                <button className="nav-link p-0 mx-2" onClick={handleInput}>
                  <img
                    src="Src/assets/search.svg"
                    alt="Search Icon"
                    style={{ color: "white", fontSize: "1.2rem" }}
                  />
                </button>
              ) : (
                <button
                  className="nav-link p-0 mx-2"
                  onClick={handleInput}
                  style={{ color: "white", fontSize: "1.2rem" }}
                >
                  Pesquisar
                </button>
              )}
            </div>

            <div className="d-flex align-items-center ms-auto">
              <a className="nav-link p-0 cart-icon" href="#">
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

          {input && (
            <div className="d-flex justify-content-center my-3 inputSearch mx-auto">
              <input
                type="text"
                placeholder="Digite para pesquisar..."
                style={{
                  width: "350px",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  outline: "none",
                }}
              />
            </div>
          )}
        </nav>
      </>
    );
}

export default Home;
