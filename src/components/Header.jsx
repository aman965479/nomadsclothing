import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import logoGrey from '../assets/Nomads_Logo_Grey.svg';
import logoWhite from '../assets/Nomads_Logo.svg'

function Header() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar header navbar-expand-lg fixed-top transition-all ${scrolled ? 'bg-white' : 'bg-transparent'}`}>

      <div className="container">
        <a className="navbar-brand" href="/"><img src={scrolled ? logoGrey : logoWhite} alt="website_logo" height="105px" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">New In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Saige</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Womens</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Socks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Accessories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">Sale</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">Our World</a>
            </li>
          </ul>
          <span className="header-right">
              <span>
                <drawer-button class="open-drawer-btn header__icon focus-inset cursor-pointer" data-target="drawer-search" role="button" aria-label="Search" tabindex="0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" viewBox="0 0 24 24" stroke-width="var(--icon-stroke-width)" stroke="currentColor" class="size-7 icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                  </svg>
                </drawer-button>
              </span>
              <span>
                <account-icon>
                <svg aria-hidden="true" fill="none" focusable="false" width="24" viewBox="0 0 24 24" stroke-width="var(--icon-stroke-width)" stroke="currentColor" class="icon icon-account">
                  <path d="M16.1255 7.75C15.9415 10.228 14.0625 12.25 12.0005 12.25C9.93847 12.25 8.05647 10.229 7.87547 7.75C7.68847 5.172 9.51547 3.25 12.0005 3.25C14.4845 3.25 16.3135 5.219 16.1255 7.75Z" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M3.0166 21.747C3.7826 17.5 7.9216 15.25 11.9996 15.25C16.0776 15.25 20.2166 17.5 20.9836 21.747" stroke-miterlimit="10"></path>
                </svg>
                </account-icon>
              </span>
              <span>
                <a href="#">
                  <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon icon-cart w-7">
                  <path d="M15.9996 8C15.9996 9.06087 15.5782 10.0783 14.828 10.8284C14.0779 11.5786 13.0605 12 11.9996 12C10.9387 12 9.92131 11.5786 9.17116 10.8284C8.42102 10.0783 7.99959 9.06087 7.99959 8M3.63281 7.40138L2.93281 15.8014C2.78243 17.6059 2.70724 18.5082 3.01227 19.2042C3.28027 19.8157 3.74462 20.3204 4.33177 20.6382C5.00006 21 5.90545 21 7.71623 21H16.283C18.0937 21 18.9991 21 19.6674 20.6382C20.2546 20.3204 20.7189 19.8157 20.9869 19.2042C21.2919 18.5082 21.2167 17.6059 21.0664 15.8014L20.3664 7.40138C20.237 5.84875 20.1723 5.07243 19.8285 4.48486C19.5257 3.96744 19.0748 3.5526 18.5341 3.29385C17.92 3 17.141 3 15.583 3L8.41623 3C6.85821 3 6.07921 3 5.4651 3.29384C4.92433 3.5526 4.47349 3.96744 4.17071 4.48486C3.82689 5.07243 3.76219 5.84875 3.63281 7.40138Z" stroke="black" stroke-width="var(--icon-stroke-width)" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </a>
              </span>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Header;