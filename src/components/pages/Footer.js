import React from 'react';
import Image  from 'react-bootstrap/Image'

function Footer() {
  return (
    <footer className='footer bg-light'>
    <div className='d-flex container'>
      <a href='https://github.com/DSpenn/'><Image src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt="Github Logo mark" style={{ width: "11%" }}></Image></a>
      <a href='https://www.linkedin.com/in/derek-stander'><Image src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='Github Logo mark' style={{ width: "11%" }}></Image></a>
      <span>&#9993;<a href='mailto: DS@gmail.com'>Send Email</a></span>
    </div>
  </footer>
  );
}

export default Footer;