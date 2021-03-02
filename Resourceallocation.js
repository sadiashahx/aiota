import logo from './logo.svg';
import React, {Component} from 'react';
import { Container, Card, Table, Responsive, CardGroup } from 'react-bootstrap';
import './Resourceallocation.css';


function Resourceallocation() {
  return (
    <div className="container">

<div className="sidebar">

<div className="sidebar-brand">
<h1><span className="fas fa-italic logo"></span>Iota</h1>
</div>

<div className="sidebar-menu">
<ul>
  <li>
    <a href=""><span className="fa fa-home menu-logo"></span>
    <span className="menu-text">Dashboard</span></a>
  </li>

  <li>
    <a className="active_link" href=""><span className="fa fa-window-maximize menu-logo"></span>
    <span className="menu-text">Resource Allocation</span></a>
  </li>

  <li>
    <a href=""><span className="fa fa-square-o menu-logo"></span>
    <span className="menu-text">Overhead</span></a>
  </li>

  <li>
    <a href=""><span className="fa fa-usd menu-logo"></span>
    <span className="menu-text">Expenses</span></a>
  </li>

  <li>    
    <a href=""><span className="fa fa-building-o menu-logo"></span>
    <span className="menu-text">Workload</span>
      <ul className="wrapper">
      <li>Enter Worload</li>
      <li>Show Worload</li>
    </ul></a>   
  </li>

  <li>
    <a href=""><span className="fa fa-paper-plane-o menu-logo"></span>
    <span className="menu-text">Requests</span></a>
  </li>

  <li>
    <a href=""><span className="fa fa-user-o menu-logo"></span>
    <span className="menu-text">Users</span></a>
  </li>

  <li>
    <a href=""><span className="fa fa-file menu-logo"></span>
    <span className="menu-text">Projects</span></a>
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

      <main>

        <div className="main__container">

          <div className="main__greeting">
            <h1 className="main-head">Resource Allocation</h1>
          </div>

      <Card style={{ width: '80rem', height: '28rem' }}>
      <Card.Body>
      <Card.Title>Select Off days</Card.Title>
      <div style={{textAlign: "right"}}>
        <p>Last check in will be clocked after</p>
        <input placeholder="Enter Details"></input>
      </div>
      <Card.Subtitle className="mb-2 text-muted">March, 2021</Card.Subtitle>
      <Card.Text>
      
  
  <Table responsive>
    <thead>
      <tr>
        <th style={{cursor: "pointer"}}>S</th>
        <th>M</th>
        <th>T</th>
        <th>W</th>
        <th>T</th>
        <th>F</th>
        <th>S</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
      </tr>
      <tr>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
      </tr>
      <tr>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
      </tr>
      <tr>
        <td>28</td>
        <td>29</td>
        <td>30</td>
        <td>31</td>
      </tr>
    </tbody>
  </Table>

     

  </Card.Text>
  </Card.Body>
  </Card>
  </div>    
  
      
      
<div className="main1__container" style={{marginTop: "40px"}}>
<CardGroup>
  <Card style={{ width: '35rem', height: '25rem' }}>
    <Card.Body>
      <Card.Title>All Projects</Card.Title>
      <Card.Text>
      <Table responsive="sm">
    <thead>
    </thead>
    <tbody>
      <tr>
        <td>OASIS Phase 02</td>
      </tr>
      <tr>
        <td>Design</td>
      </tr>
      <tr>
        <td>VPN</td>
      </tr>
      <tr>
        <td>Aiota</td>
      </tr>
      <tr>
        <td>Market Place</td>
      </tr>
      <tr>
        <td>Optics</td>
      </tr>
      <tr>
        <td>KHI</td>
      </tr>
    </tbody>
  </Table>       
      </Card.Text>
    </Card.Body>
   </Card >

  <Card style={{ width: '35rem', height: '25rem' }}>
    <Card.Body>
      <Card.Title>OASIS Phase 2</Card.Title>
      <Card.Text>
      <Table responsive="sm">
    <thead>
    </thead>
    <tbody>
      <tr>
        <td>Ahmed Siddique</td>
      </tr>
      <tr>
        <td>Muhammad Danish</td>
      </tr>
      <tr>
        <td>VPN</td>
      </tr>
      <tr>
        <td>Aiota</td>
      </tr>
      <tr>
        <td>Shahnawaz Irfan</td>
      </tr>
      <tr>
        <td>Shayan Nasir</td>
      </tr>
      <tr>
        <td>Moiz Ahsan</td>
      </tr>
    </tbody>
  </Table>       
       
      </Card.Text>
    </Card.Body>


  </Card >

  <Card style={{ width: '55rem', height: '25rem' }}>
    <Card.Body>
      <Card.Title>Ahmed Siddique</Card.Title>
      
      <Card.Text>
        <div>
          <img className="load-img" src="https://flevix.com/wp-content/uploads/2019/07/Comp-2.gif"></img>
          
        </div>
        <div className="card3" style={{textAlign: "center"}}>
          <p>Assigned</p>
          <p>Remaining</p>
        </div>
        <button>Submit</button>


     

      </Card.Text>
    </Card.Body>
  </Card>
  
 
  <div className="profilee">

<div>
<button className="profile">Profile</button>
</div>

<div className="ico">
  <ul>
    <li><a href=""><i className="fa fa-camera icon"></i></a></li>
    <li><a href=""><i className="fa fa-cog icon"></i></a></li>
    <li><a href=""><i className="fa fa-cog icon"></i></a></li>
    <li><a href=""><i className="fa fa-camera icon"></i></a></li>
    <li><a href=""><i className="fa fa-cog icon"></i></a></li>
    
  </ul>
</div>

</div>
  
  
</CardGroup>

     

  </div>   
  </main> 

  




  





      

      </div>





);
}

export default Resourceallocation;