import React from 'react';
import VcImg from '../../Assets/VibeCloud.jpg';
import MvcImg from '../../Assets/mvc1.jpg';
import FitListImg from '../../Assets/fitlist.jpg';

//Application has a `Project` component that’s used multiple times in the Portfolio section.

function Project() {

  document.querySelectorAll('.card').forEach(item => {

    item.addEventListener('click', event => {
      item.children[0].classList.add("opacity-25");
      item.children[1].classList.remove("invisible");
    })
  
    item.addEventListener('mouseleave', event => {
        setTimeout(function() {   // reset after a short delay
          item.children[0].classList.remove("opacity-25");
          item.children[1].classList.add("invisible");
        }, 1000);
    })
  
  })
  


  return (
  <section class='justify-content-md-center p-4 container-fluid'>
      <h2 class='title'>Work</h2>
      <div class='row card-group'>
        <div class='col border-1'>
          <div class='card'>
            <img class='card-img' src={MvcImg} alt='the MVC techblog'></img>
            <div class='card-img-overlay invisible'>
              <a href='https://fathomless-cove-11923.herokuapp.com/'><img src='https://brand.heroku.com/static/media/heroku-logo-stroke-gradient.bb410472.svg' class='img-thumbnail' alt='Heroku Logo mark' style={{ width: '14%' }}></img></a>
              <a href='https://github.com/DSpenn/MVC14/'><img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' class='img-thumbnail' alt='Github Logo mark' style={{ width: '15%' }}></img></a>
              <p class='card-text'>MVC</p>
              <i class='fab fa-node'> 73% NodeJS <br /> 27% Handlebars</i><br />
            </div>
          </div>
        </div>
        <div class='col border-1'>
          <div class='card'>
            <img class='card-img' src={FitListImg} alt='The fitlist landing'></img>
            <div class='card-img-overlay invisible'>
              <a href='https://boiling-headland-53434.herokuapp.com'><img src='https://brand.heroku.com/static/media/heroku-logo-stroke-gradient.bb410472.svg' class='img-thumbnail' alt='Heroku Logo mark' style={{ width: '14%' }}></img></a>
              <a href='https://github.com/DSpenn/Project-2'><img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' class='img-thumbnail' alt='Github Logo mark' style={{ width: '15%' }}></img></a>
              <div class='card-text'>Project #2 Fitlist</div>
              <i class='fab fa-node'> 66.5% <br /> 27.5% Handlebars</i><br />
              <i class='fab fa-css3'> 6% CSS</i><br />
            </div>
          </div>
        </div>
      </div>

        <div class='row'>
          <div class='col align-self-center border-1'>
            <div class='card p-1'>
              <img class='card-img' src={VcImg} class='img-fluid mx-auto d-block mb-2' alt='Vibe cloud project App'></img>
              <div class='card-img-overlay invisible'> 
              onClick={() => this.handleClick}
                <p class='card-text'>Project #1 VibeCloud</p><a href='https://dspenn.github.io/Project1/'>Github Pages</a><br />
                <i class='fab fa-js'> 46.5% JavaScript </i><br />
                <i class='fab fa-html5'> 28.5% HTML</i><br />
                <i class='fab fa-css3'> 25% CSS</i><br />
                <a href='https://github.com/DSpenn/Project1'>
                <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' class='img-thumbnail' alt='Github Logo mark' style={{ width: '8%' }}>
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