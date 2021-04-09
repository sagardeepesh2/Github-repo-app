import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css'
import RepoCard from "./Cards";

function App() {
  const [username,setUsername] = useState("");
  const [loading,setLoading] = useState(false);
  const [repo,setRepo] = useState([]);


  let repoUrl = "https://api.github.com/users/" + username+"/repos";
  
  function handleSubmit(event) {
    event.preventDefault();
    searchRepos();
  }

  function handleClick(event) {
    setUsername(event.target.value);
  }

  function searchRepos(){
    setLoading(true);
    fetch(repoUrl)
    .then(res=>res.json())
    .then((result) =>{
      setLoading(false);
      console.log(result)
      setRepo(result);
    });
  }

  function renderRepo(repo){
    return(
      <div>
    <h2>{repo.name}</h2>
    {/* <RepoCard info="repo"/> */}
    </div>  
    );
  }
  
  const formStyle={
    position:"relative;",
    right:"50px;"
  };
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
  <Button variant="outline-info" onClick={handleSubmit}>{loading ? "Searching..." : "Get Repositories"}</Button>
  </Form>
    <div>
      {repo.map(renderRepo)}
    </div>
  </div>

  );
}

export default App;
