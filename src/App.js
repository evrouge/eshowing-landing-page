import React from 'react';
import './App.css';

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
        <div class="title"><h4>Don't let the inconvenience of looking at houses consume you. Take control of your home-buying journey with a house-hunting app that works on YOUR schedule.</h4><br /></div>
        {/* Phone sign up  */}

      </div><br />
      {/* visuals  */}
      <div className="visuals">
      </div>
      {/* how it works section */}
      <div className="howitworks">
        <h1>How It Works:</h1><br />
        <div class="howitworkstext">
          <h4>With just a few taps, you can easily search for all available homes in your desired area and schedule a private home tour at your convenience!</h4><br /><br /></div>

        <div className='step'>
          <div className='step-text'>
            <p class='text'>Step 1: Search For Homes</p>
            <p>Simply enter your desired location and browse for available homes in the area. Filter your search based on the number of bedrooms, bathrooms, and other amenities.
            </p></div>
          {/* <div class="image-container"> */}
          <img src="https://i.imgur.com/rhW6EXa.jpg" alt="screenshot" id="item-1"></img>
          <img src="https://i.imgur.com/W4Xqlgi.png" id="item-2" />
          {/* </div> */}
        </div><br />

        <div className='step-left'>
          <div class='step-text2'>
            <p class='text'>Step 2: Get More Details</p>
            <p>See something you like? Click to get details and pictures. Want to schedule a tour? Select "Schedule Tour" at the top of the screen. Put in the time and place of your preference, and we will confirm it with the seller. You will get a confirmation that your showing has been scheduled and all you have to do is show up!</p></div>
          {/* <div class="image-container"> */}
          <img src="https://i.imgur.com/BKqQba2.jpg" id="item" />
          <img src="https://i.imgur.com/MHBduyW.png" id="items" />
        </div>
        {/* </div> */}

        <div className='step'>
          <div class='step-text'>
            <p class='text'>Step 3: Schedule a Showing</p>
            <p>With our app, you choose the property, and an agent will meet you at the door to give you a private showing. If you like the agent, you can continue working with together. If not, you have the option to choose a different agent. Or no agent.
            </p></div>
          {/* <div class="image-container"> */}
          <img src="https://i.imgur.com/6JheCj4.jpg" id="item-1" />
          <img src="https://i.imgur.com/5MGrw9T.png" id="item-2" />
          {/* </div> */}
        </div>

        <div className='step-left'>
          <div class='step-text2'>
            <p class='text'>Step 4: View the Property</p>
            <p>An agent will meet you at the door to give you a private showing. If you like the agent, you can continue working with together. If not, you have the option to choose a different agent. Or no agent.
            </p></div>
          {/* <div class="image-container"> */}
          <img src="https://i.imgur.com/ywRfnse.jpg" id="item" />
          <img src="https://i.imgur.com/tCx5EIS.png" id="items" />
          {/* </div> */}
        </div>
        <br /><br /><br />
      </div>

      {/* ICONS  */}
      <div className="module3head">
        <div className="icon-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-heart" viewBox="0 0 16 16">
            <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z" />
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
          <p class="icons"> Buyer First Convenience:</p><p class="icons"> No need to call an agent. Schedule appointments when you are free and you are matched to an agent who is free at that time.</p>
        </div>
        <div className='icon-container'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-slash-fill" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
            <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
            <path d="M13.879 10.414a2.5 2.5 0 0 0-3.465 3.465l3.465-3.465Zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465Zm-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95Z" />
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
        <h1>Browse, Schedule and Tour Homes at Your Convenience. Download the eShowing app!</h1><br />
        <div class="title">
          <p>Our team of top agents designed this app to make the home-buying process simple, efficient and stress-free for you. Download our app and start your home buying journey today!</p></div><br />
      </div>
    </>
  );
}

export default App;
