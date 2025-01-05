import { Button, Container, Form, FormGroup, Row, Col, Table, Spinner } from "react-bootstrap";
import PageTitle from "./PageTitle"
import { useRef, useEffect, useState } from "react";

function ContentTable(props) {
  const [inside, setInside] = useState([])

  useEffect(() => {
      const rows = []
      props.value.forEach((data, i) => {
          rows.push(<tr key={toString(i)}>
              <td>{(new Date(data.timestamp)).toLocaleString()}</td>
              <td>{data.noti}</td>
          </tr>)
      });
      setInside(rows)
  }, [props.value])

  return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th width="20%">Thời gian</th>
            <th width="80%">Cảnh báo</th>
          </tr>
        </thead>
        <tbody>
          {inside}
        </tbody>
      </Table>
  );
}

export default function Home() { 
  const ref = useRef()
  const [content, setContent] = useState("[]")
  const [spinner, setSpinner] = useState(false);  
  const [triggApp, setTriggApp] = useState(false)
  const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, [count]);

  const handleSubmit = () => {
    update()
  }

  const update = () => {
    setSpinner(true);
    fetch("https://giamsathoctap.vercel.app/api/getLog?code=" + ref.current.value)
    .then(res => res.json())
    .then(res => {
      setContent(JSON.stringify(res))
      setSpinner(false);
    })
    fetch("https://giamsathoctap.vercel.app/api/getEnable?code=" + ref.current.value)
    .then(res => res.json())
    .then(res => {
      setTriggApp(res.enable)
      setSpinner(false);
    })
  }

  useEffect(() => {
    update()
  }, [count])

  const handleTriggApp = () => {
    setSpinner(true);
    fetch("https://giamsathoctap.vercel.app/api/setEnable?code=" + ref.current.value + "&enable=" + ((triggApp) ? "false" : "true"))
    .then(res => {
      setSpinner(false);
    })
  }

  return (<>
      <PageTitle name="Nhật ký giám sát học tập"/>
      <Container>
        <Form>
          <FormGroup as={Row} className="mx-2 my-3">
            <Col sm={2}><Form.Label htmlFor="code" className="text-center">Mã giám sát: </Form.Label></Col>
            <Col sm={4}><Form.Control id="code" type="text" placeholder="xxxx" ref={ref}></Form.Control></Col>
            <Col sm={1}><Button variant="success" onClick={handleSubmit}>OK</Button></Col>
            <Col sm={4}>
              <Button onClick={handleTriggApp} variant={(triggApp) ? "danger" : "primary"}>
                {(!triggApp) ? "Bật" : "Tắt"} chế độ giám sát
              </Button>
              {(spinner) ? <Spinner animation="border" role="status" className="ms-2">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              : <></>}
            </Col>
          </FormGroup>
        </Form>
        <Container>
          <ContentTable value={JSON.parse(content)}/>
        </Container>
      </Container>
    </>);
}
