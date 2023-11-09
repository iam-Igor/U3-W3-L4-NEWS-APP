import { Button, Col, Row } from "react-bootstrap";
import News from "../interfaces/News";
import { Link, useNavigate } from "react-router-dom";

const SingleNews = ({ news }: { news: News }) => {
  return (
    <>
      <Col md={4} className="news-card">
        <div
          className="card mb-3"
          style={{ backgroundImage: `url(${news.image_url})` }}
        >
          <Row className="row g-0">
            <Col className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.summary}</p>

                <p className="card-text">
                  <small>{news.published_at}</small>
                </p>
                <Link className="btn btn-success" to={`/Details/${news.id}`}>
                  Read full article
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
};

export default SingleNews;
