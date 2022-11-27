import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/skills-lab.png';

const Footer = () => {
    return (    
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                    <div>
                        <img alt='' src={logo} height="50px" width="150px"></img>
                        <p>Skill lab Ltd.<br />Providing reliable tech since 1992</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <Link className="link link-hover">Branding</Link>
                        <Link className="link link-hover">Design</Link>
                        <Link className="link link-hover">Marketing</Link>
                        <Link className="link link-hover">Advertisement</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to='/about' className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Jobs</Link>
                        <Link className="link link-hover">Press kit</Link>
                    </div>
                    
                    <div>
                        <span className="footer-title">Newsletter</span>
                        <div className="form-control w-80">
                            <label className="label">
                                <span className="label-text">Enter your email address</span>
                            </label>
                            <div className="relative">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="footer footer-center p-4 bg-base-300 text-base-content">
                  <p>Made with &#128154; by Shahriar</p>
                </div>
        </div>
                
             
    );
};

export default Footer;