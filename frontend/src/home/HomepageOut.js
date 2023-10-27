import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem, Button
} from "reactstrap";
import { render } from "react-dom";


function Homepage ({login, register, currentUser, setCurrentUser, hasApplied, needsToApply} ){
//   const [test, setTest] = useState();

//   useEffect(() => {
//     async function getTest() {
//       let getttingTest = await AudioParam.testing
//     }
//   })

    return(
      <div>
        <h1>Jobly </h1>
        <p>All the jobs in one, convenient place.</p>
        <div>
          <Button href="/signUp" color="primary">Sign Up</Button>
          {'      '}{' '}
          <Button href="/login" color="primary">Login</Button>
        </div>
      </div>
    )
}

export default Homepage;