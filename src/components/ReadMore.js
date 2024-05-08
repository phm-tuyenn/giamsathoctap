import { Container, Row, Col } from "react-bootstrap"
import content from "../content"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Tile from "./Tile"

export default function ReadMore() {
    let [postList, setPostList] = useState([0])

    useEffect(() => {
        if (content.content.length <= 4) {
            let list = []
            for (let i = 0; i < content.content.length; i++) list.push(i)
            setPostList(list)
        } else {
            let list = []
            for(let i = 0; i < 4; i++) {
                let post = Math.floor(Math.random() * content.content.length)
                while (content.content.includes(post)) {
                    post = Math.floor(Math.random() * content.content.length)
                }
                list.push(post)
            }
            setPostList(list)
        }
    }, [])

    const make = () => {
        let list = []
        postList.forEach((id) => {
            list.push(<Col>
                <Link to={`/post/${content.content[id].route}`}>
                    <Tile width="15rem" className="my-2" title={content.content[id].title} thumbnail={content.content[id].thumbnail}/>
                </Link>
            </Col>)
        })
        return list
    }

    return (<Container className="mt-3">
        <h3>Đọc thêm:</h3>
        <Row className="mt-3 ms-2" lg={4} md={2} sm={1}>
            {make()}
        </Row>
    </Container>)
}