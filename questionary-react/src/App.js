import React from 'react';
import './Heading.css';
import './stylesheet.css';
import './navbar.css';
import src from './cdac-image.jpg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';




function App() {
  return (
  <Router>
    {/*Navigation Link*/}
    <div class="row">
		<div class="col adjustment">
				<img id="logo" src="logo.png"/>
				<h1 id="adj">The.Questionary.Stockpile</h1>
		</div>
	  </div>
    <div className="row">
          <div className="container-fluid Topnav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Java">Java</Link></li>
              <li><Link to="/Database">Database</Link></li>
              <li><Link to="/Web Technology">Web Technology</Link></li>
              <li><Link to="/Bank Bank">Question Bank</Link></li>
			        <li><Link to="/Workspace">Workspace</Link></li>
            </ul>
          </div>
        </div>

   {/*Navogation Link*/}
      <Route exact path="/">
            <Homepage />
      </Route>

      <Route path="/Java">
            <Java />
      </Route>
      
  </Router>
  );
}

function Homepage()
{
  return (<div className="row container-fluid">
    <div className="col-2 columnmodific">
				<ol>
						<li><a href="#Q1">Welcome To Module Question Bank.....</a></li>
						<hr/>
						<h5>Follow us on</h5>
					<a href="https://www.cdac.in/index.aspx?id=mumbai">
					<img alt="cdac-mumbai" src="CDAC-icon.jpg" width="10%" height="10%" style={{paddingLeft: '2%'}} />
					</a>

					<a href="https://www.facebook.com/cdacmumbai">
						<img alt="cdac-facebook" src="facebook-icon.png" width="10%" height="10%" style={{paddingLeft: '2%'}}/>
						</a>

					<a href="https://www.linkedin.com/in/c-dac-mumbai-4b26111ba/">
						<img alt="cdac-linkedin" src="linkedin-icon.png" width="10%" height="10%" style={{paddingLeft: '2%'}}/>						</a>

					<a href="https://twitter.com/cdacmumbai?lang=en">
						<img alt="cdac-twitter" src="twitter-icon.png" width="10%" height="10%" style={{paddingLeft: '2%'}} />
						</a>
				<hr/>
							<p className="timeDisplay">Time is Money....
							<time class="timeDisplay"id="time"></time></p>
				<hr/>
				</ol>
				
		</div>
		
		<div className="col-10 section" className="add">
       <div className="section">
               <p>
                      <h4 style={{color:'teal'}}>C-DAC MUMBAI</h4><hr/>

                      <img src={src} style={{float: 'right', height: '28%', width: '36%', border: '4px outset'}} />


                    &emsp; &emsp; &emsp; C-DAC, Mumbai (formerly National Centre for Software Technology) was established in the year 1985 as a National Laboratory, for R&D in Software Technology. Currently, the centre is having its offices in Juhu (Mumbai), Kharghar (Navi Mumbai) and Nariman Point (Mumbai)<br />

                    &emsp; &emsp; &emsp; From the decades, the centre is carrying out R&D in Software-intensive System and Technologies for various sectors. This has help C-DAC to Enhance India's role as a leader in Software Engineering and Allied Disciplines. Govt. of India which aims to make all Government services accessible to the common man in his locality, through common service delivery on state and national level.<br />

                    Apart from this, centre is also involved in Language Computing, Computer Networks and Internet Engineering, IT Systems and Solutions, Knowledge based Computer Systems, Educational Technology Unit, Open Source Software and Biometrics.Since 2011-2012, CDAC Mumbai is offering the well-established 6 months’ full-time Post-Graduate Diploma in Advanced Computing (PG-DAC) and Mobile Computing (PG-DMC) for MSc/MCA/Engineering graduates.<br />
                    
                    &emsp; &emsp; &emsp; Every year, two batches of these courses are commenced in August and February. Students are admitted through the national admission test, C-CAT.
                    With the right blend of academic and industry-oriented pedagogy, C-DAC Mumbai has always achieved excellent placement records of up to 100%.
                    The educational role of the centre conducts a well-established One-year Full-time Diploma in the field of Advanced Software Technology (FPGDST) for graduates and a Six-month Part-time Diploma in the field of Information Security (PGDIS).<br/>					
                  </p>
       </div>
  </div>
  </div>
    );
}

function Java()
{
  return (<div> 
    <div>
    <h1> Hello React</h1>
    <p>fegsndfiubsifubgvisrgniujnkjfnknk <br/><hr/>
      gjnfdgiuhriugnrignjfkngfdnbfnbkfsnbsnfgbjnbkjfnbkjn</p>
      </div> 
      
    </div>
    );
}

export default App;
