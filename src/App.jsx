import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import MyProjects from "./components/Projects";
import Skills from "./components/Skills";
import ProjectsPage from "./pages/ProjectsPage";
import Layout from "./components/Layout";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <Layout>
              <Banner />
              <div id="about">
                <About />
              </div>
              <div id="service">
                <Skills />
              </div>
              <div id="projects">
                <MyProjects />
              </div>
            </Layout>
          }
        />

        {/* ✅ Projects Page (will also have Navbar + Footer) */}
        <Route
          path="/projects"
          element={
            <Layout>
              <ProjectsPage />
            </Layout>
          }
        />

        {/* ✅ Project details */}
        <Route
          path="/projects/:id"
          element={
            <Layout>
              <ProjectDetailsPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
