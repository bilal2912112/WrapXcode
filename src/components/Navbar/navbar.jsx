import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import TitleImage from '../Navbar/Assets/Asset-1.png'


import { Link,NavLink } from 'react-router-dom'
const navbar = () => {
  return (
    
    // <Navbar bg="dark" className='text-uppercase'>
    // <Container fluid>
      
    //   <Navbar.Brand href="#"><img className='ms-5' src={TitleImage} width="40%"  height="auto"/></Navbar.Brand>
    //   <Navbar.Toggle aria-controls="navbarScroll" className='position-absolute top-70 end-0 me-3 bg-light' />
    //   <Navbar.Collapse id="navbarScroll">
    //     <Nav
    //       className="bg-dark  rounded navi"
    //       style={{ maxHeight: '100px' }}
    //       navbarScroll
    //       >
    <>
    <Navbar bg="dark p-0"  expand="lg">
      <Container fluid>
   
      <Navbar.Toggle aria-controls="navbarScroll" className='position-absolute top-70 end-0 me-3 bg-light' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-5 my-2 my-lg-4"
            style={{ maxHeight: '50px' }}
            navbarScroll
          >
          <Nav.Link  ><NavLink className='text-light  fw-bold text-decoration-none '  to="/" >
          Home
          </NavLink></Nav.Link>
          
          <NavDropdown className='text-light droppe ' title="Services" to="/services" >
            <NavDropdown.Item> <NavLink to="/webDesign"  className='text-black text-decoration-none  '>Web Design</NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink to="/services" className='text-black text-decoration-none  '>Online Marketing</NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink to="/services" className='text-black text-decoration-none  '>E-Commerce</NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink to="/services" className='text-black text-decoration-none'>Support And Maintaince</NavLink></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link  >
        <NavLink className='text-light  fw-bold text-decoration-none ' to="/portfolio" >
          Portfolio
          </NavLink>
          </Nav.Link>
          <h6 className='text-light'>Our products</h6>
        <NavDropdown className='droppe fw-bold' id="navbarScrollingDropdown"   >
          
          
        <NavDropdown.Item ><NavLink to="/services" className='text-black text-decoration-none  '>Business & sales manager</NavLink></NavDropdown.Item>
        <NavDropdown.Item ><NavLink to="/services" className='text-black text-decoration-none  '>Grab Digital Client</NavLink></NavDropdown.Item>
        <NavDropdown.Item ><NavLink to="/services" className='text-black text-decoration-none '>Ahsan Logistics</NavLink></NavDropdown.Item>
            
        </NavDropdown>

        <Nav.Link  >
        <NavLink className='text-light text-decoration-none   fw-bold' to="/about" >
          About
          </NavLink>
          </Nav.Link>
        <NavDropdown className='text-light' title="Resources" >
            <NavDropdown.Item ><NavLink to="/faq" className='text-black text-decoration-none  '>FAQ</NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink to="/blog" className='text-black text-decoration-none  '>Blog</NavLink></NavDropdown.Item>
        </NavDropdown>
       
          <Nav.Link >
            <NavLink className='text-light text-decoration-none  fw-bold  ' to="/contact" >
          Contact
          </NavLink>
            
          </Nav.Link>
        </Nav>
        <a title="						" href="https://brickhousewebdesign.com/services/"><span>Services</span><span role="presentation" class="dropdown-menu-toggle"><span class="gp-icon icon-arrow"><svg viewBox="0 0 330 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515z"></path></svg></span></span></a>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  </>

  
  )
}

export default navbar
