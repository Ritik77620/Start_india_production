import { useParams, useNavigate } from "react-router-dom";
import heroWedding from "@/assets/hero-wedding.jpg";
import weddingVenue from "@/assets/wedding-venue.jpg";

const galleries = {
  1: [heroWedding, weddingVenue],
  2: [weddingVenue, heroWedding],
  4: [heroWedding],
  5: [weddingVenue],
};

const GalleryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const images = galleries[id] || [];

  return (
    <div className="min-h-screen py-10 px-4">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 border rounded">Back</button>
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`Gallery ${i}`} className="w-full h-64 object-cover rounded shadow" />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
