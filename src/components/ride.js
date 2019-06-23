import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './ride.css';
import { withRouter } from 'react-router-dom';
import Cookies from "universal-cookie";
 class Login extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: ""
    };
  }
  validateForm() {
    return this.state.from.length > 0 && this.state.to.length > 0;
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
  let cookie = new Cookies();
  e.preventDefault();
  console.log(this.state.to);
  let data = []; 
  data.push('from='+this.state.from);
  data.push('to='+this.state.to);
  data = data.join('&');
  fetch('/postform4',
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
      cookie.set("wantedDrivers",result.wantedDrivers);
      window.location = "/driver";
    }
    // alert("successful!!!")
    
    //this.props.history.push('/sal');
   // this.props.history.push({
    //  pathname: './ride',
    //  state: {
       // id:12
    //  }
    //});
    console.log(result);
  })
}
  render() {
    return (
    
      <div className="bg" >
      
      <center>
       <h1>  <font color="CadetBlue"> UBER </font></h1><li>
      </li>
<h2><font color="CadetBlue">USER  BLOCKCHAIN  ENABLE  RIDE</font></h2><li>
      </li>
<h2><marquee behavior="scroll" direction="left" >/*Leave Sooner, Drive Slower, Live Longer */</marquee></h2><li>
      </li>
      
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="from" bsSize="large" style={{width:"400px"}}>
           <h2> <ControlLabel>from</ControlLabel></h2>
            <FormControl
              autoFocus
              type="from"
              value={this.state.from}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="to" bsSize="large" style={{width:"400px"}}>
          <h2>  <ControlLabel>to</ControlLabel></h2>
            <FormControl
              value={this.state.to}
              onChange={this.handleChange}
              type="to"
            />
          </FormGroup>
          <li></li>
          
          <Button
          onClick= {(e)=> this.onsubmit(e)}
           
            
            type="submit">
            start
          </Button> 
        </form>
        </center>
      
      </div>
    
    );
  }
}
export default withRouter(Login);