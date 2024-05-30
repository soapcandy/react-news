import { useEffect, useState } from "react";
import "./App.css";
import NewsList from "./component/NewsList";
import { Route, Routes } from "react-router-dom";
import NewsDetail from "./component/NewsDetail";

function App() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=kr&apiKey=6b16364a82fb4060a0c0a421d9dff9ce"
    )
      .then((response) => response.json())
      .then((data) => setContent(data.articles));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NewsList news={content} />} />
      <Route path="/:id" element={<NewsDetail news={content} />} />
    </Routes>
  );
}

export default App;
