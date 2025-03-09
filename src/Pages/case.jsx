import { useState, useEffect, useRef } from "react";
import "../Styles/Pages/case.css";
import Navbar from "../Components/navbar.jsx";
import Footer from "../Components/footer.jsx";
import AnimatedText from "../Components/caseSectionAnimation.jsx";
import ContactSection from "../Components/contactSection.jsx";
import ScrollToTopButton from "../Components/scrollUpButton.jsx";
import { storage } from "../Firebase.jsx";
import { ref, getDownloadURL } from "firebase/storage";

export default function Case() {
  const [imageUrl, setImageUrl] = useState(null);
  const [secondImageUrl, setSecondImageUrl] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const firstImageRef = ref(
          storage,
          "gs://portfolio-57711.appspot.com/FroukjeF.png"
        );
        const secondImageRef = ref(
          storage,
          "gs://portfolio-57711.appspot.com/Stald_mockup.png"
        );

        const firstImageUrl = await getDownloadURL(firstImageRef);
        setImageUrl(firstImageUrl);

        const secondImageUrl = await getDownloadURL(secondImageRef);
        setSecondImageUrl(secondImageUrl);
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    fetchImages();
  }, []);

  const asignment = [
    {
      project: "Stald Schwartz",
      description: ["UX", "Design", "Development"],
    },
  ];

  return (
    <>
      <Navbar />
      <section
        className="case_background"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
        }}
      >
        <div>
          {asignment.map((asignment, index) => (
            <div key={index} className="asignment_item">
              <p>{asignment.project}</p>
              {asignment.description.map((desc, i) => (
                <div key={i} className="description-item">
                  {desc}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <article className="Animation_wrapper">
        <div className="Animation_container">
          <div id="overview_headline">
            <p>Overview</p>
          </div>
          <AnimatedText />
        </div>
      </article>
      <article className="second_image_container">
        {secondImageUrl && (
          <img src={secondImageUrl} alt="Mockup" className="case_image" />
        )}
      </article>
      <article className="finally_text">
        <div>
          <p
            ref={textRef}
            className={isVisible ? "animated_text visible" : "animated_text"}
          >
            Stald Schwartz’s first website has successfully enhanced its digital
            presence. With a user-friendly design, clear navigation, and
            engaging content, the site highlights the stables and its offerings
            in a visually appealing way. The website now provides an intuitive
            experience, showcasing their services and horses effectively,
            setting the stage for growth and attracting potential clients.
          </p>
        </div>
      </article>
      <ContactSection />
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
