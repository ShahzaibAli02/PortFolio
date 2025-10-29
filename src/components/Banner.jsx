import { useEffect, useState } from "react";
import bannerBackground from "../assets/Background.png";
import bannerBackgroundMobile from "../assets/backgroundMobile.png";
import arrow from "../assets/arrow.svg";
import numbers from "../assets/numbers.svg";
import numbersVertical from "../assets/numbersVertical.svg";

function Banner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScheduleClick = () => {
    window.open("https://calendly.com/alishahzaib02/30min", "_blank");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${
          isMobile ? bannerBackgroundMobile : bannerBackground
        })`,
        backgroundSize: isMobile ? "contain" : "cover",
        backgroundPosition: isMobile ? "" : "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            lineHeight: 1.1,
            textTransform: "uppercase",
            paddingLeft: isMobile ? "20px" : "100px",
            paddingRight: isMobile ? "20px" : "100px",
            fontWeight: 400,
            fontSize: isMobile ? "36px" : "70px",
            fontFamily: "Michroma, sans-serif",
            color: "white",
            textAlign: isMobile ? "center" : "",
            // marginTop: isMobile ? "500px" : "",
          }}
        >
          <span>
            Your <span style={{ color: "#97C10C" }}>Vision</span>,
          </span>
          <span>
            My <span style={{ color: "#97C10C" }}>Mission</span>
          </span>
        </div>

        <span
          style={{
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: 400,
            width: isMobile ? "90%" : "40%",
            paddingLeft: isMobile ? "20px" : "100px",
            paddingRight: isMobile ? "20px" : "100px",
            lineHeight: 1.8,
            fontFamily: "Roboto, sans-serif",
            textAlign: isMobile ? "center" : "",
          }}
        >
          Guiding the Development Journey Together, Your Vision at the Core of
          Every Line of Code – Where Innovation Meets My Dedication to Crafting
          Seamless Digital Experiences.
        </span>

        <div
          style={{
            display: "flex",
            justifyContent: isMobile ? "center" : "",
            gap: "30px",
            paddingLeft: isMobile ? "20px" : "100px",
            paddingRight: isMobile ? "20px" : "0",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              backgroundColor: "#97C10C",
              color: "#222222",
              padding: "16px 20px",
              borderRadius: "9px",
              cursor: "pointer",
            }}
            onClick={handleScheduleClick}
          >
            <span>Schedule a Meeting</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      {/* <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <img
          src={isMobile ? numbersVertical : numbers}
          alt="numbers"
          style={{
            width: isMobile ? "30%" : "100%",
            textAlign: isMobile ? "center" : "",
          }}
        />
      </div> */}
    </div>
  );
}

export default Banner;
