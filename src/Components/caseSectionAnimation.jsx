import { useState, useEffect } from "react";
import "../Styles/Sections/Animation.css";

const AnimatedText = ({ text, isVisible, id }) => (
  <div id={id} className={`line ${isVisible ? "visible" : ""}`}>
    {text}
  </div>
);

const TextContainer = () => {
  const lines = [
    "Design and development of a user-friendly website for Stald Schwartz, with a focus on UX aesthetics, and functionality. The project includes a responsive web platform that showcases the stable, its services, and horses in a visually appealing way.",
    "",
    "",
  ];

  const boxTexts = [
    " A Modern and Intuitive Digital Experience",
    " Bringing the Stable’s Story and Services to Life",
    " Seamlessly Designed for All Devices",
  ];

  const [visibleLines, setVisibleLines] = useState(
    Array(lines.length).fill(false)
  );
  const [visibleBoxes, setVisibleBoxes] = useState(
    Array(boxTexts.length).fill(false)
  );

  const handleScroll = () => {
    const updatedVisibleLines = lines.map((_, index) => {
      const element = document.getElementById(`line-${index}`);
      if (element) {
        const { top } = element.getBoundingClientRect();
        return top < window.innerHeight && top > 0;
      }
      return false;
    });

    const updatedVisibleBoxes = boxTexts.map((_, index) => {
      const element = document.getElementById(`box-${index}`);
      if (element) {
        const { top } = element.getBoundingClientRect();
        return top < window.innerHeight && top > 0;
      }
      return false;
    });

    setVisibleLines(updatedVisibleLines);
    setVisibleBoxes(updatedVisibleBoxes);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="text-container">
      {lines.map((line, index) => (
        <AnimatedText
          key={index}
          text={line}
          isVisible={visibleLines[index]}
          id={`line-${index}`}
        />
      ))}

      <div className="box-wrapper">
        {boxTexts.map((text, i) => (
          <div
            key={i}
            id={`box-${i}`}
            className={`animatedBox ${visibleBoxes[i] ? "visible" : ""}`}
          >
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TextContainer;
