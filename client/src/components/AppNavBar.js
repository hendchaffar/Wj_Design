import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Input,
  Button,
  Form,

} from 'reactstrap';
import LoginModal from './auth/LoginModal';
import RegisterModal from './auth/RegisterModal';

import { logout } from '../js/actions/authAction';

const AppNavBar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const user = useSelector((state) => state.authReducer.user);

  const toggle = () => setIsOpen(!isOpen);

  const logoutUser = () => {
    dispatch(logout());
  };

  const authLinks = (
    <Fragment>
      <div style={{ width:"300px",margin:"10px"}}>
      <NavItem style={{display:'flex', flexDirection:'row'}}>
        
          <span className="navbar-text mr-3">
            <strong >{(user && user.role==="user") ? 
            <div style={{display:'flex', flexDirection:'row'}}>
              <Link to="/">{ `Welcome ${user.name}`}</Link> 
              <Link  to="/Panier"><img width= "30px" height='30px'  src="panier.png">
                </img></Link></div>
            :<Link to="/dashboard">Dashboard</Link>}
            </strong>
          </span>
        
        <NavLink href="#" onClick={logoutUser}>
        {' '}

        Logout

      </NavLink>
      </NavItem>
    


      </div>
      
    </Fragment>
  );

  const guestLinks = (
    <Fragment >
      <NavItem className='pr-2'>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar expand="sm"className=" bg-dark justify-content-between"> 
      
         <NavbarBrand href="/"><img style={{width:"200px", height:"50px"}} src="wjLogo.png"></img></NavbarBrand>
     {/* <h1>WJ-Design</h1> */}
          {/* <Form style={{ border:"1px solid red",width:"200px",display:'flex',flexDirection:'row'}} inline>
    <Input  style={{ border:"1px solid red",width:"900px"}} type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
  </Form> */}
          
          {/* <NavbarToggler onClick={toggle} /> */}
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuth ? authLinks : guestLinks}
            </Nav>
          </Collapse>
       
      
      </Navbar>
    </div>
  );
};

export default AppNavBar;