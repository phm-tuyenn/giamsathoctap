import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer";
import "./layout.css"

export default function Layout() { 
  return (
    <div className="page-container">
        <Navigation className="head"/>

        <Container className="out my-4">
          <Outlet/>
        </Container>

      <Footer className="foot"/>
    </div>
  );
}
