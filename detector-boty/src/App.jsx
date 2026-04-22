import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery' // WAJIB ADA

function App() {
  const [page, setPage] = useState("home");

  // Data gambar
  const bliImages = [
    "/images/bli/1.jpeg",
    "/images/bli/2.jpeg",
    "/images/bli/3.jpeg",
    "/images/bli/4.jpeg",
  ];

  const bandungImages = [
    "/images/bandung/braga.jpg",
    "/images/bandung/1.jpeg",
    "/images/bandung/2.jpeg",
    "/images/bandung/3.jpeg",
    "/images/bandung/5.jpeg",
    "/images/bandung/tjilaki9.jpeg",
  ];

  const randomImages = [
    "/images/bandung/braga.jpg",
    "/images/bandung/1.jpeg",
    "/images/bandung/2.jpeg",
    "/images/bandung/3.jpeg",
    "/images/bandung/5.jpeg",
    "/images/bandung/tjilaki9.jpeg",
  ];

  // Render isi halaman
  const renderContent = () => {
    if (page === "home") {
      return (
        <div>
          <h1>Haiii 👋</h1>
          <p>
            Ini adalah dokumentasi kecil kami berempat — Ayrin, Anya, Kay, dan
            Felis.
          </p>
          <p>
            Tempat ini berisi cerita, momen, dan hal random yang kami simpan
            sebagai kenangan.
          </p>
        </div>
      );
    }

    if (page === "bli") {
      return <Gallery images={bliImages} />;
    }

    if (page === "bandung") {
      return <Gallery images={bandungImages} />;
    }

    if (page === "random") {
      return <Gallery images={randomImages} />;
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <span className="link" onClick={() => setPage("home")}>Home</span>
        <span className="link" onClick={() => setPage("bli")}>Bli</span>
        <span className="link" onClick={() => setPage("bandung")}>Bandung</span>
        <span className="link" onClick={() => setPage("random")}>Random Pict</span>
      </nav>

      {/* Content */}
      <div className="content">{renderContent()}</div>
    </>
  );
}

export default App;