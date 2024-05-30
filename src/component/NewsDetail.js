import { useLocation } from "react-router-dom";

function NewsDetail() {
  const location = useLocation();
  const item = location.state;
  console.log(item);

  return (
    <div>
      <h2>{item.title}</h2>
      <img
        src={item.urlToImage}
        style={{ width: "10rem", height: "10rem" }}
        alt=""
      />
      <div>{item.content}</div>
      <div>{item.author}</div>
      <div>{item.publishedAt}</div>
    </div>
  );
}

export default NewsDetail;
