import React from 'react';
import VcImg from '../../Assets/VibeCloud.jpg';
import MvcImg from '../../Assets/mvc1.jpg';
import FitListImg from '../../Assets/fitlist.jpg';
import { FaCss3, FaHtml5, FaNodeJs,  } from 'react-icons/fa';
import { SiHandlebarsdotjs, SiJavascript } from "react-icons/si";
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

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
          <Card className='m-3' onClick={handleClick} onMouseLeave={handleMouseLeave}>
            <Card.Img className='img-fluid' src={MvcImg} alt='the MVC techblog'></Card.Img>
            <Card.ImgOverlay className='invisible'>
              <a href='https://fathomless-cove-11923.herokuapp.com/'><Image src='https://brand.heroku.com/static/media/heroku-logo-stroke-gradient.bb410472.svg' className='img-thumbnail' alt='Heroku Logo mark' style={{ width: '14%' }}></Image></a>
              <a href='https://github.com/DSpenn/MVC14/'><Image src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='img-thumbnail' alt='Github Logo mark' style={{ width: '15%' }}></Image></a>
              <Card.Text>MVC</Card.Text>
              <i className='fab'> <FaNodeJs /> 73% NodeJS <SiHandlebarsdotjs />27% Handlebars </i><br />
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className='col border-1'>
          <Card onClick={handleClick} onMouseLeave={handleMouseLeave}>
            <Card.Img className='img-fluid' src={FitListImg} alt='The fitlist landing'></Card.Img>
            <Card.ImgOverlay className='invisible'>
              <a href='https://boiling-headland-53434.herokuapp.com'><Image src='https://brand.heroku.com/static/media/heroku-logo-stroke-gradient.bb410472.svg' className='img-thumbnail' alt='Heroku Logo mark' style={{ width: '14%' }}></Image></a>
              <a href='https://github.com/DSpenn/Project-2'><Image src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='img-thumbnail' alt='Github Logo mark' style={{ width: '15%' }}></Image></a>
              <Card.Text>Project #2 Fitlist</Card.Text>
              <i className='fab'><FaNodeJs /> 66.5% NodeJS <br /> <SiHandlebarsdotjs /> 27.5% Handlebars</i><br />
              <i className='fab'><FaCss3 /> 6% CSS</i><br />
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>

        <div className='row'>
          <div className='col align-self-center border-1'>
            <Card className='p-1' onClick={handleClick} onMouseLeave={handleMouseLeave}>
              <Card.Img className='img-fluid mx-auto d-block mb-3' src={VcImg} alt='Vibe cloud project App'></Card.Img>
              <Card.ImgOverlay className='invisible'> 
                <Card.Text>Project #1 VibeCloud</Card.Text><a href='https://dspenn.github.io/Project1/'>Github Pages</a><br />
                <i className='fab fa-js'><SiJavascript /> 46.5% JavaScript </i><br />
                <i className='fab'><FaHtml5 />   28.5% HTML</i><br />
                <i className='fab'><FaCss3 /> 25% CSS</i><br />
                <a href='https://github.com/DSpenn/Project1'>
                <Image src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='img-thumbnail' alt='Github Logo mark' style={{ width: '8%' }}></Image>
                </a>
                <Card.Text>Uses Google Maps API to find restaurants in a zip code provided by the user, as well reviews of those restaurants.<br /> Generates a word cloud from the text of the reviews.</Card.Text>
              </Card.ImgOverlay>
          </Card>
        </div>
        </div>
      </section>
  );
}

export default Project;