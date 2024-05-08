import PageTitle from "../components/PageTitle";
import bank from "../assets/tk.jpg"
import { Image, Row, Col } from "react-bootstrap";

export default function Internet() {
    return (
        <>
            <PageTitle name="Donate - Phạm Tuyên"/>
            <Row>
                <Col></Col>
                <Col sm={6}>
                    <Image width={"80%"} src={bank} alt="Ngân hàng BIDV" className="rounded d-block mx-auto"/>
                    <p className="d-flex justify-content-center mt-2">Xin cảm ơn</p>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
}