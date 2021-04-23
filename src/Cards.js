import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import _ from "lodash"
import './App.css'

function RepoCard(props) {
    let Desc = props.info.description;
    if(Desc == null) {Desc="";}
    let RepoDesc = Desc.length<70 ? Desc: _.slice(Desc,0,51).join('')+" ...";
    let mode = props.info.private ? "Private" : "Public";
    return (
        <div >
                <Row style={{margin : "0"}}>
                <Col lg={6} md={12} sm>
                    <Card style={{height : "300px",width : "300px", margin:"20px 5px"}}>
                        <Card.Body>
                            <Card.Title>{props.info.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Mode : {mode}</Card.Subtitle>
                            <Card.Text>
                                {/* {props.info.description} */}
                                {RepoDesc}
                                <p>
                                Language :{props.info.language}<br />
                                Stars :{props.info.stargazers_count}<br />
                                Watchers :{props.info.watchers_count}<br />
                                Forks :{props.info.forks}<br />
                                Issues :{props.info.open_issues}<br />
                                </p>
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
        </div>
    );
}

export default RepoCard;