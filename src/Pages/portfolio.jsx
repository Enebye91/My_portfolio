import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../Styles/Pages/portfolio.css";
import Navbar from "../Components/navbar.jsx";
import ContactSection from "../Components/contactSection.jsx";
import Footer from "../Components/footer.jsx";
import { storage } from "../Firebase.jsx";
import { ref, getDownloadURL } from "firebase/storage";

export default function Portfolio() {
  const [imageUrl, setImageUrl] = useState(null);
  const [arrowUrl, setArrowUrl] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const cases = [
    {
      project: "Design / Tech",
      description: "A friesian dressage stable",
      title: "Stald Schwartz",
      link: "/case",
    },
  ];

  useEffect(() => {
    const storageRef = ref(
      storage,
      "gs://portfolio-57711.appspot.com/MockupImage.png"
    );

    const arrowRef = ref(
      storage,
      "gs://portfolio-57711.appspot.com/right-arrow.png"
    );

    // Fetch image for the case background
    getDownloadURL(storageRef)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.error("Error fetching image", error);
      });

    // Fetch image for the arrow
    getDownloadURL(arrowRef)
      .then((url) => {
        setArrowUrl(url);
      })
      .catch((error) => {
        console.error("Error fetching arrow image", error);
      });

    // Set visibility after 200ms
    setTimeout(() => setIsVisible(true), 200);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <>
      <Navbar />
      <section className={`portfolio_intro ${isVisible ? "visible" : ""}`}>
        <article className="headline_box">
          <div className="headline_div">
            <p id="headline_case">Cases</p>
            <p id="portfolio_header">
              Selected projects
              <br />
              from concept to reality
            </p>
          </div>
        </article>
      </section>

      <section className="case_wrapper">
        <article
          className="case_container"
          style={{
            backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
          }}
        >
          {cases.map((caseItem, index) => (
            <div key={index} className="case_item">
              <p>{caseItem.project}</p>
            </div>
          ))}
          {cases.map((caseItem, index) => (
            <div key={index} className="case_company">
              <p>{caseItem.description}</p>
              <h3>{caseItem.title}</h3>
              <p>
                <Link to={caseItem.link} className="project-link">
                  View project{" "}
                  {arrowUrl && (
                    <img src={arrowUrl} alt="Arrow" className="arrow_image" />
                  )}
                </Link>
              </p>
            </div>
          ))}
        </article>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
