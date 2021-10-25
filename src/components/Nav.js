import React from 'react';
import Nav from 'react-bootstrap/Nav';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Nav className='nav-tabs'>
      <Nav.Item>
        <a
          href='#About'
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </Nav.Item>
      <Nav.Item>
        <a
          href='#Project'
          onClick={() => handlePageChange('Project')}
          className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </Nav.Item>
      <Nav.Item>
        <a
          href='#contact'
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </Nav.Item>
      <Nav.Item>
        <a
          href='#Resume'
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </Nav.Item>
    </Nav> 
  );
}

export default NavTabs;
