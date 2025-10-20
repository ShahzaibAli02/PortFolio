import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="w-full">
      {/* ✅ Always show Navbar */}
      <Navbar />

      {/* ✅ Page Content */}
      <div style={{ minHeight: "80vh" }}>{children}</div>

      {/* ✅ Always show Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
