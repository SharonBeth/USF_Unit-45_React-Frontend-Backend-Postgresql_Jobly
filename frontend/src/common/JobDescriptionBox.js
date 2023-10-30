import Company from "../companies/Company2";
import React, { useEffect, useState } from 'react';
import { Button, CardText, Row, Col, Card, CardBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';



function JobDescriptionBox ({currentUser, hasAppliedToJob, applyToJob, category, searchterm, id, title, salary, equity}){
    const [applied, setApplied] = useState();
    const userAppliedJobs = currentUser.applications;

    useEffect(() => {
        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);
    
    async function handleApply(evt) {
        if(hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }
    return (
        <div className="JobDB">
            <Row>
                <Col sm="12">
                    <Card className="my-2" color="light">
                        <CardBody alignment="left">
                            <CardText >
                                <h3>Job Title: {title}</h3>
                                <p>{category}</p>
                                <p>${salary}</p>
                                <p>Equity: {equity}</p>
                            </CardText>
            <Row>
                <Col sm="10">
                </Col>
                <Col sm="2">
                    <Card className="text-end my-2">
                        <Button  disable={applied}>{applied || userAppliedJobs.includes(id) ? "Applied!" : "Apply Now!"}</Button>
                    </Card>
                </Col> 
            </Row>
                        </CardBody>
                    </Card>

                </Col>
            </Row>

        </div>
    )
}

export default JobDescriptionBox;