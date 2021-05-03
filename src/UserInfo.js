import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'

function UserInfo(props){
    return (
        <Jumbotron >
    <img style={{height:"150px",width:"150px",borderRadius:"10px 100px / 120px"}}
     src={props.info.avatar_url}
     alt="User"></img>
  <h1>{props.info.name}</h1>
  <h2>
    {props.info.bio}
  </h2>
  <h4>
      Number of Public Repositories :{props.info.public_repos}<br />
      Number of Public Gists :{props.info.public_gists}<br />
      Followers:{props.info.followers}<br />
      Following:{props.info.following}<br />
  </h4>

</Jumbotron>
    );
}
export default UserInfo;