import React from 'react';

function Contact() {
  return (
    <form className="Contact">
    <div class="mb-3">
      <label for="inputEmail" class="form-label">Email address</label>
      <input type="email" class="form-control input-sm" id="inputEmail"></input>
      <div class="form-text">We'll never share your email with anyone.</div>
      <button type="button" class="btn btn-secondary btn-sm">Submit</button>
    </div>
  </form>
  );
}

export default Contact;