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
            Diplômé en Développement Web, je cherche un stage pour appliquer mes
            compétences en développement front-end et back-end. J'ai réalisé des
            projets notables comme des systèmes de gestion de matériel et de
            gestion de présence. Je suis motivé à contribuer des solutions
            innovantes et à acquérir une expérience pratique dans un
            environnement professionnel dynamique.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default About;
