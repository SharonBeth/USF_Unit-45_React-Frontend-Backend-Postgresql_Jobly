import React from "react";
import {Link} from 'react-router-dom';
import CompanyDetail from "./CompanyDetail";
import { Button, CardText, Row, Col, Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const CompanyCard = ({handle, name, description, logoUrl}) => {
    return (
        <div className="CompanyCard">
            <Card >
            <Link to={`/companies/${handle}`}>
                <h4>{name}{logoUrl}</h4>
            </Link>
            <p>{description}</p>
            </Card>
        </div>
    )

}

export default CompanyCard;