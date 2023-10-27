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


function MainPageOut ({username, data}){
    return(
        <div>TEsting the MainPageOut {data} {username} testing distance .</div>
    )
}

export default MainPageOut;