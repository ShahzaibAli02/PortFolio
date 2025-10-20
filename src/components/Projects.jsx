import { useEffect, useState } from "react";
import arrow from "../assets/arrow-green.svg";
import ProjectCard from "./ProjectCard";
import { useNavigate } from "react-router-dom";
import { allProjects } from "../utils/projectsData";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const fetchProjects = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_BACK_END_URL}/api/projects?page=1&limit=5`
    );
    const data = await res.json();
    setProjects(data?.projects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        padding: isMobile ? "40px 20px" : "100px",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <div
        style={{
          display: isMobile ? "block" : "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "Michroma, sans-serif",
            fontWeight: 400,
            fontSize: isMobile ? "36px" : "50px",
            color: "#97C10C",
            marginBottom: isMobile ? "20px" : "0",
          }}
        >
          My Projects
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: isMobile ? "flex-start" : "flex-end",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>
            Check out more portfolio i’ve worked on
          </span>
          <span
            style={{
              cursor: "pointer",
              color: "#97C10C",
              border: "0.5px solid #97C10C",
              width: "128px",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "3px",
              fontSize: "14px",
            }}
            onClick={() => navigate("/projects")}
          >
            View All <img src={arrow} />
          </span>
        </div>
      </div>

      {/* <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {allProjects.slice(0, 4).map((project, index) => (
          <div
            key={project.id}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <ProjectCard {...project} isMobile={isMobile} />
            {index !== allProjects.length - 1 && (
              <hr style={{ width: "100%", borderColor: "#ffffff20" }} />
            )}
          </div>
        ))}
      </div> */}
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {projects?.map((project, index) => (
          <div
            key={project.id}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <ProjectCard {...project} isMobile={isMobile} />
            {index !== allProjects.length - 1 && (
              <hr style={{ width: "100%", borderColor: "#ffffff20" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
