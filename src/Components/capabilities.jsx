import "../Styles/Sections/capabilities.css";
import SecondHeadline from "../Components/Text/secondHeadline.jsx";

export default function Capabilities() {
  const items = [
    { title: "UX", description: "User experience design & research" },
    {
      title: "Websites / apps",
      description: "Building responsive web & mobile apps",
    },
    {
      title: "Designing",
      description: "Creating modern and user-friendly designs",
    },
    { title: "Development", description: "Frontend & backend development" },
  ];

  return (
    <>
      <section className="Capabilities_wrapper">
        <article className="headline_container">
          <SecondHeadline />
          <div className="bottom_div floating">
            <p>Services</p>
          </div>
        </article>

        <article className="Capabilities_container">
          {items.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
