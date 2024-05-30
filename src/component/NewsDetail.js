import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function NewsDetail({ news }) {
  const { id } = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    const newsDetail = news.find((_item, index) => index.toString() === id);
    // const newsDetail = news[id];
    setDetail(newsDetail);
  }, [id, news]);

  if (detail) {
    return (
      <div>
        <h2>{detail.title}</h2>
        <img
          src={detail.urlToImage}
          style={{ width: "10rem", height: "10rem" }}
          alt=""
        />
        <div>{detail.content}</div>
        <div>{detail.author}</div>
        <div>{detail.publishedAt}</div>
      </div>
    );
  } else {
    <div>로딩중...</div>;
  }
}

export default NewsDetail;
