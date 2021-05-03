import React from "react";
import { Row, Col, CardDeck } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import _ from "lodash"
import './App.css'

function RepoCard(props) {
    let Desc = props.info.description;
    if(Desc == null) {Desc="";}
    let RepoDesc = Desc.length<50 ? Desc: _.slice(Desc,0,51).join('')+" ...";
    let mode = props.info.private ? "Private" : "Public";
    return (
        <div>
                <Row style={{margin : "0"}}>
                <Col lg md={12} sm>
                    <Card style={{height : "300px",width : "300px", margin:"20px 5px"}}>
                        <Card.Body>
                            <Card.Title>{props.info.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Mode : {mode}</Card.Subtitle>
                            <Card.Text>
                                {RepoDesc}
                                <p>
                                Language :{props.info.language}<br />
                                <img src="https://img.icons8.com/emoji/25/000000/star-emoji.png" alt="star"/>
                                 :  {props.info.stargazers_count}<br />
                                Watchers :{props.info.watchers_count}<br />
                                <img src="https://img.icons8.com/dusk/25/000000/code-fork.png" alt="forks"/>
                                  :  {props.info.forks}<br />
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

function RepoCards(props){
    if(props.info.message === "Not Found"){
        return <h1> Username not found</h1>
    }
    return(
    <CardDeck>{props.info.map((r) => <RepoCard info={r} />)}</CardDeck>);
}

export default RepoCards;