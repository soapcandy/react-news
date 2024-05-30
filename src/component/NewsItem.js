import { Link } from "react-router-dom";

function NewsItem({ item, index }) {
  const getLinkProps = (index) => ({
    to: `/${index}`,
    style: { textDecoration: "none", color: "inherit" },
    state: item,
    key: index,
  });

  return (
    <div style={{ display: "flex", border: "1px solid black" }}>
      <Link {...getLinkProps(index)}>
        <img
          src={item.urlToImage}
          style={{ width: "10rem", height: "10rem" }}
          alt=""
        />
      </Link>
      <div>
        <Link {...getLinkProps(index)}>
          <h3>{item.title}</h3>
        </Link>
        <div>{item.description}</div>
        <div>{item.author}</div>
      </div>
    </div>
  );
}

export default NewsItem;
