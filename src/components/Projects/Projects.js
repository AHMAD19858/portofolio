import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.png";

import konnect from "../../Assets/Projects/konnect.png";
import ark from "../../Assets/Projects/arksentrytxt.svg";
import eatte from "../../Assets/Projects/logo.svg";
import qwizeen from "../../Assets/Projects/qwhite.png";
import motton from "../../Assets/Projects/motton.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={konnect}
              isBlog={false}
              title="ViaKonnect - IOS App"
              description="ViaKonnect is a travel app that connects users with unique experiences and trusted local insights. It offers personalized travel guides, curated itineraries, and interactive maps to simplify trip planning. Users can access insider tips, book activities directly through the app, and explore hidden gems beyond typical tourist paths. The app is available for download on the App Store."
              demoLink="https://apps.apple.com/eg/app/viakonnect/id6557030875"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={konnect}
              isBlog={false}
              title="ViaKonnect - Android App"
              description="ViaKonnect is a travel app that simplifies trip planning by offering personalized travel guides, curated itineraries, and interactive maps. Users can access expert travel tips and advice, book accommodations and activities directly through the app, and manage their travel arrangements conveniently. The app is available for download on the Google Play Store."
              demoLink="https://play.google.com/store/apps/details?id=com.viakonnect"
              //ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={konnect}
              isBlog={false}
              title="ViaKonnect - Website"
              description="ViaKonnect is a travel platform that connects users with unique experiences, offering bookings for flights, hotels, and car rentals. It also provides curated adventures, local insights, and opportunities for content creators to share their journeys and earn income."
              demoLink="https://www.viakonnect.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ark}
              isBlog={false}
              title="ArkSentry"
              description="ArkSentry provides expert penetration testing, cloud security audits, and phishing simulations to help businesses safeguard their digital assets with continuous security monitoring and real-time vulnerability reporting."
              demoLink="https://www.arksentry.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qwizeen}
              isBlog={false}
              title="Qwizeen"
              description="Qwizeen is a comprehensive restaurant management platform designed to optimize operations by integrating order processing, reservations, inventory management, and customer engagement. It provides a seamless experience for restaurants, cafés, and food businesses, enhancing efficiency and service quality."
              demoLink="https://qwizeen.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eatte}
              isBlog={false}
              title="EATTE"
              description="EATTE is an all-in-one restaurant management platform offering POS, inventory tracking, reservations, online ordering, and customer engagement tools to streamline operations and enhance guest experiences."
               demoLink="https://eatte-io.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motton}
              isBlog={false}
              title="Motoon Academy - Website"
              description="Motoon Academy is an online learning platform providing diverse educational courses, resources, and structured learning materials."
              demoLink="https://www.motoonacademy.com"  
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motton}
              isBlog={false}
              title="Motoon Academy - Android App"
              description="Motoon Academy is an online learning platform providing diverse educational courses, resources, and structured learning materials."
               demoLink="https://play.google.com/store/apps/details?id=com.motoonacademy.motoon"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
