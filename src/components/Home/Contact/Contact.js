import React from 'react';

const Contact = () => {
    return (
      <section className="contact my-5 py-5">
         <div className="container">
            <h2 className="text-center text-brand fw-bold my-3">Contact</h2>
            <h5 className="text-center mb-3">Let us handle your project professionally</h5>
            <div className="col-md-9 mx-auto">
               <form action="">
                  <div className="form-group p-2">
                     <input type="text" className="form-control p-3" placeholder="Full Name" required />
                  </div>
                  <div className="form-group p-2">
                     <input type="text" className="form-control p-3" placeholder="Email Address" required/>
                  </div>
                  <div className="form-group p-2">
                     <input type="number" className="form-control p-3" placeholder="Phone Number" required/>
                  </div>
                  <div className="form-group p-2">
                     <textarea name="" className="form-control p-3" id="" cols="20" rows="7" placeholder="Message"></textarea>
                  </div>
                  <div className="form-group text-center p-2">
                     <button type="submit" className="btn btn-brand-primary">Send Message</button>
                  </div>
               </form>
            </div>
         </div>
      </section>
    );
};

export default Contact;