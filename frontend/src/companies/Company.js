import React, {useState, useEffect} from "react";
import {Redirect, useNavigate} from "react-router-dom";
import SearchForm from "../common/SearchForm";
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";

function Company({}) {
    const [companies, setCompanies] = useState([]);

    useEffect (function allCompanies () {
        info("")
    }, [])


    async function info(query){
        try{
            console.log(query);
            let search = await JoblyApi.getCompanies(query);
            setCompanies(search)
            console.log(companies)
        }catch(error){
            console.error(error)
        }
    }
    return (
        <div>

            <SearchForm searchterm={info}/>
        </div>
    )
}

export default Company;