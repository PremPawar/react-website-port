import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Prem N. Pawar</h2>
        <p><a href="mailto:prempawar28@gmail.com">prempawar28@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Prem. I like learning new things.
        I completed my <a href="https://icme.stanford.edu/">Computer Engineering</a> graduate from AISSMS IOIT
        . I worked in IEEE as Co-chair at College student branch and Event Management Head at
        Pune Section Council. I have completed my internship in Intellico Labs.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Prem Pawar <Link to="/">PremPawar</Link>.</p>
    </section>
  </section>
);

export default SideBar;
