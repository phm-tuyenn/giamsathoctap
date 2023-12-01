import PageTitle from "../components/PageTitle";
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";
import Tile from "../components/Tile";
import content from "../donate"

export default function Internet() {
    return (
        <>
            <PageTitle name="Phạm Tuyên - Donate"/>
            <Row sm={1} md={2} lg={3} xxl={4} className="g-4" style={{ whiteSpace: "pre-wrap" }}>
                {content.content.map((post, id) => (
                <Col key={id}>
                    <Link to={post.route}>
                    <Tile title={post.title} description={post.description} thumbnail={post.thumbnail}/>
                    </Link>
                </Col>
                ))}
            </Row>
        </>
    );
}