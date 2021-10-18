import React from 'react';

function Navbar() {
  return (
<nav class="navbar navbar-dark" role="navigation" aria-label="main navigation">
  <div class="container-fluid justify-content-start">
    <li class="nav-item"><a class="nav-link" href="#aboutMe">About me</a></li>
    <li class="nav-item"><a class="nav-link" href="#Portfolio">Portfolio</a></li>
    <li class="nav-item"><a class="nav-link" href="#contactMe">Contact me</a></li>
    <li class="nav-item"><a class="nav-link" href="#Resume">Resume</a></li>
  </div>
</nav>
  );
}
export default Navbar;