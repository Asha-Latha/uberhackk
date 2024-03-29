import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './login2.css';
import Cookies from "universal-cookie";

export default class Login extends Component {
  clicked(){
    alert("sucessful")
    window.location="./ride"
  }
  constructor(props) {
    super(props);

    this.state = {
      accNo: "",
      pswd: "",
      set: false
    };
  }

  validateForm() {
    return true;
    // return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  onsubmit(e)
  {
    e.preventDefault();
    // console.log(this.state.accNo+"  "+this.state.pswd);
    this.setState({
      set: true
    });
    let data = [];
    data.push('accNo='+this.state.accNo);
    data.push('pswd='+this.state.pswd);
    data = data.join('&');
    let cookie = new Cookies();
    fetch('/userLoginForm',
    {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body : data
    })
    .then((data) => {
      return(data.json());
    })
    .then((result) => {
      if(result.code === 200)
      {
        cookie.set('user', result.cookie, { path: '/' });
        alert("successfull");
        window.location = "/ride";//AfterLoginuser
        // console.log(result);
      }
      else
      {
        this.setState({
          set: false
        });
        alert("Incorrect Credentials Provided!!! Please Check!!!");
      }
    })
  }
  render() {
    return (
     

      <div className="hero1" >
      
      <center>
       <h1>  <font color="purple"> UBER </font></h1><li>
      </li>

<h2><font color="purple">USER  BLOCKCHAIN  ENABLE  RIDE</font></h2><li>
      </li>

<h2><marquee behavior="scroll" direction="left" >/*Leave Sooner, Drive Slower, Live Longer */</marquee></h2><li>
      </li>
      
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="accNo" bsSize="large" style={{width:"400px"}}>
           <h2> <ControlLabel>Account Number</ControlLabel></h2>
            <FormControl
              autoFocus
              type="text"
              value={this.state.accNo}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="pswd" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>Password</ControlLabel></h2>
            <FormControl
              value={this.state.pswd}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <li></li>
          
          <Button
          onClick={(e)=> this.onsubmit(e)}
            disabled={!this.validateForm() && this.state.set}
             type="submit">
            Login 
          </Button> 
        </form>
        </center>
      
      </div>
    
    );
  }
}