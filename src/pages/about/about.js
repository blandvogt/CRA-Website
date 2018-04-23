import React from 'react'
import './about.css';
import $ from 'jquery'

class About extends React.Component{
  handleLoad(){
    $('#carControl').animate({
      opacity: 0.0
    }, 10, function(){
      $('#carControl').delay(500).animate({
        opacity: 1.0
      }, 2000, function(){
      });
    });
  }
  render(){
    return(
      <div onLoad={this.handleLoad}>
        <div className="jumbotron">
          <h1 className="text-center display-4">
            My name is <span className="bold blue">Brian</span>.
          </h1>
          <h1 className="text-center display-5 mb-5" id="aboutSubtitle">
            But you already knew that.</h1>
          <div className="container mt-5">
            <div className="row">

              <div className='col-sm-12 col-md-6 mb-5'>
                <div id='carControl' className='carousel slide' data-ride='carousel'>
                  <ol className='carousel-indicators'>
                    <li data-target='#carControl' data-slide-to='0' className='active' href='#carControl'></li>
                    <li data-target='#carControl' data-slide-to='1' href='#carControl'></li>
                    <li data-target='#carControl' data-slide-to='2' href='#carControl'></li>
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img className="d-block w-100" alt=''
                        src={require("../images/books.jpg")}/>
                    </div>
                    <div className='carousel-item'>
                      <img className="d-block w-100" alt=''
                        src={require("../images/fig.jpg")}/>
                    </div>
                    <div className='carousel-item'>
                      <img className="d-block w-100" alt=''
                        src={require("../images/binderMeDawen.jpg")}/>
                    </div>
                  </div>
                  <a className='carousel-control-prev' href='#carControl'
                    role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                  </a>
                  <a className='carousel-control-next' href='#carControl'
                    role='button' data-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                  </a>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 mt-2">
                <h4 className="bold container">I...</h4>
                <ul>
                  <li className="mt-2">am an avid reader</li>
                  <li className="mt-2">consider myself a foodie</li>
                  <li className="mt-2">took guitar and drum lessons as a teenager</li>
                  <li className="mt-2">am a passionate New York sports fan</li>
                </ul>
              </div>
            </div> {/* End of Row */}

          </div> {/* End of Container */}
        </div> {/* End of Jumbotron */}

        <div className="jumbotron bg-white">
          <h1 className="text-center display-4">I'm a
            <span className="bold orange">Web Engineer</span>.</h1>
          <h1 className="text-center display-5" id="aboutSubtitle">
            Wait, there's more.
          </h1>
          <div className="container mt-5">
            <div className="row">


              <div className='col-sm-12 col-md-6 mb-5'>
                <div id='carControl1' className='carousel slide' data-ride='carousel'>
                  <ol className='carousel-indicators'>
                    <li data-target='#carControl1' data-slide-to='0' className='active' href='#carControl1'></li>
                    <li data-target='#carControl1' data-slide-to='1' href='#carControl1'></li>
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img className="d-block w-100" alt=''
                        src={require("../images/webby1_alt.png")}/>
                    </div>
                    <div className='carousel-item'>
                      <img className="d-block w-100" alt=''
                        src={require("../images/webby2_alt.png")}/>
                    </div>
                  </div>
                  <a className='carousel-control-prev' href='#carControl1'
                    role='button' data-slide='prev'>
                    <span className='carousel-control-prev-icon bg-dark' aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                  </a>
                  <a className='carousel-control-next' href='#carControl1'
                    role='button' data-slide='next'>
                    <span className='carousel-control-next-icon bg-dark' aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                  </a>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 mt-2">
                <h4 className="bold container">I...</h4>
                <ul>
                  <li className="mt-2">believe that data-science & machine learning
                    will play a prominant role in the future of web development</li>
                  <li className="mt-2">enjoy the art of product managment because of
                    its emphasis on user interaction</li>
                  <li className="mt-2">want to make an impact in the world of technology
                    through entrepreneurship</li>
                </ul>
              </div>
            </div> {/* End of Row */}

          </div> {/* End of Container */}
        </div> {/* End of Jumbotron */}
      </div>
    )
  } //End of Render
}

export default About
