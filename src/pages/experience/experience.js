import React from 'react'
import './experience.css';

class Experience extends React.Component{
  constructor(props){
    super(props)
    this.state = {section: this.techSec()}
  }
  handleClick(e){
    this.setState({section: this[e]()})
  }
  techSec(){
    return(
      <div id="techSec" className="jumbotron">
        <div className="row">
          <h3 className="display-5 col-sm-12 col-md-5 blue text-center mb-5">Technologies</h3>
          <div className="col-sm-12 col-md-4">
            <div className="mb-5">
              <h5>Front-End</h5>
              <ul>
                <li>React</li>
                <ul>
                  <li>Redux</li>
                  <li>JSX</li>
                  <li>Jest TDD/BDD</li>
                  <li>React Router (SPAs)</li>
                </ul>
                <li>JavaScript (ES6 - ES8)</li>
                <ul>
                  <li>jQuery</li>
                  <li>Bootstrap 4</li>
                </ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <ul>
                  <li>SCSS/SASS</li>
                </ul>
              </ul>
            </div>

            <div className="mb-5">
              <h5>Data Analysis</h5>
              <ul>
                <li>Python</li>
                <li>RStudio</li>
                <li>Tableau</li>
                <li>Google Analytics</li>
              </ul>
            </div>
          </div>

          <div className="col-sm-12 col-md-3">
            <div className="mb-5">
              <h5>Back-End</h5>
              <ul>
                <li>Java</li>
                <li>AJAX/JSON</li>
                <li>MySQL</li>
              </ul>
            </div>

            <div className="mb-5">
              <h5>Other Tools</h5>
              <ul>
                <li>Babel</li>
                <li>Webpack</li>
                <li>Node (NPM)</li>
                <li>GIT Version Control</li>
                <li>WordPress CMS</li>
                <li>SugarCRM</li>
                <li>Agile Dev</li>
                <li>Lean/Scrum</li>
                <li>Design Sprints</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  eduSec(){
    return(
      <div id="eduSec" className="jumbotron">
        <div className="row">
          <h3 className="display-5 col-sm-12 col-md-5 orange text-center mb-5">Education</h3>
          <div className="col-sm-12 col-md-7">
            <h5>Long Island University, Brooklyn | 9/14 - 12/17</h5>
            <ul>
              <li className="mb-2">Bachelor of Science in Computer Science with Honors</li>
              <li className="mb-2">Minor in Business Administration</li>
              <li className="mb-2">Cumulative GPA of 3.7 in a 4.0 scale</li>
              <li className="mb-2">Member of the Alpha Chi Honor Society (Top 10% of Class)</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  expSec(){
    return(
      <div id="expSec" className="jumbotron">
        <div className="row">
          <h3 className="display-5 col-sm-12 col-md-5 blue text-center mb-5" >Experience</h3>
          <div className="col-sm-12 col-md-7">
            <h5>Web Development Intern | StoryCorps | 6/16 - 12/16</h5>
            <ul>
              <li className="mb-2">Redesigned and launched a Webby Award Honored website</li>
              <li className="mb-2">Built and launched a social media component</li>
              <li className="mb-2">Created bug reports for the Webby Award nominated, TED
                Prize winning StoryCorps mobile application</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  proSec(){
    return(
      <div id="proSec" className="jumbotron">
        <div className="row">
          <h3 className="display-5 col-sm-12 col-md-5 orange text-center mb-5">Projects</h3>
          <div className="col-sm-12 col-md-7">
            <div className="mb-5">
              <h5>Founder & President | Binder | 2/17 - 12/17</h5>
              <ul>
                <li className="mb-2">Designed a Java-based minimal viable product (MVP)
                  to cut the cost of college text books by up to 36%</li>
                <li className="mb-2">Placed 3rd at the New York State Regional
                  Business Plan Competition (2017)</li>
              </ul>
            </div>

            <div>
              <h5>Co-Founder | WiMove | 1/16 - 8/16</h5>
              <ul>
                <li className="mb-2">Prototyped a wireless mesh network that aimed to
                  eliminate mobile data fees</li>
                <li className="mb-2">Placed 1st in the Brooklyn 'BE.INnovative'
                  Hackathon (2016)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  leadSec(){
    return(
      <div id="leadSec" className="jumbotron">
        <div className="row">
          <h3 className="display-5 col-sm-12 col-md-5 blue text-center mb-5">Leadership</h3>

          <div className="col-sm-12 col-md-7">
            <div className="mb-5">
              <h5>President | LIU Computer Science Club | 9/16 - 5/17</h5>
              <ul>
                <li className="mb-2">Placed 1st at the LIU Showcase (2017) for most
                  creative student organization</li>
                <li className="mb-2">Managed a budget of $3500 for workshops and
                  student projects</li>
              </ul>
            </div>

            <div className="mb-5">
              <h5>Senator | LIU Student Government Association |
                1/17 - 12/17</h5>
              <ul>
                <li className="mb-2">Raised over $40,000 for the American Cancer Society</li>
                <li className="mb-2">Debated on various issues including budgets
                  and administrative actions</li>
              </ul>
            </div>

            <div>
              <h5>Captain | LIU Data Science Team | 1/16 - 5/17</h5>
              <ul>
                <li className="mb-2">Represented Long Island University twice at the yearly
                  Manhatten College Business Analytics Competition</li>
                <li className="mb-2">Analized millions of lines of real-world data and created
                  business solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render(){
    return(
      <div id="bgExp">
        <div className="text-center mt-3">
          <img id='reactLogo' alt='' src={require("./logo.svg")}/>
        </div>

        <div className="bgExpNav jumbotron bg-white">
          <ul id="expNav">
            <li className="expNavItem">
              <button className="expNavLink" id="tech"
                onMouseDown={() => this.handleClick('techSec')}>Technologies</button>
            </li>
            <li className="expNavItem">
              <button className="expNavLink" id="edu"
                onMouseDown={() => this.handleClick('eduSec')}>Education</button>
            </li>
            <li className="expNavItem">
              <button className="expNavLink" id="exp"
                onMouseDown={() => this.handleClick('expSec')}>Experience</button>
            </li>
            <li className="expNavItem">
              <button className="expNavLink" id="pro"
                onMouseDown={() => this.handleClick('proSec')}>Projects</button>
            </li>
            <li className="expNavItem">
              <button className="expNavLink" id="lead"
                onMouseDown={() => this.handleClick('leadSec')}>Leadership</button>
            </li>
          </ul>
        </div>

        <div className="container">{this.state.section}</div>

      </div>
    )
  }
}

export default Experience
