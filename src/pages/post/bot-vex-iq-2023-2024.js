import content from "../../content"
import PageTitle from "../../components/PageTitle"
import { Col, Container, Row, Image } from "react-bootstrap"
import ReadMore from "../../components/ReadMore"
let data = content.content[0]

export default function Post1() {
    return (<>
        <PageTitle name={`${data.title} - Phạm Tuyên`}/>
        <Container fluid>
            <Row>
                <Col></Col>
                <Col sm={12} md={8}>
                    <h1>{data.title}</h1>
                    <p style={{ fontStyle: "italic", fontSize: "14px" }}>{data.time.toLocaleDateString()}</p>
                    <p>Hành trình VEX IQ 2023-2024 của tôi có lẽ ngắn hơn nhiều người, nó chỉ dài 3 tháng, từ đầu tháng 11/2023 đến cuối tháng 1/2024. Sở dĩ ngắn như vậy là vì lúc đó tôi là học sinh mới, chưa biết mấy cái món này. Đến khi biết thì cũng hơi muộn. May một chút là bọn tôi có khá đầy đủ đồ (thêm cả các nhóm khác), kế hoạch phát triển hợp lí, cùng với anh em đam mê nên mùa này cũng được coi là khá thành công.</p>   
                    <Image src={data.media[0]} width={"100%"} className="rounded mb-4" alt="Bot VEX IQ 2023-2024"></Image>
                    <p className="desc">Bot VEX IQ 2023-2024</p>
                    <div className="youtube">
                        <iframe width="853" height="480" src="https://www.youtube.com/embed/100tfTCiVmc" title="VEX IQ Robotics Competition: Full Volume | 2023 - 2024 Game" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <p className="desc">Đề bài VEX IQ 2023-2024: Full Volume</p>
                    <p className="mt-4">
                        Ban đầu, tôi được vào <a href="https://ftc-events.firstinspires.org/2023/team/25209" target="_blank" rel="noreferrer">team FTC của trường tôi</a> do qua được bài test trên <a href="https://ftcsim.org/" target="_blank" rel="noreferrer">FTC Sim</a>. Tuy nhiên, sau một pha cài lại máy thì tôi mất hết liên lạc và không biết thông tin gì về đội đó nữa (chắc sau này do trời ban phước nên tôi được mời vào lại, chi tiết kể sau). Lúc đó các team VEX IQ cũng chốt gần xong người rồi, đều là những người trượt test cả, nên tôi cũng quay lại học bình thường. Tự nhiên có một hôm, thầy chủ nhiệm lớp tôi (giờ làm hiệu phó 💀) gọi tôi ra phòng robot và thêm tôi vào một team VEX IQ. Kế hoạch đội đó là làm con robot to và khoẻ như bọn trên Youtube. Tôi cũng hào hứng làm, dù hơi bỡ ngỡ và làm được đúng 1 buổi. Sau buổi làm cùng nhau ấy, tôi phải chuyển sang team 41794W của tôi vì bên đấy thiếu người.
                    </p>
                    <p>
                        Sang bên đấy, tôi hơi bối rối vì team mới làm được cái drivetrain (khung truyền động), còn cơ cấu ghi điểm thì chưa có, tôi đoán chắc là mới gỡ ra làm lại. Các anh mentor giới thiệu cho tôi về team và nêu kế hoạch là làm một con arm-bot (chính là con bây giờ). Tôi hỏi các anh tại sao không làm con to thì các anh bảo là: Thời gian có hạn, bây giờ làm theo họ thì sẽ mất rất nhiều thời gian tinh chỉnh, làm con đơn giản mà ăn được max 91 điểm thì khá tốt. Sau này nghĩ lại, tôi vẫn thấy hợp lí.
                    </p>
                    <div className="youtube">
                        <iframe width="853" height="480" src="https://www.youtube.com/embed/2y81ZquDCwE" title="VEX IQ Full Volume Robot 91 Points" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <p className="desc">Concept bot VEX IQ của bọn tôi</p>
                    <p className="mt-4">
                        Bọn tôi bắt đầu chia ra, 2 thằng làm drivetrain, 2 thằng làm cơ cấu nâng và lấy khối. Tôi phụ trách cái thứ 2. Do không có thiết kế trước nên bọn tôi lỡ làm cái thùng to quá, phải thu nhỏ lại. Lô cuộn lấy khối thì hơi thiếu dây chun (do bọn tôi làm sau nên các nhóm trước dùng hết), mãi mới có hàng về. Lúc lắp thùng với tay, bọn tôi phải loay hoay mãi mới lắp được vì thiếu thanh sắt.
                    </p>
                    <p>
                        Rồi cũng đến lúc lắp 2 phần drivetrain và cơ cấu ghi điểm vào với nhau. Tôi phải chỉnh lại drivetrain khá nhiều vì mối nối giữa hai phần không vừa nhau. Và khi chạy thử lần đầu, có quá nhiều thứ để sửa: Thùng quá nặng, bot hay lắc lư và khi nâng thùng lên thì bot bị ngã. Đồng thời, phần lấy khối hay kẹt và mối nối không đủ khoẻ để chịu lực. Tôi phải tháo bớt chi tiết ở thùng ra, chuyển bộ điều khiển về phía sau và thêm đối trọng để cân bằng trọng tâm. Bọn tôi cũng phải thêm một đống chun vào lô cuộn để cơ cấu hoạt động hiệu quả.
                    </p>
                    <p>
                        Có ngày trồng sung thì phải có ngày hái sung. Bọn tôi tinh chỉnh xong thì bắt đầu tập luyện kĩ năng lái và thi đấu 2 giải thử, 1 giải chính thức của trường. Cả 3 lần, bọn tôi đều đứng nhất với điểm số tăng dần theo thời gian. Đợt đó, bot của tôi có nhiều cải tiến, điển hình là nâng tỉ số truyền động từ 1:1 lên 3:2, vì có một trận mà bọn tôi còn 5 giây, phải chạy từ đầu đến cuối sân mà không kịp. Bọn tôi cũng cày bục mặt phần tự hành (mặc dù sau đó chỉ ăn được 5 điểm tự hành ở giải toàn quốc), vì thầy tôi mãi đến cuối mới nhắc làm phần đó. Hồi đó, tôi không biết gì nhiều về PID hay luật được di chuyển bot bằng tay. Nếu được làm lại, chắc chắn bọn tôi sẽ làm ngon lành.
                    </p>
                    <p>
                        Trong lúc đó, chúng tôi cũng khá rảnh khi viết nguyên một đoạn code để vẽ cờ Việt Nam lên màn hình bộ điều khiển (để flex). Lúc đầu, tôi dùng OpenCV để lấy toạ độ các điểm màu vàng trên cờ để vẽ lại. Sau đó, tôi thấy chậm quá (153 pixel x 107 pixel = 16371 lần vẽ) nên chuyển sang vẽ 20 hình sao, cái sau nhỏ hơn cái trước, mục đích là để vẽ hình sao trước rồi tô nó sau. Cụ thể là đây:
                    </p>
                    <pre><code>
                            {`void drawVietNam() {
  Brain.Screen.setPenWidth(1);
  Brain.Screen.setPenColor(red);
  Brain.Screen.setFillColor(red);
  Brain.Screen.drawRectangle(0, 0, 159, 107);
  Brain.Screen.setPenColor(yellow);
  
  int point[][2] = {{79, 20}, {59, 81}, {111, 43}, {47, 43}, {99, 80}, {79, 20}};
  for (int i = 0; i < 20; i++) {
    for (int j = 0; j < 5; j++) {
      switch (j) {
        case 0:
            Brain.Screen.drawLine(point[j][0], point[j][1] + i, point[j + 1][0] + i, point[j + 1][1] - i);
            break;
        case 1:
            Brain.Screen.drawLine(point[j][0] + i, point[j][1] - i, point[j + 1][0] - (i * 2), point[j + 1][1] + i);
            break;
        case 2:
            Brain.Screen.drawLine(point[j][0] - (i * 2), point[j][1] + i, point[j + 1][0] + (i * 2), point[j + 1][1] + i);
            break;
        case 3:
            Brain.Screen.drawLine(point[j][0] + (i * 2), point[j][1] + i, point[j + 1][0] - i, point[j + 1][1] - i);
            break;
        case 4:
            Brain.Screen.drawLine(point[j][0] - i, point[j][1] - i, point[j + 1][0], point[j + 1][1] + i);
            break;
      }
    }
  }
}`}
                    </code></pre>
                    <p>
                        Làm xong đoạn code đó, với nửa chừng phần tự hành thì bọn tôi đi đấu ở FPT Hà Nam. Đấu xong mới biết đắng cay ngọt bùi là như nào: Một trận liên minh bỏ đấu, được 2 trận tiếp gặp FPT Cầu Giấy thì ăn, đến lúc gặp FPT Bắc Giang thì tụt. Cũng may là đội tôi cũng khoẻ nên gánh được nhiều, điểm trung bình là 83 (do không đi mấy giải trước nên không có điểm cộng). Bọn tôi xếp thứ 7 vòng loại, mà giải chỉ lấy top 6 đi đấu vòng chung kết 😅.
                    </p>
                    <Image src={data.media[1]} width={"100%"} className="rounded mb-4" alt="Kết quả của bọn tôi ở Hà Nam"/>
                    <p className="desc">Kết quả của bọn tôi ở Hà Nam</p>
                    <p>
                        Thi xong, tôi dở hơi chuyển bộ điều khiển ra đằng trước mà quên mất là trước kia phải chuyển ra sau để cân bằng trọng tâm. May mắn là tôi vẫn nhớ thiết kế nên lắp lại không lâu lắm. Tôi có lắp thêm 2 cái sừng để chặn cái thùng không bị lắc ra ngoài và 2 cái đèn xi nhan, mỗi khi rẽ bên nào là sáng bên đấy (tất nhiên là để flex). Phần tự hành bọn tôi làm nốt, nhưng vì lúc đầu thiết kế bot không ổn lắm nên làm phần di chuyển hơi khó. Tuần đó, bọn tôi cũng chạy kĩ năng lên 90 điểm (tiệm cận max 91 điểm theo chiến thuật bọn tôi). 
                    </p>
                    <p>
                        Sau đợt Hà Nam 1 tuần, bọn tôi đi đấu giải toàn quốc. Bọn tôi đã xác định với nhau là không đi Mỹ được nên cố mà vào vòng chung kết. Khổ nỗi, bọn tôi đấu 9 trận (8 trận vòng loại, 1 trận chung kết trong bảng) thì 3 trận lỗi kĩ thuật của cả tôi lẫn họ, kéo điểm xuống rất nhiều. May là có điểm cộng từ giải Hà Nam gánh còng lưng, không thì bọn tôi chỉ ở top 10-12.
                    </p>
                    <Image src={data.media[2]} width={"100%"} className="rounded mb-4" alt="Kết quả của bọn tôi ở giải toàn quốc"/>
                    <p className="desc">Kết quả của bọn tôi ở giải toàn quốc: Trận 63 điểm là do bên họ lỗi hút khối nhưng không nhả được, trận 71 điểm là do bên tôi lỗi điều khiển không kết nối được, còn trận 77 điểm là do robot bên tôi đang chạy tự nhiên lăn đùng ra chết, chưa rõ vì sao.</p>
                    <p>
                        Còn về kĩ năng lái, anh em tôi lượt đấu đầu bị tâm lý, lỗi. Tôi phải ra kí hiệu cho anh em thi lại thêm 2 lần nữa thì mới ăn được 84 điểm, thuộc loại tốt. Đến phần thi tự hành, hình như bot không hợp sân hay trời không độ mà bot cứ quay vòng vòng, ăn may làm đổ được 1 khối thì ăn được 5 điểm. Tôi cho thi lại lần 2 nhưng vẫn thế nên bỏ luôn. Tổng là 89 điểm, xếp hạng 37 toàn quốc.
                    </p>
                    <Image src={data.media[3]} width={"100%"} className="rounded mb-4" alt="Kết quả phần thi kĩ năng"/>
                    <p className="desc">Kết quả phần thi kĩ năng.</p>
                    <p>
                        Đến phần trả lời phỏng vấn ban giám khảo, bọn tôi múa mõm hơn cả thầy Huấn. Bao nhiêu tính năng, bọn tôi xạo hết ra. Ban giám khảo cũng gật gù, bảo đội này có thể nhận giải các kiểu... Thế mà về tay bọn tôi có đúng 2 cái certificate, một cái là đã tham gia, một cái là đạt hạng 3. Đúng điêu!
                    </p>
                    <p>
                        Vậy là trong mùa VEX IQ đầu tiên, cũng là cuối cùng của tôi (năm sau tôi quá tuổi nên sẽ đi VEX V5), tôi đã có thêm cho mình nhiều kiến thức, mối quan hệ và cơ hội để tham gia các cuộc thi khác (có thêm cả certificate nữa). Dù còn nhiều tiếc nuối, nhưng đây là một mùa giải thành công đối với team tôi.
                    </p>
                </Col>
                <Col></Col>
            </Row>
            <ReadMore/>
        </Container>     
    </>)
}