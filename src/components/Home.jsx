import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home.css";

function Home() {
  const [input, setInput] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [ratings, setRatings] = useState({});

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

  const [isHoveredInicio, setIsHoveredInicio] = useState(false);

  const [isHoveredPesquisar, setIsHoveredPesquisar] = useState(false);

  return (
    <div className="home-container d-flex flex-column min-vh-100">
      <nav
        className="navbar navbar-expand-lg position-relative"
        style={{
          backgroundColor: "rgb(20, 20, 20)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
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
              <a
                className="nav-link p-0 mx-2"
                href="home"
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  transform: isHoveredInicio ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={() => setIsHoveredInicio(true)}
                onMouseLeave={() => setIsHoveredInicio(false)}
              >
                Início
              </a>
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
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  transform: isHoveredPesquisar ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={() => setIsHoveredPesquisar(true)}
                onMouseLeave={() => setIsHoveredPesquisar(false)}
              >
                Pesquisar
              </button>
            )}
          </div>

          <div className="d-flex align-items-center ms-auto">
            <a className="nav-link pt-2 cart-icon" href="#">
              <img
                src="Src/assets/cart.svg"
                alt="Cart Icon"
                className="icon"
                style={{ width: "40px", height: "auto", margin: "0 0 8px 0" }}
              />
            </a>
            <a className="nav-link pt-2 mx-1" href="#">
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
          <div className="d-flex justify-content-center inputSearch mx-auto">
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

      <div className="container my-5">
        <img
          src="Src/assets/banner.jpg"
          alt="banner"
          className="img-fluid rounded-4 mb-4"
        />
        <h2
          className="title-1 text-center mb-4 mt-4"
          style={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          PRODUTOS EM PROMOÇÃO
        </h2>
        <div className="row">
          {[
            {
              src: "Src/assets/product-1.jpg",
              title: "ATTACK-SHARK Mouse x6",
              price: "R$ 99,99",
            },
            {
              src: "Src/assets/product-3.png",
              title: "Delux M500 Pro Mouse",
              price: "R$ 99,99",
            },
            {
              src: "Src/assets/product-2.jpg",
              title: "Ajazz AK820 Pro 75%",
              price: "R$ 99,99",
            },
            {
              src: "Src/assets/product-4.png",
              title: "KZ EDX Pro",
              price: "R$ 99,99",
            },
            {
              src: "Src/assets/product-5.png",
              title: "Mousepad Gamer Redragon Flick",
              price: "R$ 99,99",
            },
            {
              src: "Src/assets/product-6.png",
              title: "Gaming Headset com Microfone",
              price: "R$ 99,99",
            },
            {
              src: "Src/assets/product-7.png",
              title: "Mousepad Gamer Fallen Festa Candy Speed++",
              price: "R$ 99,99",
            },
            {
              src: "Src/assets/product-8.png",
              title: "Pato recarregável LED",
              price: "R$ 99,99",
            },
          ].map((product, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="card product-card h-100">
                <img
                  src={product.src}
                  className="card-img-top img-fluid rounded-4"
                  alt={product.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    <strong>{product.price}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          src="Src/assets/banner-2.jpg"
          alt="banner-2"
          className="img-fluid rounded-4 img-zoom img-bordered mb-4"
        />
      </div>

      <footer
        className="text-center text-white py-4"
        style={{ backgroundColor: "rgb(20, 20, 20)" }}
      >
        <div className="container">
          <p>© 2024 Sys Shop. Todos os direitos reservados.</p>
          <p>
            <a href="#" className="text-white mx-2">
              Política de Privacidade
            </a>{" "}
            |{" "}
            <a href="#" className="text-white mx-2">
              Termos de Uso
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
