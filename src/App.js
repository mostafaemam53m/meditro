
import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavnbar from "./component/MainNavbar";
import Home from "./component/pages/Home";
import About from "./component/pages/AboutUs";
import OurTeam from "./component/pages/OurTeam";
import FAQ from "./component/pages/FAQ";
import Booking from "./component/pages/Booking";
import LoginRegister from "./component/pages/LoginRegister";
import Error404 from "./component/pages/Error404";
import ContactUs from "./component/pages/ContactUs";
import Footer from "./component/Footer";
import MoveUpButton from "./component/MoveUpButton";
import Testimonial from "./component/Testimonial";
class App extends Component {
  // state containe name of all pages and link to get dynamic links in all site
  state = {
    Home: { name: "Home", link: "/" },
    About: { name: "About Us", link: "/About" },
    OurTeam: { name: "OurTeam", link: "/ourTeam" },
    FAQ: { name: "FAQ's", link: "/FAQ's" },
    Booking: { name: "Booking", link: "/Booking" },
    Login: { name: "Login/Register", link: "/Login" },
    Error404: { name: "Error 404", link: "*" },
    ContactUs: { name: "Contact Us", link: "/ContactUs" }
  }


  render() {
    return (


      <BrowserRouter>
        <MainNavnbar all_Links={this.state} />
        <Routes>
          <Route path={this.state.Home.link} element={<Home Home={this.state.Home} />} />
          <Route path={this.state.About.link} element={<About About={this.state.About} />} />
          <Route path={this.state.OurTeam.link} element={<OurTeam OurTeam={this.state.OurTeam} />} />
          <Route path={this.state.FAQ.link} element={<FAQ FAQ={this.state.FAQ} />} />
          <Route path={this.state.Booking.link} element={<Booking Booking={this.state.Booking} />} />
          <Route path={this.state.Login.link} element={<LoginRegister Login={this.state.Login} />} />
          <Route path={this.state.ContactUs.link} element={<ContactUs ContactUs={this.state.ContactUs} />} />

          <Route path={this.state.Error404.link} element={<Error404 Error404={this.state.Error404} />} />


        </Routes>
        <MoveUpButton />
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
