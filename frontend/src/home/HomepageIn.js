import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { render } from "react-dom";
import HomepageOut from "./HomepageOut";


function HomepageIn ({login, register, currentUser}){
  const [test, setTest] = useState();
  useEffect(() => {
  })
  console.log(currentUser.applications + "applications")
    return(
        <div>
            <h1>Jobly </h1>
        <p>All the jobs in one, convenient place.</p>
          <p>Welcome Back {currentUser.username}!!!</p>
          <p>{currentUser.applications}</p>
        </div>
    )
}

export default HomepageIn;