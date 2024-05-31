import NewsLink from "./NewsLink";

function NewsItem({ item, index }) {
  return (
    <div style={{ display: "flex", border: "1px solid black" }} key={index}>
      <NewsLink to={`/${index}`} state={item}>
        <img
          src={item.urlToImage}
          style={{ width: "10rem", height: "10rem" }}
          alt=""
        />
      </NewsLink>
      <div>
        <NewsLink to={`/${index}`} state={item}>
          <h3>{item.title}</h3>
        </NewsLink>
        <div>{item.description}</div>
        <div>{item.author}</div>
      </div>
    </div>
  );
}

export default NewsItem;
