import React from "react";
import styles from "./about.module.scss";
import { Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className={styles.container}>
        <Row>
          <h1 className="py-3 text-center">About Us</h1>
          <p>
            Graduated in Web Development, I am looking for an internship to apply my skills in front-end and back-end development. I have completed notable projects such as equipment management systems and attendance management. I am motivated to contribute innovative solutions and gain practical experience in a dynamic professional environment.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default About;
