import { useEffect, useState } from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import News from "../interfaces/News";
import SingleNews from "./SingleNews";

const MainPage = () => {
  const [newsData, setNewsData] = useState<News[]>([]);

  const getnews = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(newsData);
        setNewsData(data.results);
      })
      .catch((err) => {
        console.log("errore nella fetch", err);
      });
  };

  useEffect(() => {
    getnews();
  }, []);

  return (
    <>
      <Alert variant="secondary" className="mt-3">
        Click on a news to read full details
      </Alert>
      <Container fluid>
        <Row>
          <h2>Main news</h2>
          {newsData.map((news, i) => {
            return <SingleNews key={i} news={news} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default MainPage;
