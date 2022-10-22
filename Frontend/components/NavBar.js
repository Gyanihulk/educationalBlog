import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { urlFor } from "../lib/client";

export const NavBar = ({ data}) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
  
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={urlFor(data[0].image)} alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {data?.map((item)=>(<Nav.Link key={item._id} href="#home" className={activeLink === `${item._type}` ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(`${item._type}`)}>{item.title}</Nav.Link>))}
             
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><Image src={navIcon1} alt="" /></a>
                <a href="#"><Image src={navIcon2} alt="" /></a>
                <a href="#"><Image src={navIcon3} alt="" /></a>
              </div>
              
                <button className="vvd"><span>Let’s Connect</span></button>
              
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}

