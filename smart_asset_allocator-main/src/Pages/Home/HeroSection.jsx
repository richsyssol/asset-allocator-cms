import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [heroContent, setHeroContent] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroItems = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/hero-items");
        setHeroContent(response?.data ?? []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching hero items:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchHeroItems();
  }, []);

  useEffect(() => {
    if (heroContent.length === 0) return;
    
    const interval = setInterval(() => {
      nextImage();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, heroContent]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  if (loading) {
    return (
      <div className="w-full h-[550px] md:h-[650px] flex items-center justify-center">
        <div className="text-center py-8 text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error || heroContent.length === 0) {
    return (
      <div className="w-full h-[550px] md:h-[650px] flex items-center justify-center bg-gray-100">
        <div className="text-center text-gray-600">
          <p>Content unavailable</p>
        </div>
      </div>
    );
  }

  const currentItem = heroContent[currentIndex];

  return (
    <div className="relative shadow-2xl w-full h-[550px] md:h-[650px] flex items-center justify-center text-white overflow-hidden mt-20">
      {/* Background Image */}
      <motion.div
        key={currentItem.image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/50"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_PUBLIC_IMAGE_PATH}/${currentItem.image})`,
        }}
      >
        {/* Hidden image for preloading and error handling */}
        <img 
          src={currentItem.image} 
          alt="" 
          className="hidden"
          onError={() => {
            console.error('Failed to load hero image:', currentItem.image);
          }}
        />
      </motion.div>

      {/* Navigation Arrows */}
      {heroContent.length > 1 && (
        <>
          <button 
            onClick={prevImage} 
            className="absolute left-10 md:left-20 z-20 p-2 bg-black/30 rounded-full hover:bg-black/50 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <button 
            onClick={nextImage} 
            className="absolute right-10 md:right-20 z-20 p-2 bg-black/30 rounded-full hover:bg-black/50 transition"
            aria-label="Next slide"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </>
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
        key={`content-${currentIndex}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {currentItem.title}
        </motion.h1>
        <motion.p
          className="mt-4 md:mt-6 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {currentItem.description}
        </motion.p>
        <motion.div
          className="mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 py-3 px-8 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition duration-300">
            Book Your Consultation Today!
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;