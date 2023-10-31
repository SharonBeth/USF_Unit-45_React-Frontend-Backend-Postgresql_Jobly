import logo from './logo.svg';
import {useEffect, useState} from 'react';
import React, {BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './nav/NavBar';
import Axios from 'axios';
import LoginForm from './auth/LoginForm';

import SearchForm from './common/SearchForm';
import JoblyApi from './api';
import './App.css';
import SignupForm from './auth/SignupForm';
import useLocalStorage from './useLocalStorage';
import jwt_decode from 'jwt-decode';
import HomepageOut from './home/HomepageOut';
import HomepageIn from './home/HomepageIn';
import ProfileForm from './auth/ProfileForm';
import CompanyList from './companies/CompanyList';
import CompanyDetail from './companies/CompanyDetail'
import Jobs from './jobs/Jobs';
import { CardImg, Card, CardImgOverlay } from 'reactstrap';

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [userLoaded, setUserLoaded] = useState(false);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  useEffect(() => {
    //This is an attempt to confirm if there is someone already signed in.
    async function getCurrentUser() {
      //This statement allows for the token to be truthy (meaning someont is singed in with a current token, or falsey menaing there is no token and no one is signed in at the moment)
      if(token){
        try{
          let {username} = jwt_decode(token);
          JoblyApi.token = token;
          console.log(token);
          const currentUser = await JoblyApi.getUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        }catch(err){
          console.err("Problem with authentication token.", err);
          setCurrentUser(null);
        }
      }
      setUserLoaded(true);
    }
    setUserLoaded(false);
    getCurrentUser();
  }, [token])

  async function signUp(data) {
    try{
      let token = await JoblyApi.signUp(data);
      setToken(token)
      return{success: true};
    }catch(err){
      console.err("sign-up failed. Please try again", err)
      return {success: false, err}
    }
  }
  
  async function login(data){
    try{
      let token = await JoblyApi.login(data);
      setToken(token)
      return{success: true};
    }catch(err){
      console.err("Login failed. Please try again", err)
      return {success: false, err}
    }
  }

  function logout(){
    setCurrentUser(null);
    setToken(null);
  }

  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyForJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  async function update(data) {
    try{
      let username = currentUser.username
      console.log(username)
      let res = await JoblyApi.updateProfile(username, data)
      console.log(res)
      return{succcess: true};
    }catch(error){  
      console.error("Profile Update did not work, please try again.")
      return {success: false, error}
    }
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar currentUser={currentUser} logout={logout} />
      
        <main className="mainbackground" >
          <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0dGVybnxlbnwwfHwwfHx8MA%3D%3D"
            width="100%"
            height="100%"

          />
          <CardImgOverlay>
            <Routes>
              //Switch has been deprecated, this is why Route replaced Switch with some syntax changes.
             <Route path="/" element={<HomepageOut login={login} register={signUp} currentUser={currentUser} hasAppliedToJob={hasAppliedToJob} applyToJob={applyToJob}/>} />
              <Route path="/login" element={<LoginForm login={login} currentUser={currentUser} />}/>
              <Route path="/signup" element={<SignupForm register={signUp} currentUser={currentUser} login={login}/>}/>
              <Route path="/homepagein" element={<HomepageIn login={login} register={signUp} currentUser={currentUser} hasAppliedToJob={hasAppliedToJob} applyToJob={applyToJob}  />}/>
              <Route path="/profile" element={<ProfileForm currentUser={currentUser} update={update}  />}/>
              <Route path="/companies" element={<CompanyList login={login} register={signUp} currentUser={currentUser}  hasAppliedToJob={hasAppliedToJob} applyToJob={applyToJob} />}/>
              <Route path="/companies/:handle" element={<CompanyDetail category="company" hasAppliedToJob={hasAppliedToJob} applyToJob={applyToJob} />}/>
              <Route path="/jobs" element={<Jobs login={login} register={signUp} currentUser={currentUser}  hasAppliedToJob={hasAppliedToJob} applyToJob={applyToJob} category="jobs" />}/>
            </Routes>
            <p> </p>
          </CardImgOverlay>
          </Card>
        </main>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
