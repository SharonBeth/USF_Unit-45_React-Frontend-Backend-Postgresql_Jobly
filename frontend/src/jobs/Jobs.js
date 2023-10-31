import React, {useState, useEffect} from "react";
import {Redirect} from 'react-router-dom';
import JoblyApi from '../api';
import SearchForm from "../common/SearchForm";
import JobDescriptionBox from "../common/JobDescriptionBox";


function Jobs ({category, searchterm, currentUser, hasAppliedToJob, applyToJob}){
    const [jobs, setJobs] = useState([]);

    useEffect (function getAllJobs () {
        searchterm()
    }, []);

    async function searchterm (name){
        let jobs= await JoblyApi.getJobs(name);
        setJobs(jobs);
    };



    return (
        <div>Jobs Testing
            <SearchForm searchterm={searchterm} />
            <h2>All Available Jobs</h2>
    
                 <div className="JobList">
                        {jobs.map((job) => (
                            <JobDescriptionBox 
                                category
                                key={job.id}
                                id={job.id}
                                title={job.title}
                                handle={job.companyHandle}
                                salary={job.salary}
                                equity={job.equity}
                                currentUser={currentUser}
                                hasAppliedToJob={hasAppliedToJob}
                                applyToJob={applyToJob}
                                searchterm={searchterm}

                            />
                        ))}    
                    
                    </div> 
    
        </div>

    )
}

export default Jobs;