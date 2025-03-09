import { useNavigate } from "react-router-dom";
import Header from "../Components/header.jsx";
import { useState, useEffect } from "react";
import "../Styles/landingPage.css";
import Navbar from "../Components/navbar.jsx";
import Headline from "../Components/Text/headline.jsx";
import Capabilities from "../Components/capabilities.jsx";
import ContactSection from "../Components/contactSection.jsx";
import Footer from "../Components/footer.jsx";
import { storage } from "../Firebase.jsx";
import { ref, getDownloadURL } from "firebase/storage";

export default function Landing() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(
      storage,
      "gs://portfolio-57711.appspot.com/portraet.jpg"
    );

    getDownloadURL(storageRef)
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.error("Error fetching image", error);
      });
  }, []);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Portfolio");
  };

  return (
    <>
      <Header />
      <Navbar />
      <section className="Hero_wrapper">
        <section className="Hero_container">
          <div className="image_container">
            {imageUrl && (
              <img src={imageUrl} alt="Michelle VEL" className="work_image" />
            )}
          </div>
          <span>
            <Headline />
          </span>

          <button id="view_btn" onClick={handleButtonClick}>
            View
          </button>
        </section>

        <Capabilities />
      </section>

      <section className="Kontakt_wrapper">
        <ContactSection />
      </section>

      <Footer />
    </>
  );
}
