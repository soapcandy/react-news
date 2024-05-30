import { Link } from "react-router-dom";

function NewsList({ news }) {
  return (
    <div>
      {news.map((item, index) => (
        <Link
          to={`/${index}`}
          style={{ textDecoration: "none", color: "inherit" }}
          key={index}
        >
          <div style={{ display: "flex", border: "1px solid black" }}>
            <img
              src={item.urlToImage}
              style={{ width: "10rem", height: "10rem" }}
              alt=""
            />

            <div>
              <h3>{item.title}</h3>
              <div>{item.description}</div>
              <div>{item.author}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default NewsList;
