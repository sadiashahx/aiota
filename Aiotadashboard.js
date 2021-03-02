import logo from './logo.svg';
import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import './Aiotadashboard.css';


function Aiotadashboard() {
  return (

    <div>
    
      <div className="sidebar">

        <div className="sidebar-brand">
        <h1><span className="fas fa-italic logo"></span>Iota</h1>
        </div>

        <div className="sidebar-menu">
        <ul>
          <li>
            <a className="active_link" href=""><span className="fa fa-home menu-logo"></span>
            <span className="menu-text">Dashboard</span></a>
          </li>

          <li>
            <a href=""><span className="fas fa-italic menu-logo"></span>
            <span className="menu-text">Monthly Statistics</span></a>
          </li>

          <li>
            <a href=""><span className="fas fa-italic menu-logo"></span>
            <span className="menu-text">Attendance</span></a>
          </li>

          <li>
            <a href=""><span className="fas fa-italic menu-logo"></span>
            <span className="menu-text">My Requests</span></a>
          </li>

          <li>
            <a href=""><span className="fas fa-italic menu-logo"></span>
            <span className="menu-text">Workload</span></a>
          </li>

         </ul>      
         </div>

    </div>

    <nav className="navbar">
      <div className="nav-icon1" onClick="toggleSlider()">
        <i></i>
      </div>

      <div className="navbar-left">
        <a className="active_link" href="#"></a>
      </div>

      <div className="navbar-right">
        <a href="#">
          <i className="fa fa-bell nav-icon"></i>
        </a>
        <a href="#">
          <i className="fa fa-search nav-icon"></i>
        </a>
        <a href="#">
          <i className="fa fa-user nav-icon">Mohsin Siddique</i>
        </a>
      </div>
      </nav>


      

  

















    </div>




);
}

export default Aiotadashboard;