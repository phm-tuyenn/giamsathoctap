import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tile from "../components/Tile";
import content from "../content"
import PageTitle from "../components/PageTitle"
import PageNumber from "../components/PageNumber";

export default function Home() {
  return (
    <>
      <PageTitle name="Trang chủ - Phạm Tuyên" description="Trang chủ - Page này để chia sẻ"/>
      <Row sm={1} md={2} lg={3} xxl={4} className="g-4">
        {content.content.reverse().map((post, id) => (
          <Col key={id} className="d-flex justify-content-center">
            <Link to={`/post/${post.route}`}>
              <Tile width="18rem" title={post.title} description={post.description} thumbnail={post.thumbnail}/>
            </Link>
          </Col>
        ))}
      </Row>
      <PageNumber length={content.page} active={1}/>
    </>
  );
}