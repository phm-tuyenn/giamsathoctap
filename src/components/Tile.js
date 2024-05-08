import { Card } from "react-bootstrap";
import "./css/tile.css"

export default function Tile(props) {
  return (
    <Card className={`tile ${props.className}`} style={{ width: props.width, border: 'none', color: 'white' }}>
      <Card.Img variant="top" className="rounded im" src={props.thumbnail}/>
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text>
          <p style={{ fontSize: "14px" }}>{props.description}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}