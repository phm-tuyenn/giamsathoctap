import PageTitle from "../components/PageTitle";
import Text from "../components/Text"
import { Container, Image } from "react-bootstrap";
import "./css/about.css"
import profilePicture from "../assets/profilepic.jpg"
import fb from "../assets/fb.svg"
import github from "../assets/github.svg"

export default function About() {
  return (
    <>
      <PageTitle name="Về tôi - Phạm Tuyên"/>
      <Image className="profile-picture" src={profilePicture}></Image>
      <Container style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}className="p-3 rounded">
        <h1><Text text={'Phạm Thành Tuyên'}/></h1>
        <h5>🎂<Text text={'2008'}/></h5>
        <br/>
        <h3><Text text={"Hiện tại đang là: "}/></h3>
        <h5>🎓<Text text={"Học sinh THPT FPT Hà Nội K11"}/></h5>
        <a href="https://ftc-events.firstinspires.org/2023/team/25209" target="_blank" rel="noreferrer"><h5>🤖<Text style={{ color: "blue" }} text={"Thành viên team FTC #25209"}/></h5></a>
        <a href="https://www.robotevents.com/teams/VIQRC/41794W" target="_blank" rel="noreferrer"><h5>🤖<Text style={{ color: "blue" }} text={"Cựu thành viên team VIQRC #41794W"}/></h5></a>
        <br/>
        <h3><Text text={"Thành tích: "}/></h3>
        <h5>🏆<Text text={"Giải ba HSG tin cấp tỉnh Hà Giang 2022"}/></h5>
        <h5>🏆<Text text={"Giải nhì HSG tin cấp tỉnh Hà Giang 2023"}/></h5>
        <h5>🏆<Text text={"Giải nhì HSG tin cấp cụm Thạch Thất - Hà Nội 2024"}/></h5>
        <h5>🏆<Text text={"Top 12 Đường lên đỉnh Olympia THPT FPT 2024"}/></h5>
        <h5>🏆<Text text={"Hạng 3 bảng Technology VIQRC toàn quốc 2024"}/></h5>
        <h5>🏆<Text text={"Hạng 6 FTC toàn quốc 2024"}/></h5>
        <br/>
        <h3><Text text={"Kinh nghiệm: "}/></h3>
        <h5>🧑‍💻<Text text={"Sử dụng NodeJS, React, HTML, CSS, JS, Python, C++, Java"}/></h5>
        <br/>
        <h3><Text text={"Mạng xã hội: "}/></h3>
        <a href="https://facebook.com/phm.tuyenn" target="_blank" rel="noreferrer"><h5><Image src={fb} width={""}></Image> <Text style={{ color: "blue" }} text={"https://facebook.com/phm.tuyenn"}/></h5></a>
        <a href="https://github.com/phm-tuyenn" target="_blank" rel="noreferrer"><h5><Image src={github}></Image> <Text style={{ color: "blue" }} text={"https://github.com/phm-tuyenn"}/></h5></a>
      </Container>
    </>
  );
}