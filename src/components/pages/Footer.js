import React from 'react';

function Footer() {
  return (
    <footer className='footer bg-light'>
    <div className='justify-content-md-center d-flex'>
      <a href='https://github.com/DSpenn/'><img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='img-thumbnail' alt="Github Logo mark" style={{ width: "15%" }}></img></a>
      <a href='https://www.linkedin.com/in/derek-stander'><img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' className='img-thumbnail' alt='Github Logo mark' style={{ width: "15%" }}></img></a>
      <span>&#9993;<a href='mailto: DS@gmail.com'>Send Email</a></span>
    </div>
  </footer>
  );
}

export default Footer;