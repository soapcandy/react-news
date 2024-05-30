function NewsList({ news }) {
  console.log(news);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          src={news.urlToImage}
          style={{ width: "100px", height: "100px" }}
        />

        <div>
          <h3>{news.title}</h3>
          <div>{news.description}</div>
          <div>{news.author}</div>
        </div>
      </div>
    </div>
  );
}
export default NewsList;
