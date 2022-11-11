import React, { useState, useEffect } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email, sub, nickname } = user;

  let subID = sub;
  let nickName = nickname;
  console.log("stored sub", subID, nickName)

  // const {userid, setUserid} =useState('')
  // const {username, setusername} =useState('')

  
const username =  nickname
const userid = sub

  
console.log(" from useAuth0(), sub and nickname", sub, nickname)
console.log(' from our hooks, userid and username', userid, username)

  function pushsub(){
    console.log("object pushed", {username:nickname, userid:sub} )
    var obj = {username:nickname, userid:sub}
    fetch('http://localhost:8080/', {
            method: 'POST',
            headers: {'Accept':'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(obj)
       
  }).then(() =>{
    console.log("post is done");
  })

  
}




  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{sub}</h2>
          <p className="lead text-muted">{sub}</p>
        </div>
      </div>
      <div>
        <button onClick={pushsub}>
Save
        </button>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Profile;