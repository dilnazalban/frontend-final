import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ color: "#DDA0DD"}}>{props.title}</Card.Title>
        <Button variant="primary" href={props.ghLink} target="_blank">
          
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
