import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { storage } from "../Firebase.jsx";
import { ref, getDownloadURL } from "firebase/storage";

export default function Header() {
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
  return (
    <>
      <Helmet>
        <title>Michelle V. Johansen </title>
        <meta name="author" content="Michelle V. Johansen" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        {imageUrl && <link rel="icon" href={imageUrl} type="image/x-icon" />}
        <link rel="icon" href={imageUrl} sizes="16x16" />
        <link rel="icon" href={imageUrl} sizes="32x32" />
        <link rel="icon" href={imageUrl} sizes="48x48" />
        <link rel="icon" href={imageUrl} sizes="64x64" />
        <link rel="apple-touch-icon" href={imageUrl} />
        <link rel="icon" sizes="192x192" href={imageUrl} />
        <link rel="icon" sizes="512x512" href={imageUrl} />
        <link rel="preload" href="/path/to/your/script.js" as="script" />
        <meta
          name="keywords"
          content="portfolio, webudvikler, webdeveloper, webdevelopment,UX design, UX designer, projekter, projects, udvikling, development, frontend, backend
           websites, webdesign. webdesigner, educated UX designer, UX designer EU, UX designer europe,
           ux page,
          "
        />
        <meta
          property="og:title"
          content="Michelle V. Johansen | UX Designer & Web Developer"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Michelle V. Johansen, a UX designer and web developer. "
        />
      </Helmet>
    </>
  );
}
