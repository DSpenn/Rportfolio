import React from 'react';

function Contact() {

  function handleMouseLeaveName(e) {
    if (!e.target.value)
     alert("Name is required");
   }

   function handleMouseLeaveEmail(e) {
    if (!e.target.value)
     alert("Email is required");

    const email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //console.log(email.test(String(e.target.value).toLowerCase()));
    if(!email.test(String(e.target.value.toLowerCase())))
    alert("Email is not valid");
    }


  return (
    <form className="Contact">
    <div class="mb-3">
    <label for="inputName" class="form-label">Name</label>
      <input type="text" class="form-control input-sm" id="inputName" placeholder="Name" onMouseLeave={handleMouseLeaveName}></input>
      <label for="inputEmail" class="form-label">Email address</label>
      <input type="email" class="form-control input-sm" id="inputEmail" placeholder="Email" onMouseLeave={handleMouseLeaveEmail}></input>
      <div class="form-text">We'll never share your email with anyone.</div>
      <button type="button" class="btn btn-secondary btn-sm">Submit</button>
    </div>
  </form>
  );
}

export default Contact;