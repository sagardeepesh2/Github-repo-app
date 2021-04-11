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

function App() {
  const [username,setUsername] = useState("");
  const [loadingRepo,setLoadingRepo] = useState(false);
  const [repo,setRepo] = useState([]);
  const [loadingUser,setLoadingUser] = useState(false);
  const [userDetails,setUserDetails] = useState([]);
  //If extracting repo then true else if user then false
  const [RepoOrUser,setRepoOrUser] = useState(null);

  let repoUrl = "https://api.github.com/users/" + username+ "/repos";
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

  function searchRepos(){
    setLoadingRepo(true);
    fetch(repoUrl)
    .then(res=>res.json())
    .then((result) =>{
      setLoadingRepo(false);
      setRepoOrUser(true);
      setRepo(result);
    });
  }

  
  function fetchUserDetails(){
    setLoadingUser(true);
    fetch(userUrl)
    .then(res=>res.json())
    .then((result) =>{
      setLoadingUser(false);
      setRepoOrUser(false);
      setUserDetails(result);
  });
}
  function renderRepo(repo){
    return(
      <div >
    <RepoCard info={repo}/>
    </div>  
    );
  }

  const formStyle={
    position:"relative;",
    right:"50px;"
  };

  function showRepoOrUserDetails(){
    if(RepoOrUser){
      return(
      <div>{repo.map(renderRepo)}</div>);
    } else if(RepoOrUser === false) {
      return(<UserInfo info={userDetails} />);
    }
  }
  
  return (
    <div>
  <Form >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Enter your Github Username</Form.Label>
    <Form.Control style={formStyle}
    onChange={handleClick}
    value = {username}
 type="text" placeholder="Github Username" />
  </Form.Group>
  <Button  variant="outline-info" onClick={handleSubmitRepo}>{loadingRepo ? "Searching Repos..." : "Get Repositories"}</Button>
  <Button to="/User" variant="outline-danger" onClick={handleSubmitUser}>{loadingUser ? "Searching User Info..." : "Get User Info"}</Button>
  </Form>
  {showRepoOrUserDetails()}
  </div>
  );
}

export default App;
