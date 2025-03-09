import "../Styles/Sections/contactSection.css";
import { useState, useEffect } from "react";
import { storage } from "../Firebase.jsx";
import { ref, getDownloadURL } from "firebase/storage";

export default function ContactSection() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const imageRef = ref(
      storage,
      "gs://portfolio-57711.appspot.com/icons8-shaking-hands-100.png"
    );

    getDownloadURL(imageRef)
      .then((url) => {
        setImage(url);
      })
      .catch((error) => {
        console.error("Error fetching first image", error);
      });
  }, []);

  return (
    <section className="contact_wrapper">
      <article className="contact_container">
        <article className="portraet_contain">
          {image && <img src={image} alt="Handshake" className="" />}
        </article>
      </article>
      <aside className="text_wrapper">
        <div className="text_container">
          <p>Lets work </p>
          <p>Together</p>
        </div>
        <div className="contact_box">
          <button className="contact">
            <a href="mailto:michellevel91@gmail.com">michellevel91@gmail.com</a>
          </button>
          <button className="contact">
            <a href="tel:+4520617459">+45 20 61 74 59</a>
          </button>
        </div>
      </aside>
    </section>
  );
}
