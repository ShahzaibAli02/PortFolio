import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import whatsapp from "../assets/whatsapp.svg";
import Menu from "../assets/menu.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTab, setIsTab] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsTab(window.innerWidth < 1024);
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: "transparent",
        width: "100%",
        paddingTop: "20px",
        paddingBottom: "20px",
        position: "relative",
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          // paddingLeft: isMobile ? "16px" : "100px",
          // paddingRight: isMobile ? "16px" : "100px",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          style={{
            display: isMobile ? "block" : "none",
            background: "none",
            paddingLeft: "16px",
            border: "none",
          }}
        >
          {menuOpen ? (
            <span
              style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
            >
              X
            </span>
          ) : (
            <img
              src={Menu}
              alt="menu"
              style={{ height: "24px", width: "24px" }}
            />
          )}
        </button>

        {/* Logo */}
        <div
          style={{
            textAlign: isMobile ? "center" : "left",
            paddingLeft: isMobile ? "16px" : "100px",
          }}
        >
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "15px",
                width: "228px",
                margin: isMobile ? "0 auto" : "0",
                display: "block",
              }}
            />
          </a>
        </div>

        {/* Navigation Items */}
        <div
          style={{
            display: isMobile ? "none" : "flex",
            gap: "50px",
            fontSize: "16px",
            fontWeight: 400,
            fontFamily: "Sora, sans-serif",
            alignItems: "center",
            marginLeft: "50px",
          }}
        >
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>
            About
          </a>
          <a href="#service" style={{ color: "white", textDecoration: "none" }}>
            Service
          </a>
          <a
            href="#projects"
            style={{ color: "white", textDecoration: "none" }}
          >
            Projects
          </a>
        </div>

        {/* WhatsApp Me Button */}
        <a
          href="https://web.whatsapp.com/send?phone=923051506242"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: isMobile ? "none" : "flex",
            gap: "7px",
            alignItems: "center",
            color: "white",
            fontWeight: 600,
            fontSize: "16px",
            border: "1px solid #97C10C",
            padding: "12px 20px 12px 20px",
            borderRadius: "9px",
            marginRight: isMobile ? "16px" : "100px",
            textDecoration: "none", // ✅ remove default underline
          }}
        >
          <span>WhatsApp Me</span>
          <img
            src={whatsapp}
            alt="WhatsApp"
            style={{ height: "24px", width: "24px" }}
          />
        </a>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && isMobile && (
        <div
          style={{
            position: "absolute",
            top: "70px",
            left: 0,
            width: "93%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            padding: "24px 16px",
            borderBottomLeftRadius: "12px",
            borderBottomRightRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              textAlign: "center",
              fontSize: "16px",
              fontFamily: "Sora, sans-serif",
              fontWeight: 400,
              color: "white",
            }}
          >
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </a>
            <a
              href="#service"
              onClick={() => setMenuOpen(false)}
              style={{ color: "white", textDecoration: "none" }}
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              style={{ color: "white", textDecoration: "none" }}
            >
              Projects
            </a>
          </div>
          <a
            href="https://wa.me/923051506242"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "7px",
              color: "white",
              fontWeight: 600,
              fontSize: "16px",
              border: "1px solid #97C10C",
              padding: "12px 20px",
              borderRadius: "9px",
              textDecoration: "none",
            }}
          >
            <span>WhatsApp Me</span>
            <img
              src={whatsapp}
              alt="WhatsApp"
              style={{ height: "24px", width: "24px" }}
            />{" "}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
