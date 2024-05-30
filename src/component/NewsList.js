import NewsItem from "./NewsItem";

function NewsList({ news, num }) {
  return (
    <div>
      {news.map((item, index) => (
        <NewsItem item={item} key={index} index={index} />
      ))}
    </div>
  );
}
export default NewsList;
