import React, { useContext, createContext, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import resumeImage from "../images/Resume.jpg";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("Студент информационных технологий");

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await Promise.resolve(" ");
      setUser(response);
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

function About() {
  return (
    <UserProvider>
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
            </Col>
            <h1 style={{ paddingBottom: 15 }} className="heading">
            Мое резюме:{" "}
            </h1>
            <img
              src={resumeImage}
              alt="Resume"
              style={{
                width: '45%',
                height: 'auto',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '50px',
                marginBottom: '20px'
              }}
            />
          </Row>
        </Container>
      </Container>
    </UserProvider>
  );
}

function UserDescription() {
  const userDescription = useContext(UserContext);
  return <div>{userDescription}</div>;
}

export default About;
