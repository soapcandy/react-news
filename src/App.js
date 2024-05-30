import "./App.css";
import NewsList from "./component/NewsList";

function App() {
  const testArr = [
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: "test",
      title:
        '"대규모 세수결손 없을 것‥물가 하향 안정화" (2024.05.29/뉴스투데이/MBC) - MBCNEWS',
      description:
        '최근 세수감소로 인한 재정악화 우려가 나오자, 최상목 부총리 겸 기획재정부 장관이 "대규모 세수결손은 없을 것"이라고 말했습니다.그러면서 건전재정 기조를 이어갈 뜻을 밝혔습니다.ㅤhttps://imnews.imbc.com/replay/2024/nwtoday/article/66027...',
      url: "https://www.youtube.com/watch?v=n37TbIu3Fjs",
      urlToImage: "https://i.ytimg.com/vi/n37TbIu3Fjs/maxresdefault.jpg",
      publishedAt: "2024-05-28T22:19:14Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Yonhapnewstv.co.kr",
      },
      author: null,
      title:
        '의대 교수들 "증원 땐 교육 붕괴"…의대생 집단유급 우려도 - 연합뉴스TV',
      description:
        '의대 교수들 "증원 땐 교육 붕괴"…의대생 집단유급 우려도\n\n[앵커]\n\n의대 입학 정원 증원에 대한 의대 교수와 의대생의 반발은 여전합니다.\n\n정부가 지원을 약속했지만, 갑작스러운',
      url: "https://m.yonhapnewstv.co.kr/news/MYH20240529001500641",
      urlToImage:
        "https://yonhapnewstv-prod.s3.ap-northeast-2.amazonaws.com/article/MYH/20240528/MYH20240529001500641_P1.jpg",
      publishedAt: "2024-05-28T22:15:22Z",
      content:
        '" " []\r\n.\r\n, .\r\n.\r\n.\r\n[]\r\n&lt;&gt; " . . . ."\r\n.\r\n.\r\n.\r\n&lt; / &gt; " 3 . ."\r\n31 .\r\n\' 5%\' .\r\n32 30 , .\r\n.\r\n, .\r\n&lt; &gt; " . ."\r\n95% .\r\n.\r\n&lt; / &gt; " () ."\r\n.\r\n2025 .\r\n.\r\n\' \' .\r\n&lt; &gt; " . . .… [+71 chars]',
    },
  ];
  return (
    <div className="App">
      {testArr.map((item, index) => (
        <NewsList key={index} news={item} />
      ))}
    </div>
  );
}

export default App;
