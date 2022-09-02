import "./style.css";
import { Link } from "react-router-dom";

const CardPage = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="img" />
      <h1>{props.title}</h1>
      <div style={{ flexGrow: 1 }}></div>
      <h4>{props.desc}</h4>
      {/* <div style={{ flexGrow: 1 }}></div> */}
      <div style={{ flexGrow: 1 }}></div>
      <button>
        <Link className="links" to="/FullNews">
          Read Full News
        </Link>
      </button>
    </div>
  );
};

export default CardPage;
