import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css'
import Card from "./Cards";

function App() {
  const [username,setUsername] = useState("");
  const [loading,setLoading] = useState(false);
  const [repo,setRepo] = useState([])


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
    fetch(repoUrl,{
      method:"get",
    }).then(res=>{
      setLoading(false);
      console.log(res.data);
      setRepo(res.data);
      console.log(repo);
    }).then(data => 
      console.log(data));
  }

  function renderRepo(){
    return(
    <Card info="repo"/>  
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
      {repos.map(renderRepo())}
    </div>
  </div>

  );
}

export default App;
