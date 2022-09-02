import { Link } from "react-router-dom";

const FullNews = () => {
  return (
    <div className="FullMain">
      <div className="FullNewsCard">
        <img src="logo192.png" alt="logo" />
        <h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis,
          recusandae facere dicta maxime iusto sunt provident qui eligendi
          cumque, temporibus quam accusantium voluptatem, mollitia facilis
          reprehenderit dolores illum rerum.
        </p>
      </div>

      <Link className="returnLink" to="/">
        <button className="BtnReturn"> Return to main page </button>
      </Link>
    </div>
  );
};

export default FullNews;
