import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css'
import RepoCard from "./Cards";
import UserInfo from "./UserInfo";
// import { CardDeck } from "react-bootstrap";

function App() {
  const [username, setUsername] = useState("");
  const [loadingRepo, setLoadingRepo] = useState(false);
  const [repo, setRepo] = useState([]);
  const [loadingUser, setLoadingUser] = useState(false);
  const [userDetails, setUserDetails] = useState([]);

  let repoUrl = "https://api.github.com/users/" + username + "/repos";
  let userUrl = "https://api.github.com/users/" + username;

  function handleSubmitRepo(event) {
    event.preventDefault();
    searchRepos();
  }

  function handleSubmitUser(event) {
    event.preventDefault();
    fetchUserDetails();
  }

  function handleClick(event) {
    setUsername(event.target.value);
  }

  function searchRepos() {
    setLoadingRepo(true);
    fetch(repoUrl)
      .then(res => res.json())
      .then((result) => {
        setRepo(result);
        // console.log(repo);
        setLoadingRepo(false);
      });
  }


  function fetchUserDetails() {
    setLoadingUser(true);
    fetch(userUrl)
      .then(res => res.json())
      .then((result) => {
        setLoadingUser(false);
        // console.log(userDetails);
        setUserDetails(result);
      });
  }

  const formStyle = {
    position: "relative;",
    right: "50px;"
  };


  return (
    <div>
      <Form >
        <Router>
        <div>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter your Github Username</Form.Label>
            <Form.Control style={formStyle}
              onChange={handleClick}
              value={username}
              type="text" placeholder="Github Username" />
          </Form.Group>
          <Link to="/repo">
          <Button variant="outline-warning" onClick={handleSubmitRepo}>{loadingRepo ? "Searching Repos..." : "Get Repositories"}</Button>
          </Link>
          <Link to="/user">
          <Button variant="outline-info" onClick={handleSubmitUser}>{loadingUser ? "Searching User Info..." : "Get User Info"}</Button>
          </Link> 
          <Switch>
            <Route exact path ="/">
            <img className="Homepage" src="https://cdn.pixabay.com/photo/2020/06/12/14/07/code-5290465_1280.jpg"  alt="Homepage"/> 
            </Route>
            <Route path="/repo" component={()=><RepoCard info={repo} />}>
            </Route>
            <Route path="/user" component = {()=><UserInfo info={userDetails} />}>
            </Route>
          </Switch>
          </div>
        </Router>
      </Form>
    </div>
  );
}

export default App;
