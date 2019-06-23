import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

import './transfer.css';

import Cookies from "universal-cookie";


export default class driver extends Component 
{
    onSubmit(e, adrs)
    {
        e.preventDefault();
        var cookie = new Cookies();
        cookie.set("wantedDriver", adrs);
        alert(adrs);
        window.location = '/transfer';
		window.location='/on'
    }

  render() {
    var cookie = new Cookies();
    var wantedDrivers = cookie.get("wantedDrivers");
    wantedDrivers = wantedDrivers.split("&");
    let drivers = (
        <div>
            {
                wantedDrivers.map((driver, index) => 
                     <Button onClick={(e)=> this.onSubmit(e, driver)} type="submit">Driver {" " + (index+1)}</Button>
                )
            }
        </div>
    );
    return (
    <div className="hero6">
        <center>
            <h1>  <font color="purple"> UBER</font></h1>
            <h2><font color="purple">USER  BLOCKCHAIN  ENABLE  RIDE</font></h2>

            <h2><marquee behavior="scroll" direction="left" >/*Leave Sooner, Drive Slower, Live Longer */</marquee></h2>

            {drivers}

      </center> 
    </div>

    )

  }

}