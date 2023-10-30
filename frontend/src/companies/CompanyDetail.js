import React, {useState, useEffect} from "react";
import {useParams, Redirect} from "react-router-dom";
import JoblyApi from '../api';
import JobDescriptionBox from "../common/JobDescriptionBox";
import SearchForm from "../common/SearchForm";

const CompanyDetail =({id, category, currentUser, hasAppliedToJob, applyToJob, searchterm}) => {
    const {handle} = useParams()
    console.log(handle)

    const [company, setCompany] = useState([]);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function getAllJobs(){
            let company = await JoblyApi.getCompany(handle);
            setCompany(company);
            setJobs(company.jobs);
        }
        getAllJobs();
    }, [handle]);

    console.log(company)
    console.log(company.jobs)

    return (
        <div>
            <h2>{handle}</h2>
            {/* <p>{company.description}</p> */}
            {company.description} 
            <div>
            {company.length}a number
            {jobs.length
    ? (
        <div className="CompanyList-companies">
            {jobs.map((job) => (
                <JobDescriptionBox
                    key ={job.id}
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    currentUser={currentUser}
                    hasAppliedToJob={hasAppliedToJob}
                    applyToJob={applyToJob}
                    searchterm={searchterm}

                />
            ))}
        </div>
    ) : (
        <h4 className="lead">Sorry, no companies with that search term were found!</h4>   
)}

            </div>
            
        </div>
    )
}

export default CompanyDetail;