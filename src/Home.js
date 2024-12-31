import { Button, Container, Form, FormGroup, Row, Col } from "react-bootstrap";
import PageTitle from "./PageTitle"

export default function Home() { 
  return (<>
      <PageTitle name="Nhật ký giám sát học tập"/>
      <Container fluid>
        <Form>
          <FormGroup as={Row} className="m-2">
            <Col sm={2}><Form.Label htmlFor="code" className="text-center">Mã giám sát: </Form.Label></Col>
            <Col sm={4}><Form.Control id="code" type="text" placeholder="xxxx"></Form.Control></Col>
            <Col sm={2}><Button variant="success">OK</Button></Col>
          </FormGroup>
        </Form>
      </Container>
    </>);
}
