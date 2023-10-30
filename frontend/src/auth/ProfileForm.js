import React, {useState} from "react";
import {Redirect, useNavigate} from "react-router-dom";
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
import JoblyApi from "../api";


  function ProfileForm({currentUser, update}){
    console.log(currentUser.username)
    const history = useNavigate();
    const initialState = {firstName: "", lastName: "", email: ""};
    console.log("initial state" + initialState)
    const [formData, setFormData] = useState(initialState);
    const [formErrors, setFormErrors] = useState([]);

    
    const handleChange = (evt) => {
        const {name, value} = evt.target;
            setFormData(formData=>({
                ...formData, 
                [name]: value
            }));
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let username = currentUser.username
        console.log("profilepage, handlesubmit, before update function")
        let res = await update(formData);
        console.log("profilepage, handlesubmit, after update function")
        if(res.success){
            console.log("it worked.")
        }else{
            setFormErrors(res.errors)
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                {/* <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input 
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        value={formData.username}
                    />
                </FormGroup> */}
                <FormGroup>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                        type="text"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                </FormGroup>
                <Button>Update Profile Info</Button>
            </Form>
        </div>
    )
  }

  export default ProfileForm;