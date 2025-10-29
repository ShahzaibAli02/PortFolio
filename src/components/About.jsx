import { useEffect, useState } from "react";
import about from "../assets/about.svg";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: "50px",
        alignItems: "center",
        padding: isMobile ? "100px 20px" : "300px 100px 200px 100px",
        marginTop: isMobile ? "500px" : "",
      }}
    >
      <img
        src={about}
        alt="About"
        style={{
          width: isMobile ? "100%" : "auto",
          height: "auto",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            color: "#97C10C",
            textTransform: "uppercase",
          }}
        >
          About me
        </span>

        <span
          style={{
            fontFamily: "Michroma, sans-serif",
            fontWeight: 400,
            fontSize: isMobile ? "32px" : "50px",
            color: "white",
            lineHeight: 1.2,
            width: isMobile ? "100%" : "60%",
            margin: isMobile ? "0 auto" : "0",
          }}
        >
          A Passionate Mobile App{" "}
          <span style={{ color: "#97C10C" }}>Developer</span>
        </span>

        <span
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            color: "white",
            lineHeight: 1.8,
            width: isMobile ? "100%" : "88%",
            margin: isMobile ? "0 auto" : "0",
          }}
        >
          Hey there! I’m Shahzaib Ali, experienced Mobile App Developer with 4+ years in Android (Kotlin, Java , Compose , KMP) and 2+ years in iOS (Swift, SwiftUI).
Skilled in MVVM architecture, RESTful APIs, Firebase, and cross-platform development. Strong problem-solving abilities with a
focus on clean code, scalability, and performance.
        </span>
      </div>
    </div>
  );
};

export default About;
