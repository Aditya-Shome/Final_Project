import React from 'react'
import {Link} from 'react-router-dom'
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex align-items-center gap-30">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>A/9 MandirPark, Birati,<br />
                  Kolkata, West Bengal.<br />
                  Pin Code:700051.
                </address>
                <a href='tel: +91 XXXXXXXXXX' className='mt-4 d-block mb-3 text-white'>
                +91 XXXXXXXXXX
                </a>
                <a href='mailto:example123@gmail.com' className='mt-4 d-block mb-2 text-white'>
                example123@gmail.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href='#'>
                    <BsLinkedin className='fs-4' />
                  </a> 
                  <a className='text-white' href='#'>
                    <BsInstagram className='fs-4' />
                  </a>
                  <a className='text-white' href='#'>
                    <BsGithub className='fs-4' />
                  </a>
                  <a className='text-white' href='#'>
                    <BsYoutube className='fs-4' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to="/refund-policy" className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to="/shipping-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to="/term-coditions" className='text-white py-2 mb-1'>Terms of Service</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>FAQ</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer's Corner
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer