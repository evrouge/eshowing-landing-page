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
        <br /><h1>Download the eShowing app!</h1><br />
        <div class="title"><h4>Don't let the inconvenience of looking at houses consume you. Take control of your home-buying journey with a house-hunting app that works on YOUR schedule — not an agent’s.</h4><br /></div>
        {/* Phone sign up  */}
        <div className="signup-container">
          <label for="phone"></label>
          <input type="tel" id="phone" name="phone" placeholder="Mobile number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          <input type="submit" value="text me the app" /><br /><br /><br /></div>
        <div class='disclaimer'>
          <h7>Disclaimer: U.S. mobile numbers only. Message and data rates apply. I agree to receive a one-time text message containing a link to download the eShowing app at the mobile number I provide above, and I confirm that the mobile number is mine.</h7></div>
        <br /><br /><br /><br />
      </div><br />
      {/* visuals  */}
      <div className="visuals">
      </div>
      {/* how it works section */}
      <div className="howitworks">
        <h1>How It Works:</h1><br />
        <div class="howitworkstext">
          <h4>With just a few taps, you can easily search for all available homes in your desired area and schedule a private home tour at your convenience!</h4><br /><br /></div>
        <p class='text'>Step 1: Search For Homes</p>
        <div className='step'>
          <div className='step-text'>
            <p>Simply enter your desired location and browse for available homes in the area. Filter your search based on the number of bedrooms, bathrooms, and other amenities.
            </p></div>
          <div class="image-container">
            <img src="https://i.imgur.com/rW2PhJk.jpg" alt="screenshot"></img>
          </div>
        </div><br />
        <div className='step'>
          <p class='text'>Step 2: Get More Details</p>
          <div class='step-text2'>
            <p>See something you like? Click to get details and pictures. Want to schedule a tour? Select "Schedule Tour" at the top of the screen. Put in the time and place of your preference, and we will confirm it with the seller. You will get a confirmation that your showing has been scheduled and all you have to do is show up!</p></div>
          <div class="image-container"><img src="https://i.imgur.com/z24DUMf.jpg" /></div>
        </div>
        <div className='step'>
          <p class='text'>Step 3: Schedule a Showing</p>
          <div class='step-text'><p>With our app, you choose the property, and an agent will meet you at the door to give you a private showing. If you like the agent, you can continue working with together. If not, you have the option to choose a different agent. Or no agent.
          </p></div>
          <div class="image-container"><img src="https://i.imgur.com/VLLYqG0.jpg" /></div>
        </div>
        <div className='step'>
          <p class='text'>Step 4: View the Property</p>
          <div class='step-text2'><p>An agent will meet you at the door to give you a private showing. If you like the agent, you can continue working with together. If not, you have the option to choose a different agent. Or no agent.
          </p></div>
          <div class="image-container"><img src="https://i.imgur.com/SGNJivO.jpg" /></div>
        </div>
        <br /><br /><br />
      </div>
      {/* module 3  */}
      <div className="module3head">
        <div className="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-heart" viewBox="0 0 16 16">
            <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z" />
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
          <p class="icons"> Buyer First Convenience:</p><p class="icons"> No need to call an agent. Schedule appointments when you are free and you are matched to an agent who is free at that time.</p>
        </div>
        <div className='icon-container'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
          </svg>
          <p class="icons">No Cost: </p><p class="icons">This app is free for people looking for homes. Find homes near you on your terms and without multiple calls or sales pitches.</p>
        </div>
        <div class='icon-container'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-balloon" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984ZM13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0Zm-6.938-.495a2.003 2.003 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5c0-.276-.226-.504-.498-.459a3.003 3.003 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495Z" />
          </svg>
          <p class="icons">No Strings: </p><p class="icons"> You don’t need to have a dedicated agent to see a property—and you are never committed to the agent who shows you the property.</p>
        </div>
      </div><br /><br /><br />
      {/* Phone number 2 section */}
      <div className="phone2"><br />
        <h1>Browse, Schedule and Tour Homes at Your Convenience. Download the eShowing app.</h1><br />
        <div class="title">
          <p>Our team of top agents designed this app to make the home-buying process simple, efficient and stress-free for you. Download our app and start your home buying journey today!</p></div><br />
        <div className="signup-container">
          <label for="phone2"></label>
          <input type="tel" id="phone" name="phone" placeholder="Mobile number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          <input type="submit" value="text me the app" /><br /><br /></div>
        <br /><div class='disclaimer'>
          <p> Disclaimer: U.S. mobile numbers only. Message and data rates apply. I agree to receive a one-time text message containing a link to download the eShowing app at the mobile number I provide above, and I confirm that the mobile number is mine.</p><br /></div>
      </div>
    </>
  );
}

export default App;
