import { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery"; // WAJIB ADA

function App() {
  const [page, setPage] = useState("home");

  // Data gambar
  const bliImages = [
    "/images/bli/1.jpeg",
    "/images/bli/2.jpeg",
    "/images/bli/3.jpeg",
    "/images/bli/4.jpeg",
    "/images/bli/5.jpeg",
    "/images/bli/6.jpeg",
    "/images/bli/7.jpeg",
    "/images/bli/8.jpeg",
    "/images/bli/9.jpeg",
    "/images/bli/10.jpeg",
    "/images/bli/11.jpeg",
    "/images/bli/12.jpeg",
    "/images/bli/13.jpeg",
  ];

  const bandungImages = [
    "/images/bandung/braga.jpg",
    "/images/bandung/1.jpeg",
    "/images/bandung/2.jpeg",
    "/images/bandung/3.jpeg",
    "/images/bandung/4.jpeg",
    "/images/bandung/5.jpeg",
    "/images/bandung/6.jpeg",
    "/images/bandung/7.jpeg",
    "/images/bandung/8.jpeg",
    "/images/bandung/9.jpeg",
    "/images/bandung/10.jpeg",
    "/images/bandung/11.jpeg",
    "/images/bandung/12.jpeg",
    "/images/bandung/13.jpeg",
    "/images/bandung/15.jpeg",
    "/images/bandung/tjilaki9.jpeg",
  ];

  const randomImages = [
    "/images/random/1.jpeg",
    "/images/random/2.jpeg",
    "/images/random/3.jpeg",
    "/images/random/4.jpeg",
    "/images/random/5.jpeg",
    "/images/random/6.jpeg",
    "/images/random/7.jpeg",
    "/images/random/8.jpeg",
    "/images/random/9.jpeg",
    "/images/random/10.jpeg",
    "/images/random/11.jpeg",
    "/images/random/12.jpeg",
    "/images/random/14.jpeg",
    "/images/random/15.jpeg",
    "/images/random/16.jpeg",
    "/images/random/17.jpeg",
    "/images/random/18.jpeg",
    "/images/random/19.jpeg",
    "/images/random/20.jpeg",
    "/images/random/21.jpeg",
    "/images/random/22.jpeg",
    "/images/random/23.jpeg",
    "/images/random/24.jpeg",
    "/images/random/25.jpeg",
    "/images/random/26.jpeg",
    "/images/random/27.jpeg",
  ];

  // Render isi halaman
  const renderContent = () => {
    if (page === "home") {
      if (page === "home") {
        return (
          <div className="home">
            <h1>
              Welcome to Our Gallery <span className="love">🤍</span>
            </h1>

            <p>
              Ini tempat kami menyimpan potongan-potongan cerita kecil kami —
              Ayrin, Felis, Anya, dan Kay.
            </p>

            <p>
              Bukan hanya sekedar foto, tapi momen yang pernah kami lewati. Ada yang
              sederhana, ada yang tiba-tiba terasa berarti.
            </p>

            <p>
              Dari sudut kota yang sepi, tawa yang tidak direncanakan, hingga
              hal-hal kecil yang mungkin terlihat biasa.
            </p>

            <p>
              Semua yang ada di sini adalah bagian dari perjalanan kami — tidak
              selalu sempurna, tapi jujur dan apa adanya.
            </p>

          </div>
        );
      }
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
        <span className="link" onClick={() => setPage("home")}>
          Home
        </span>
        <span className="link" onClick={() => setPage("bli")}>
          Bli
        </span>
        <span className="link" onClick={() => setPage("bandung")}>
          Bandung
        </span>
        <span className="link" onClick={() => setPage("random")}>
          Random Pict
        </span>
      </nav>

      {/* Content */}
      <div className="content">{renderContent()}</div>
    </>
  );
}

export default App;
