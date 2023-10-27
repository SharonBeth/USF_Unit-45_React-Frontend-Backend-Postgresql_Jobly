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


  function SignupForm({register}){
    
    const history = useNavigate();
    const initialState = {username: "", password: "", firstName: "", lastName: "", email: ""};
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
        let res = await register(formData);
        if(res.success) {
            history('/homepagein');
        } else {
            setFormErrors(res.errors);
        }
    }

    return (
        <div>
            <p>Testing</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input 
                        type="text"
                        name="username"
                        id="username"
                        onChange={handleChange}
                        value={formData.username}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input 
                        type="text"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                </FormGroup>
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
                <Button>Submit</Button>
            </Form>
        </div>
    )
  }

  export default SignupForm;