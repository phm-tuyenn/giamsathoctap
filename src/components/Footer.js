import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./css/footer.css"

export default function Footer() {
    return (
      <Container fluid id="foot" className="dark rounded-top pt-3">
        <Row>
          <Col sm={{span: 2, offset: 4}}>
            <h5>Link hữu ích</h5>
            <ul>
              <li><Link to="/">Bài viết</Link></li>
              <li><Link to="/about">Giới thiệu</Link></li>
              <li><Link to="/donate">Donate cho tôi</Link></li>
            </ul>
          </Col>
          <Col sm={{span: 2, offset: 0}}>
            <h5>Liên hệ</h5>
            <ul>
              <li><a href="https://facebook.com/phm.tuyenn" target="_blank" rel="noreferrer">Qua Facebook</a></li>
              <li><a href="mailto://phamthanhtuyen2k8@gmail.com" target="_blank" rel="noreferrer">Qua Email</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    )
}