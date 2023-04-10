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
        <Navbar collapseOnSelect expand="lg" bg="light" variant="inverse">
          <Container>
            <Navbar.Brand href="#home">eShowing</Navbar.Brand>
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
        <h1>Download the eShowing app!</h1>
        <h4>Don't let the inconvenience of looking at houses consume you. Take control of your home-buying journey with a house-hunting app that works on YOUR schedule—not an agent’s.</h4>
        {/* Phone sign up  */}
        <div className="signup-container">
          <label for="phone"></label>
          <input type="tel" id="phone" name="phone" placeholder="Mobile number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          <input type="submit" value="text me the app" /><br /></div>
        <h7>Disclaimer: U.S. mobile numbers only. Message and data rates apply. I agree to receive a one-time text message containing a link to download the eShowing app at the mobile number I provide above, and I confirm that the mobile number is mine.</h7>
        <br /><br />
      </div>
      {/* visuals  */}
      <div className="visuals">
        <h1>visuals here</h1>
        <h4>First one is a GRAB MAP</h4>
        <h4>second one is a phone screen with app and play button</h4>
        <br /><br />
      </div>
      {/* how it works section */}
      <div className="howitworks">
        <h1>How it works:</h1><br />
        <h4>With just a few taps, you can easily search for all available homes in your desired area and schedule a private home tour at your convenience.</h4>
        <h3>STEPS:</h3>
        <h3>Step 1: Search For Homes</h3>
        <p>Simply enter your desired location and browse for available homes in the area. Filter your search based on the number of bedrooms, bathrooms, and other amenities.
          Visual: App screenshot: Search results page, dots
        </p>
        <h3>Step 2: Get More Details</h3>
        <p>See something you like? Click to get details and pictures. Want to schedule a tour? Select "Schedule Tour" at the top of the screen. Put in the time and place of your preference, and we will confirm it with the seller. You will get a confirmation that your showing has been scheduled and all you have to do is show up!
          Visual: App screenshot: House detail page</p>
        <h3>Step 3: Schedule a Showing</h3>
        <p>With our app, you choose the property, and an agent will meet you at the door to give you a private showing. If you like the agent, you can continue working with together. If not, you have the option to choose a different agent. Or no agent.
          Visual: App screenshot: Appointment page
        </p>
        <h4>Step 4: View the Property</h4>
        <p>An agent will meet you at the door to give you a private showing. If you like the agent, you can continue working with together. If not, you have the option to choose a different agent. Or no agent.
          Visual: App screenshot: Confirmation page
        </p><br />
      </div>
      {/* module 3  */}
      <div className="module3head">
        <p> Buyer First Convenience: No need to call an agent. Schedule appointments when you are free and you are matched to an agent who is free at that time.
          Visual: Home icon (sketch of a type of home) </p>

        <p>No Cost: This app is free for people looking for homes. Find homes near you on your terms and without multiple calls or sales pitches.
          Visual: Home icon 2 (different home) </p>
        <p>No Strings: You don’t need to have a dedicated agent to see a property—and you are never committed to the agent who shows you the property.
          Visual: Home icon 3 (another home)
        </p>
      </div><br />
      {/* Phone number 2 section */}
      <div className="phone2">
        <h1>Browse, Schedule and Tour Homes at Your Convenience. Download the eShowing app.</h1>
        <p>Our team of top agents designed this app to make the home-buying process simple, efficient and stress-free for you. Download our app and start your home buying journey today!</p>
        <div className="signup-container">
          <label for="phone2"></label>
          <input type="tel" id="phone" name="phone" placeholder="Mobile number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          <input type="submit" value="text me the app" /><br /></div>
        <p> Disclaimer: U.S. mobile numbers only. Message and data rates apply. I agree to receive a one-time text message containing a link to download the eShowing app at the mobile number I provide above, and I confirm that the mobile number is mine.</p><br />
      </div>
    </>
  );
}

export default App;
