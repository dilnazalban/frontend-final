import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../images/PYh.gif";
import myImg from "../images/home.jpeg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <img
              src={homeLogo}
              className="img-fluid"
              alt="avatar"
              style={{
                width: '50%',
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '0px',
                marginBottom: '20px'
              }}
            />
              <h1 style={{ paddingBottom: 15 , textAlign:'center'}} >
                <strong className="main-name"> Добро пожаловать в мое портфолио!</strong>
              </h1>

              <h1 style={{ paddingBottom: 15 , textAlign:'center'}} >
                Меня зовут Дильназ 
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
              <h1 className="heading-name">
              Я студент, изучающий информационные технологии, с большой страстью к изучению новых технологий и целеустремленным стремлением к росту в ИТ-индустрии. Здесь вы найдете демонстрацию моих проектов, навыков и достижений.
              </h1>
              </div>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Давайте знакомиться ближе!
            </h1>
            <p className="home-about-body">
              <br />
                <b style={{ fontSize: "1.7em", color: "#DDA0DD"}}> Привет! Я Диля, студентка третьего курса в области IT. Увлечена программированием с детства. Участвую в разработке проектов, включая это портфолио, где использовала React. Опыт участия в хакатонах и конкурсах. Стремлюсь к профессионализму в frontend разработке. Готова к новым вызовам и проектам!


                </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
        <br></br>
        <Row>
          
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Home;
