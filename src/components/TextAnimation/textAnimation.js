import React, { useState, useEffect } from "react";
import "./TextAnimation.css"; // Make sure to import the CSS

const TextAnimation = () => {
  const words = ["UI/UX Designer.", "Full Stack Developer.", "Mobile App Developer.",]; // Add more words as needed
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Delay in milliseconds (2 seconds)

    return () => clearInterval(interval); // Clean up on component unmount
  }, [words.length]);

  return (
    <div>
      <span className="animated-text">{words[currentWordIndex]}</span>
    </div>
  );
};

export default TextAnimation;
