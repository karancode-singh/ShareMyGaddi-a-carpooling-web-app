import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from 'prop-types';
import './Signup.css';
import { Link } from "react-router-dom";

// api post call
function signupUser(userDetails) {
  console.log("user details", userDetails);
  // return "Signup Successful"
  //  return fetch('http://localhost:8080/signup', {
  //    method: 'POST',
  //     headers: {
  //     'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(userDetails)
  //   })
  //  .then(data => data.json())

}


export default function Signup(props) {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      password,
      confirmpassword
    }
    const setUserDetails = await signupUser(data);
    console.log(setUserDetails);
    // setToken(token);
  }

  function validateForm() {
    return email.length > 0 && password.length > 0 &&
    firstname.length > 0 && lastname.length > 0 &&
    password === confirmpassword
  }

  return (
    <div className="signup-container">
      <div className="signup-content">
        <Form onSubmit={handleSubmit}>
          <h3 className="heading-text">Sign Up</h3>

          <Form.Group size="lg" controlId="firstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="lastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="confirmpassword">
            <Form.Label>Confirm Password </Form.Label>
            <Form.Control
              autoFocus
              type="password"
              value={confirmpassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button size="lg" type="submit" disabled={!validateForm()} className="signup-button">
            Sign Up
          </Button>
        </Form>
        <Link to='/login' className="login-link">Login</Link>
      </div>
    </div>
  );
  // Login.propTypes = {
  //     setToken: PropTypes.func.isRequired
  //   };

}
