import "./section.css";

export default function Section(props) {
 
  return (
    <section
      className={`section ${props.style ? props.style : ""}`}
      onClick={props.onClick}
    >
      <span className="span">{props.number}</span>
      <span className="span">{props.p}</span>
    </section>
  );
}
