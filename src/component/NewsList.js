function NewsList({ news }) {
  return (
    <div>
      {news.map((item, index) => (
        <div style={{ display: "flex", border: "1px solid black" }} key={index}>
          <img
            src={item.urlToImage}
            style={{ width: "100px", height: "100%" }}
            alt=""
          />

          <div>
            <h3>{item.title}</h3>
            <div>{item.description}</div>
            <div>{item.author}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default NewsList;
