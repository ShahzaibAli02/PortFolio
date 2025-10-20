import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_BACK_END_URL
          }/api/projects?page=${page}&limit=5`
        );
        const data = await res.json();
        if (!cancelled) {
          setProjects((prev) => [...prev, ...data.projects]);
          setHasMore(data.hasMore);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Error fetching projects:", error);
        }
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [page]);

  const loadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div
      style={{
        padding: "60px 60px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        fontFamily: "Michroma",
      }}
    >
      <h1
        style={{
          color: "#97C10C",
          fontSize: isMobile ? "24px" : "40px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        My Projects
      </h1>

      {projects.map((project, index) => (
        <div
          key={index}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <ProjectCard {...project} isMobile={isMobile} />
          <hr style={{ width: "100%", borderColor: "#ffffff20" }} />
        </div>
      ))}

      {hasMore && (
        <button
          onClick={loadMore}
          style={{
            margin: "20px auto",
            padding: "12px 20px",
            background: "transparent",
            color: "#97C10C",
            border: "1px solid #97C10C",
            borderRadius: "53px",
            cursor: "pointer",
          }}
        >
          View More
        </button>
      )}
    </div>
  );
}
