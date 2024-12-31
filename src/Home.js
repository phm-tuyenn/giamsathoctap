import { Button, Container, Form, FormGroup, Row, Col } from "react-bootstrap";
import PageTitle from "./PageTitle"
import { useRef, useEffect, useState } from "react";

export default function Home() { 
  const ref = useRef()
  const [content, setContent] = useState("Sai mã giám sát")
  const code = useRef("")

  const handleSubmit = () => {
    code.current = ref.current.value
    setContent(code.current)
  }

  return (<>
      <PageTitle name="Nhật ký giám sát học tập"/>
      <Container fluid>
        <Form>
          <FormGroup as={Row} className="m-2">
            <Col sm={2}><Form.Label htmlFor="code" className="text-center">Mã giám sát: </Form.Label></Col>
            <Col sm={4}><Form.Control id="code" type="text" placeholder="xxxx" ref={ref}></Form.Control></Col>
            <Col sm={2}><Button variant="success" onClick={handleSubmit}>OK</Button></Col>
          </FormGroup>
        </Form>
        <Container>
          {content}
        </Container>
      </Container>
    </>);
}