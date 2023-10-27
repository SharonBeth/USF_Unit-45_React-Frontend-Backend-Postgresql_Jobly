import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { render } from "react-dom";


function SearchForm ({type, title, searchterm}){

  const [formData, setFormData] = useState();
  const [query, setQuery] = useState();
  

  // const handleChange = (evt) => {
  //   const {name, value} = evt.target;
  //       setFormData(formData=>({
  //           ...formData, 
  //           [name]: value
  //       }));
  // }
  const handleChange = (evt) => {
    setQuery(evt.target.value);
  }

  const handleSubmit = (evt) => {
      evt.preventDefault();
      searchterm(query);
      setQuery(query)
      
    
  }
  
  return(
    <div>
      <Form onSubmit={handleSubmit}>
          <FormGroup>
              <Label htmlFor="searchterm">Search</Label>
              <Input 
                type="text"
                name="searchterm"
                id="searchterm"
                placeholder="Enter search term..."
                onChange={handleChange}
                value={query}
              />
          </FormGroup>
          <Button>Search</Button>
      </Form>
    </div>
  )
}

export default SearchForm;