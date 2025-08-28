import { useParams, useNavigate } from "react-router-dom";
import dronePhoto from "@/assets/drone-photography.jpg";

const videos = {
  3: dronePhoto,
  6: dronePhoto,
};

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const video = videos[id];

  return (
    <div className="min-h-screen py-10 px-4">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 border rounded">Back</button>
      <h1 className="text-3xl font-bold mb-6">Video</h1>
      <div className="max-w-4xl mx-auto aspect-video bg-black rounded overflow-hidden">
        {video ? (
          <video src={video} controls className="w-full h-full object-cover" />
        ) : (
          <p className="text-center text-white mt-20">Video not found</p>
        )}
      </div>
    </div>
  );
};

export default VideoPage;
