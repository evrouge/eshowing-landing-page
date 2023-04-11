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
              </Nav>
              <Nav>
                <Nav.Link href="#deets">How It Works</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Download
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
        <h4>MAP</h4>
        <h4>phone screen with app and play button</h4>
        <br /><br />
      </div>
      {/* how it works section */}
      <div className="howitworks">
        <h1>How It Works:</h1><br />
        <h4>With just a few taps, you can easily search for all available homes in your desired area and schedule a private home tour at your convenience.</h4><br />
        <h3>Step 1: Search For Homes</h3>
        <p>Simply enter your desired location and browse for available homes in the area. Filter your search based on the number of bedrooms, bathrooms, and other amenities.
          Visual: App screenshot: Search results page, dots
        </p>
        <img src="https://i.imgur.com/rW2PhJk.jpg" alt="screenshot"></img>
        <h3>Step 2: Get More Details</h3>
        <p>See something you like? Click to get details and pictures. Want to schedule a tour? Select "Schedule Tour" at the top of the screen. Put in the time and place of your preference, and we will confirm it with the seller. You will get a confirmation that your showing has been scheduled and all you have to do is show up!
          Visual: App screenshot: House detail page</p>
        <div class="imgcontainer"><img src="https://i.imgur.com/z24DUMf.jpg" class="center" /></div>
        <h3>Step 3: Schedule a Showing</h3>
        <p>With our app, you choose the property, and an agent will meet you at the door to give you a private showing. If you like the agent, you can continue working with together. If not, you have the option to choose a different agent. Or no agent.
          Visual: App screenshot: Appointment page
        </p>
        <div class="imgcontainer"><img src="https://i.imgur.com/VLLYqG0.jpg" /></div>
        <h4>Step 4: View the Property</h4>
        <p>An agent will meet you at the door to give you a private showing. If you like the agent, you can continue working with together. If not, you have the option to choose a different agent. Or no agent.
          Visual: App screenshot: Confirmation page
        </p>
        <div class="imgcontainer"><img src="https://i.imgur.com/SGNJivO.jpg" /></div>
        <br />
      </div>
      {/* module 3  */}
      <div className="module3head">
        <div className="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
          <p class="icons"> Buyer First Convenience:</p><p class="icons"> No need to call an agent. Schedule appointments when you are free and you are matched to an agent who is free at that time.</p>
        </div>
        <div className='icon-container'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
          </svg>
          <p class="icons">No Cost: </p><p class="icons">This app is free for people looking for homes. Find homes near you on your terms and without multiple calls or sales pitches.</p>
        </div>
        <div class='icon-container'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-houses" viewBox="0 0 16 16">
            <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708L5.793 1Zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207l-4.5-4.5Z" />
          </svg>
          <p class="icons">No Strings: </p><p class="icons"> You don’t need to have a dedicated agent to see a property—and you are never committed to the agent who shows you the property.</p>
        </div>
      </div><br /><br /><br />
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
