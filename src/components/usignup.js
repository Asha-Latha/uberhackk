import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./usignup.css";
export default class Signup extends Component {
  clicked(){
    alert("sucessful")
  }
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      pswd: "",
      rpswd:"",
      mobNo: "",
      set: false
    };
  }
  validateForm() {
    return this.state.pswd === this.state.rpswd;
    // return this.state.email.length > 0 && this.state.password.length > 0 && this.state.cnp.length>0  && this.state.phoneno.length>0 &&  this.state.address.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
  }

  onsubmit(e) {
  e.preventDefault();
  this.setState({
    set: true
  });
  // console.log(this.state.password);
  let data = []; 
  data.push('name='+this.state.name);
  data.push('emailId='+this.state.email);
  data.push('pswd='+this.state.pswd);
  data.push('rpswd='+this.state.rpswd);
  data.push('mobNo='+this.state.mobNo);
  
  data = data.join('&');
  fetch('/postform',
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
    alert("successful")
    window.location = "/login2";
    console.log(result);
  })
}
//this.props.history.push('/sal');
//this.props.history.push({
  // state: {
    // id:12
  // pathname: './ride',
  //}
// });
  render() {
    return (
      <div className="hero4">
      <center>
       <h1>  <font color="purple"> UBER </font></h1><li>
      </li>
<h2><font color="purple">USER  BLOCKCHAIN  ENABLE  RIDE</font></h2><li>
      </li>
<h2><marquee behavior="scroll" direction="left" >/*Leave Sooner, Drive Slower, Live Longer */</marquee></h2><li>
      </li>
     
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="name" bsSize="large" style={{width:"400px"}}>
           <h2> <ControlLabel>Name</ControlLabel></h2>
            <FormControl
              autoFocus
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large" style={{width:"400px"}}>
           <h2> <ControlLabel>Email</ControlLabel></h2>
            <FormControl
              type="email"
              value={this.state.email}
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
          <FormGroup controlId="rpswd" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>Re-Type Password</ControlLabel></h2>
            <FormControl
              value={this.state.rpswd}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="mobNo" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>Mobile Number</ControlLabel></h2>
            <FormControl
              value={this.state.mobNo}
              onChange={this.handleChange}
              type="phoneno"
            />
          </FormGroup>
        
          <Button
            onClick= {(e)=> this.onsubmit(e)}
            disabled={!this.validateForm() || this.state.set}
            type="submit">
            Signup 
          </Button> 
        </form>
        </center>
      </div>
    );
  }
}