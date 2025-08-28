import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Camera } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [portfolioItems, setPortfolioItems] = useState([]);
  const navigate = useNavigate();
  const categories = ["Wedding", "Pre-Wedding", "Events", "Drone"];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  // Fetch portfolio from backend
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/upload");
        const data = await res.json();
        setPortfolioItems(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPortfolio();
  }, []);

  // Detect scroll to bottom for showing upload button
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      setShowButton(scrollTop + windowHeight >= docHeight - 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChooseFile = () => fileInputRef.current.click();
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", selectedCategory);

    try {
      setUploading(true);
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      setUploading(false);

      if (res.ok || res.status === 201) {
        setPortfolioItems([data, ...portfolioItems]);
        setFile(null);
        alert("File uploaded successfully!");
      } else {
        alert(data.message || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      setUploading(false);
      alert("Something went wrong");
    }
  };

  const filteredItems = activeFilter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen py-20 relative">
      <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />

      {/* Hero Section */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gold">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our collection of beautiful moments, stunning cinematography, and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 bg-background flex flex-wrap justify-center gap-4">
        {["All", ...categories].map(filter => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            onClick={() => setActiveFilter(filter)}
            className={activeFilter === filter
              ? "bg-gradient-gold text-primary-foreground shadow-gold"
              : "border-gold text-gold hover:bg-gold hover:text-primary-foreground"
            }
          >
            {filter}
          </Button>
        ))}
      </section>

      {/* Portfolio Grid */}
      <section className="pb-32 bg-dark-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4">
        {filteredItems.map(item => (
          <Card key={item._id}>
            <div className="relative">
              <img src={`http://localhost:5000${item.image}`} alt={item.title} className="w-full h-64 object-cover" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-gold text-primary-foreground">{item.category}</Badge>
              </div>
            </div>
            <CardContent>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Bottom Upload Button */}
      {showButton && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 items-center bg-background/90 p-3 rounded shadow-lg z-50">
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="border border-gold text-gold rounded px-2 py-1 text-sm"
          >
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>

          <Button
            size="sm"
            className="bg-gradient-gold text-primary-foreground"
            onClick={file ? handleUpload : handleChooseFile}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : file ? `Upload: ${file.name}` : "Choose File"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
