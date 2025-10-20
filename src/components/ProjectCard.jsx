import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import externalLink from "../assets/external-link.svg";

const ProjectCard = ({
  _id,
  type,
  title,
  description,
  keyFeatures,
  keyFeatureDescription,
  appStoreLink,
  playStoreLink,
  images,
  isMobile,
}) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile ? "center" : "space-between",
        alignItems: "center",
        borderRadius: "12px",
        marginBottom: "20px",
        gap: isMobile ? "20px" : "40px",
        fontFamily: "Michroma, sans-serif",
      }}
    >
      <img
        src={`${import.meta.env.VITE_BACK_END_URL}${images[0]}`}
        alt={title}
        style={{
          width: isMobile ? "100%" : "48%",
          borderRadius: "12px",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "white",
          width: isMobile ? "100%" : "42%",
          gap: "10px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#97C10C",
              marginBottom: "8px",
              textAlign: isMobile ? "center" : "start",
            }}
          >
            {type}
          </p>
          <h3
            style={{
              fontSize: "28px",
              fontWeight: 400,
              marginBottom: "12px",
              textAlign: isMobile ? "center" : "start",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              textAlign: isMobile ? "center" : "start",
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: isMobile ? "center" : "start",
          }}
        >
          {appStoreLink && (
            <a
              href={appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <button
                style={{
                  border: "1px solid #97C10C",
                  background: "transparent",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  padding: "16px 20px",
                  borderRadius: "3px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                App Store <img src={externalLink} />
              </button>
            </a>
          )}
          {playStoreLink && (
            <a
              href={playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <button
                style={{
                  border: "1px solid #97C10C",
                  background: "transparent",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  padding: "16px 20px",
                  borderRadius: "3px",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                Play Store <img src={externalLink} />
              </button>
            </a>
          )}
        </div>
      </div>

      <div
        style={{
          borderRadius: "50%",
          backgroundColor: "#97C10C",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "18px",
          cursor: "pointer",
        }}
        onClick={() => navigate(`/projects/${_id}`)}
      >
        <img src={arrow} />
      </div>
    </div>
  );
};

export default ProjectCard;
