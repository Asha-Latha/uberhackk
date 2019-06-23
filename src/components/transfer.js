import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

import './transfer.css';

import Cookies from "universal-cookie";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      driver: "",
      user: ""
    };
  }
  clicked(){
    var data = [];
    var cookie  = new Cookies();
    var from  = cookie.get("user").split("&");
    from = from[0];
    alert(from);
    var to = cookie.get("wantedDriver");
    alert(to);
    data.push("from=" + from);
    data.push("to=" + to);
    data = data.join("&");
    alert(data);
    fetch('/transfer',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type' : 'application/x-www-form-urlencoded'
      },
      body: data
    })
    .then((data) => {
      return(data.json());
    })
    .then((result) => {
      alert("successful")
      cookie.remove('user');
      cookie.remove('wantedDrivers');
      cookie.remove('wantedDriver');
      cookie.remove('driver');
      window.location = "/home";
      console.log(result);
    })
    alert("You Have Transferred ")
   // alert("Your Id Is ")
  }

  render() {

    return (
<div className="hero6">
         <center>

          <li></li>
       <h1>  <font color="purple"> UBER</font></h1><li>
      </li>
      <h2><font color="purple">USER  BLOCKCHAIN  ENABLE  RIDE</font></h2><li></li>

<h2><marquee behavior="scroll" direction="left" >/*Leave Sooner, Drive Slower, Live Longer */</marquee></h2><li></li>

<div>
<button onClick={this.clicked} type = "submit" >Transfer</button></div>
        <li></li>
 

      </center> 
      </div>

    )

  }

}