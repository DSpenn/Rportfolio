import React from 'react';
import VcImg from '../../Assets/VibeCloud.jpg';
import MvcImg from '../../Assets/mvc1.jpg';
import FitListImg from '../../Assets/fitlist.jpg';
import { FaCss3, FaHtml5, FaNodeJs,  } from 'react-icons/fa';
import { SiHandlebarsdotjs, SiJavascript } from "react-icons/si";


function Project() {

  function handleClick(e) {
   e.currentTarget.children[0].classList.add("opacity-25");
   e.currentTarget.children[1].classList.remove("invisible");
  }

  function handleMouseLeave(e) {
    e.currentTarget.children[0].classList.remove("opacity-25");
    e.currentTarget.children[1].classList.add("invisible");
   }

  return (
  <section className='justify-content-md-center p-4 container-fluid'>
      <h2 className='title'>Work</h2>
      <div className='row card-group'>
        <div className='col border-1'>
          <div className='card m-3' onClick={handleClick} onMouseLeave={handleMouseLeave}>
            <img className='card-img img-fluid' src={MvcImg} alt='the MVC techblog'></img>
            <div className='card-img-overlay invisible'>
              <a href='https://fathomless-cove-11923.herokuapp.com/'><img src='https://brand.heroku.com/static/media/heroku-logo-stroke-gradient.bb410472.svg' className='img-thumbnail' alt='Heroku Logo mark' style={{ width: '14%' }}></img></a>
              <a href='https://github.com/DSpenn/MVC14/'><img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='img-thumbnail' alt='Github Logo mark' style={{ width: '15%' }}></img></a>
              <p className='card-text'>MVC</p>
              <i className='fab'> <FaNodeJs /> 73% NodeJS <SiHandlebarsdotjs />27% Handlebars </i><br />
            </div>
          </div>
        </div>
        <div className='col border-1'>
          <div className='card' onClick={handleClick} onMouseLeave={handleMouseLeave}>
            <img className='card-img img-fluid' src={FitListImg} alt='The fitlist landing'></img>
            <div className='card-img-overlay invisible'>
              <a href='https://boiling-headland-53434.herokuapp.com'><img src='https://brand.heroku.com/static/media/heroku-logo-stroke-gradient.bb410472.svg' className='img-thumbnail' alt='Heroku Logo mark' style={{ width: '14%' }}></img></a>
              <a href='https://github.com/DSpenn/Project-2'><img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='img-thumbnail' alt='Github Logo mark' style={{ width: '15%' }}></img></a>
              <div className='card-text'>Project #2 Fitlist</div>
              <i className='fab'><FaNodeJs /> 66.5% NodeJS <br /> <SiHandlebarsdotjs /> 27.5% Handlebars</i><br />
              <i className='fab'><FaCss3 /> 6% CSS</i><br />
            </div>
          </div>
        </div>
      </div>

        <div className='row'>
          <div className='col align-self-center border-1'>
            <div className='card p-1' onClick={handleClick} onMouseLeave={handleMouseLeave}>
              <img className='card-img img-fluid mx-auto d-block mb-3' src={VcImg} alt='Vibe cloud project App'></img>
              <div className='card-img-overlay invisible'> 
                <p className='card-text'>Project #1 VibeCloud</p><a href='https://dspenn.github.io/Project1/'>Github Pages</a><br />
                <i className='fab fa-js'><SiJavascript /> 46.5% JavaScript </i><br />
                <i className='fab'><FaHtml5 />   28.5% HTML</i><br />
                <i className='fab'><FaCss3 /> 25% CSS</i><br />
                
                <a href='https://github.com/DSpenn/Project1'>
                <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='img-thumbnail' alt='Github Logo mark' style={{ width: '8%' }}>
                  </img>
                  </a>
                <p>Uses Google Maps API to find restaurants in a zip code provided by the user, as well reviews of those restaurants.<br /> Generates a word cloud from the text of the reviews.</p>
              </div>
          </div>
        </div>
        </div>
      </section>
  );
}

export default Project;