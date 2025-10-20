import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import appStoreImage from "../assets/app-store.svg";
import playStoreImage from "../assets/play-store.svg";

export default function ProjectDetailsPage() {
  const { id } = useParams();
  const [project, setProject] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  const images = project?.images || [];
  const totalImages = images?.length;

  const handleImageClick = (image) => {
    setModalImages([image]);
    setActiveImage(image);
    setModalOpen(true);
  };

  const handleViewAllClick = () => {
    setModalImages(images);
    setActiveImage(null);
    setModalOpen(true);
  };

  const fetchProject = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACK_END_URL}/api/projects/${id}`
    );
    const data = await res.json();
    setProject(data);
  };

  useEffect(() => {
    fetchProject();
  }, []);

  if (!project)
    return (
      <p style={{ color: "white", padding: "40px" }}>Project not found.</p>
    );

  return (
    <div
      style={{
        padding: "clamp(20px, 5vw, 80px)",
        color: "white",
        fontFamily: "Michroma, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top section */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 300px", minWidth: "280px" }}>
          <p
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              marginBottom: "16px",
              fontWeight: "600",
              color: "#97C10C",
            }}
          >
            {project.type}
          </p>
          <h1
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              marginBottom: "16px",
              fontWeight: "400",
            }}
          >
            {project.title}
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.6 }}>
            {project.description}
          </p>
        </div>

        {/* Image section */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "8px",
            alignItems: "flex-start",
          }}
        >
          <img
            src={import.meta.env.VITE_BACK_END_URL + project.images[0]}
            alt={project.title}
            style={{
              width: "300px",
              maxWidth: "90vw",
              objectFit: "contain",
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(project.images[0])}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
            {images.slice(0, 4).map((image, index) => {
              const imageUrl = import.meta.env.VITE_BACK_END_URL + image;
              if (index === 0) return null;
              if (index === 3 && totalImages > 4) {
                return (
                  <div
                    key={index}
                    style={{
                      width: "100px",
                      height: "53px",
                      backgroundImage: `url(${imageUrl})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    onClick={handleViewAllClick}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      +{totalImages - 4}
                    </div>
                  </div>
                );
              }
              return (
                <img
                  key={index}
                  src={imageUrl}
                  style={{
                    width: "100px",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                  onClick={() => handleImageClick(image)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ marginTop: "30px" }}>
        <p
          style={{
            fontSize: "clamp(20px, 2.5vw, 28px)",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          Key Features:
        </p>
        <ul
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "16px",
            fontWeight: "400",
            paddingLeft: "20px",
          }}
        >
          {project?.keyFeatures?.map((keyFeature, index) => (
            <li key={index} style={{ padding: "5px 0px" }}>
              {keyFeature?.feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Store links */}
      {(project?.appStoreLink || project?.playStoreLink) && (
        <div style={{ marginTop: "30px" }}>
          <p
            style={{
              fontFamily: "Roboto, sans-serif",
              color: "#97C10C",
              fontWeight: "600",
              fontSize: "16px",
              marginBottom: "6px",
            }}
          >
            LINK:
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {project?.playStoreLink && (
              <a
                href={project.playStoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={playStoreImage}
                  style={{ cursor: "pointer", height: "40px" }}
                />
              </a>
            )}
            {project?.appStoreLink && (
              <a
                href={project.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={appStoreImage}
                  style={{ cursor: "pointer", height: "40px" }}
                />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "20px",
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              maxWidth: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              justifyContent: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {modalImages.map((image, index) => (
              <img
                key={index}
                src={import.meta.env.VITE_BACK_END_URL + image}
                style={{
                  maxWidth: "300px",
                  maxHeight: "300px",
                  objectFit: "contain",
                  border: "2px solid white",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
