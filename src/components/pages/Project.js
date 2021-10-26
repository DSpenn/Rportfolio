import React from 'react';
import VcImg from '../../Assets/VibeCloud.jpg';
import MvcImg from '../../Assets/mvc1.jpg';
import WorkoutImg from '../../Assets/Workout.jpg';
import GitHubMark from '../../Assets/GitHub-Mark.png';
import HerokuLogo from '../../Assets/heroku-logo.svg';
import { FaCss3, FaHtml5, FaNodeJs,  } from 'react-icons/fa';
import { SiHandlebarsdotjs, SiJavascript } from "react-icons/si";
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


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
    <Container fluid className='justify-content-md-center p-4'>
      <h2 className='title'>Work</h2>
      <Row className='card-group'>
        <Col className='border-1'>
          <Card className='m-3' onClick={handleClick} onMouseLeave={handleMouseLeave}>
            <Card.Img className='img-fluid' src={MvcImg} alt='the MVC techblog'></Card.Img>
            <Card.ImgOverlay className='invisible'>
              <Card.Link href='https://fathomless-cove-11923.herokuapp.com/'><Image src={HerokuLogo} className='img-thumbnail' alt='Heroku Logo mark' style={{ width: '14%' }}></Image></Card.Link>
              <Card.Link href='https://github.com/DSpenn/MVC14/'><Image src={GitHubMark} className='img-thumbnail' alt='Github Logo mark' style={{ width: '15%' }}></Image></Card.Link>
              <Card.Text>MVC</Card.Text>
              <i className='fab'> <FaNodeJs /> 73% NodeJS <SiHandlebarsdotjs />27% Handlebars </i><br />
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className='border-1'>
          <Card onClick={handleClick} onMouseLeave={handleMouseLeave}>
            <Card.Img className='img-fluid' src={WorkoutImg} alt='Nosql Workout Tracker'></Card.Img>
            <Card.ImgOverlay className='invisible'>
              <Card.Link href='https://limitless-sea-12074.herokuapp.com/'><Image src={HerokuLogo} className='img-thumbnail' alt='Heroku Logo mark' style={{ width: '14%' }}></Image></Card.Link>
              <Card.Link href='https://github.com/DSpenn/Nosql-Workout-Tracker'><Image src={GitHubMark} className='img-thumbnail' alt='Github Logo mark' style={{ width: '15%' }}></Image></Card.Link>
              <Card.Text>Nosql Workout Tracker</Card.Text>
              <i className='fab'><FaNodeJs /> 55.6% NodeJS</i><br />
              <i className='fab'><FaHtml5 /> 19.8% Html     </i>
              <i className='fab'><FaCss3 /> 24.6% CSS</i><br />
              <Card.Text>Using express, mongoose, MongoDB Atlas, morgan</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

        <Row>
          <Col className='align-self-center border-1'>
            <Card className='p-1' onClick={handleClick} onMouseLeave={handleMouseLeave}>
              <Card.Img className='img-fluid mx-auto d-block mb-3' src={VcImg} alt='Vibe cloud project App'></Card.Img>
              <Card.ImgOverlay className='invisible'> 
                <Card.Text>Project #1 VibeCloud</Card.Text><a href='https://dspenn.github.io/Project1/'>Github Pages</a><br />
                <i className='fab'><SiJavascript /> 46.5% JavaScript </i><br />
                <i className='fab'><FaHtml5 />   28.5% HTML </i><br />
                <i className='fab'><FaCss3 /> 25% CSS</i><br />
                <Card.Link href='https://github.com/DSpenn/Project1'>
                <Image src={GitHubMark} className='img-thumbnail' alt='Github Logo mark' style={{ width: '8%' }}></Image></Card.Link>
                <Card.Text>Uses Google Maps API to find restaurants in a zip code provided by the user, as well reviews of those restaurants.<br /> Generates a word cloud from the text of the reviews.</Card.Text>
              </Card.ImgOverlay>
          </Card>
        </Col>
        </Row>
        </Container>
  );
}

export default Project;