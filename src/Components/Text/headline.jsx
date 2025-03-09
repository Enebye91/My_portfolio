import { useState, useEffect, useRef } from "react";

export default function Headline() {
  const [isVisible, setIsVisible] = useState(false);
  const headlineRef = useRef(null);

  useEffect(() => {
    const element = headlineRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return (
    <h1 ref={headlineRef} className={`headline ${isVisible ? "visible" : ""}`}>
      Building digital products and
      <br />
      experience
    </h1>
  );
}
