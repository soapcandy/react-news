import NewsItem from "./NewsItem";

function NewsList({ news }) {
  return (
    <div>
      {news.map((item, index) => (
        <NewsItem item={item} key={index} index={index} />
      ))}
    </div>
  );
}
export default NewsList;
