import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'

function RepoCard(props) {
let mode = props.info.private ? "Private":"Public";
    return (
        <div style={{display:"inline", padding:"25px 25px"}}>
            <Container>
                <Row>
                    <Col xs={12} md={8}>
                        <Card style={{ width: '40rem' }}>
                            <Card.Body>
                                <Card.Title>{props.info.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Mode : {mode}</Card.Subtitle>
                                <Card.Text>
                                    {props.info.description}
                                    
                                    <h4>Language :{props.info.language}</h4>
                                    <h4>Stars :{props.info.stargazers_count}</h4>
                                    <h4>Watchers :{props.info.watchers_count}</h4>
                                    <h4>Forks :{props.info.forks}</h4>
                                    <h4>Issues :{props.info.open_issues}</h4>
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default RepoCard;