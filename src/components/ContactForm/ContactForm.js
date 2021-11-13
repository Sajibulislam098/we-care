import React, { useRef } from "react";

const ContactForm = (props) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;
    const contactData = {
      name,
      email,
      phone,
      message,
    };
    fetch('https://glacial-reef-73275.herokuapp.com/contact',{
        method:'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(contactData)
    }).then(()=> {
        props.done();
        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        messageRef.current.value = '';
    });
  };
  return (
    <div className="limiter book-limiter">
      <div className="container-login100 align-items-start py-0">
        <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleSubmit}>
            {/* Input Name  */}
            <div className="wrap-input100 validate-input">
              <span className="label-input100 p-0">Name</span>
              <input
                required
                ref={nameRef}
                className="input100 book-input"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <span className="focus-input100 fa"></span>
            </div>
            {/* Input Email  */}
            <div className="wrap-input100 validate-input">
              <span className="label-input100 p-0">Email</span>
              <input
                required
                ref={emailRef}
                className="input100 book-input"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <span className="focus-input100 fa"></span>
            </div>
            {/* Input Phone Number  */}
            <div className="wrap-input100 validate-input">
              <span className="label-input100 p-0">Phone No.</span>
              <input
                required
                ref={phoneRef}
                className="input100 book-input"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
              />
              <span className="focus-input100 fa"></span>
            </div>
            {/* Input for message  */}
            <div className="wrap-input100 validate-input">
              <span className="label-input100 p-0">Message</span>
              <textarea
                required
                ref={messageRef}
                className="input100 book-input book-address"
                type="text"
                name="message"
                placeholder="Enter your message"
              />
              <span className="focus-input100 fa"></span>
            </div>

            <div className="container-login100-form-btn mt-4">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <input
                  type="submit"
                  value="SEND MESSAGE"
                  className="login100-form-btn book-btn"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
