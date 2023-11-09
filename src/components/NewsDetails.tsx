import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News from "../interfaces/News";
import { Container, Row, Col } from "react-bootstrap";
import { format, parse } from "date-fns";

const NewsDetails = () => {
  const urlParams = useParams();

  const [newsData, setNewsData] = useState<News>();
  console.log(newsData);

  let formattedDate = "";

  if (newsData) {
    const dateString = newsData.published_at;

    const dateObj = new Date(dateString);
    formattedDate = format(dateObj, "dd-MM-yyyy");
  }

  const getNewsDetails = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/" + urlParams.newsID)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("error in fetching news details");
        }
      })
      .then((data) => {
        setNewsData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getNewsDetails();
  }, []);

  return (
    <Container fluid>
      <Row className="mt-3 flex-column flex-md-row">
        {newsData && (
          <>
            <Col md={6}>
              <div>
                <img className="img-fluid" src={newsData.image_url} />
              </div>
            </Col>
            <Col>
              <h2 className="text-start">{newsData.title}</h2>

              <p className="text-black">{newsData.summary}</p>

              <h6>Published: {formattedDate}</h6>

              <div className="d-flex">
                <p className="text-black">Source: </p>
                <a href={newsData.url}> {newsData.news_site}</a>
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default NewsDetails;
