import { useState } from "react";
import "./Gallery.css";

function Gallery({ images }) {
    const [selected, setSelected] = useState(null);

    return (
        <div>
            {/* Grid */}
            <div className="grid">
                {images.map((img, index) => (
                    <img key={index} src={img} alt="" onClick={() => setSelected(img)} />
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div className="modal" onClick={() => setSelected(null)}>
                    <img src={selected} alt="" />
                </div>
            )}
        </div>
    );
}

export default Gallery;
