import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="menu clearfix desktop">
        <Link className="logo" to="/">
          Wunder<span style={{ fontWeight: 'bold', color: 'grey' }}>Art</span>
        </Link>
        <Link to="/blog">Blog</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/donate">
          <span>Donate</span>
          <i className="fas fa-heart" style={{ paddingLeft: '6px' }} />
        </Link>

        <div className="social">
          <a href="https://www.facebook.com/theyearningofdead">
            <span>
              <i className="fab fa-facebook" />
            </span>
          </a>
          <a href="https://www.instagram.com/spechtra/?hl=end">
            <span>
              <i className="fab fa-instagram" />
            </span>
          </a>
          <Link to="/login">
            <span>
              <i class="fas fa-sign-in-alt" />
            </span>
          </Link>
        </div>
      </div>
    )
  }
}
export default Header
