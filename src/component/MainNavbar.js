import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import './MainNabar.css';
import logo from "../Assets/logo.png"
import { NavLink } from "react-router-dom";

const MainNavnbar = (props) => {
    let Home = props.all_Links.Home;
    let AboutUs = props.all_Links.About;
    let ourTeam = props.all_Links.OurTeam;
    let FAQ = props.all_Links.FAQ;
    let Booking = props.all_Links.Booking;
    let Error404 = props.all_Links.Error404;
    let Login = props.all_Links.Login;
    let ContactUs = props.all_Links.ContactUs;






    return (
        <Navbar expand="lg">
            <Container >
                <Navbar.Brand href={Home.link}><img src={logo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
                    <Nav className="me-auto  gap-3" >
                        <NavLink to={Home.link}>{Home.name}</NavLink>
                        <NavDropdown title="Pages" id="basic-nav-dropdown" >

                            <NavDropdown.Item href={AboutUs.link}>{AboutUs.name}</NavDropdown.Item>
                            <NavDropdown.Item href={ourTeam.link}>{ourTeam.name}</NavDropdown.Item>
                            <NavDropdown.Item href={FAQ.link}>{FAQ.name}</NavDropdown.Item>
                            <NavDropdown.Item href={Booking.link}> {Booking.name}</NavDropdown.Item>
                            <NavDropdown.Item href={Error404.link}> {Error404.name}</NavDropdown.Item>
                            <NavDropdown.Item href={Login.link}>{Login.name}</NavDropdown.Item>


                        </NavDropdown>

                        <NavDropdown title="Services" id="basic-nav-dropdown2" >

                            <NavDropdown.Item href="#action/3.1">Service</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Service Detail</NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Blog" id="basic-nav-dropdown3" >
                            <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Blogs Detalis </NavDropdown.Item>

                        </NavDropdown>
                        <NavLink to={ContactUs.link}>{ContactUs.name}</NavLink>
                        <NavLink to="#serch"> serach</NavLink>
                        {/* <Nav.Link href="">icon +20 01019522874</Nav.Link> */}
                        <Nav.Link to="#mo"> <button className="btn-contact">Contact Us <span>V</span></button></Nav.Link>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default MainNavnbar;