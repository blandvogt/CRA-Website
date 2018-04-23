import React from 'react'
import './home.css'
import $ from 'jquery'

class Home extends React.Component{
  handleLoad(){
    $('#pic_me').animate({
      opacity: 0.5,
      marginLeft: 100
    }, 10, function(){
      $('#pic_me').delay(200).animate({
        opacity: 1.0,
        marginLeft: 0
      }, 1500, function(){
      });
    });

    $('.homeName').animate({
      opacity: 0.5,
      marginRight: 100
    }, 10, function(){
      $('.homeName').delay(200).animate({
        opacity: 1.0,
        marginRight: 0
      }, 1500, function(){
      });
    });

    $('#homeLead').animate({
      opacity: 0.0
    }, 10, function(){
      $('#homeLead').delay(500).animate({
        opacity: 1.0
      }, 1500, function(){
      });
    });
  //End of handleLoad
  }

  render(){
    return(
      <div id="bgHome" onLoad={this.handleLoad}>
        <div className="jumbotron bg-transparent row text-right"
          id="homeJumbotron">
          <div className="col-sm-12 col-md-7">
            <div className="homeDisplay">
              <h1 className="homeName">Brian</h1>
              <h1 className="homeName">Landvogt</h1>
            </div>
            <p className="lead" id="homeLead">
              Web Engineer | Entrepreneur | Leader
            </p>
          </div>
          <div className="col-sm-12 col-md-5 text-left">
            <img className="pic_me" alt="" id="pic_me"
              src={require("../images/pic_me.jpg")}/>
          </div>
        </div>
        <div className="container">
          <div className="row mt-3 mb-3">
            <div className="col-xs-12 col-sm-4 text-center">
              <a href="https://github.com/blandvogt">
                <img className='icon' alt='' src={require('./github.svg')}/>
              </a>
            </div>

            <div className="col-xs-12 col-sm-4 text-center">
              <a href="https://www.facebook.com/brian.landvogt">
                <img className='icon' alt='' src={require('./linkedIn.svg')}/>
              </a>
            </div>

            <div className="col-xs-12 col-sm-4 text-center">
              <a href="https://www.linkedin.com/in/brian-landvogt-9bb7a2120">
                <img className='icon' alt='' src={require('./facebook.svg')}/>
              </a>
            </div>
          </div> {/* End of Row */}
        </div> {/* End of Container*/}

      </div>
    );
  }
}

export default Home
