import React from 'react';
import './App.css';
import './components/Bottom';
import './components/Head';
import './components/Module2';
import './components/Module3';

//======BOOTSTRAP IMPORTS===============
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//========================================
//========================================
function App() {
  return (
    <>
      <div>
        {/* Bootstrap Navbar */}
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="signup">
        <h4>Don't let the inconvenience of looking at houses consume you. Take control of your home-buying journey with a house-hunting app that works on YOUR schedule—not an agent’s.</h4>
        {/* Phone sign up  */}
        <label for="phone"></label>
        <input type="tel" id="phone" name="phone" placeholder="Mobile number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
        <input type="submit" value="text me the app" /><br />
        <h7>Disclaimer: U.S. mobile numbers only. Message and data rates apply. I agree to receive a one-time text message containing a link to download the eShowing app at the mobile number I provide above, and I confirm that the mobile number is mine.</h7>
        <br /><hr />
      </div>
      <div>
        <h1>visuals here</h1>
        <h4>First one is a GRAB MAP</h4>
        <h4>second one is a phone screen with app and play button</h4>
        <br /><hr />
      </div>
      <div className="howitworks">
        <h1>How it works:</h1>
      </div>
    </>
  );
}

export default App;
