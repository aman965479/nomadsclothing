import logo from '../assets/Nomads_Logo.svg';

function Footer() {
    return (
        <footer>
            <div className="container-fuid footer-content pt-4">
                <div className="row space-between">
                    <div className="col-md-3 col-sm-12">
                        <div className="footer-col">
                            <div className="brand-information">
                                <figure>
                                    <img src={logo} alt="Brand Logo" />
                                </figure>
                                <p className="about-brand">We've been championing ethical trade since our journey began back in 1989.</p>

                                <ul className="social-media">
                                    <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <div className="footer-col">
                            <h6 className="footer-col-title">Company</h6>

                            <ul>
                                <li className="footer-link">Our Story</li>
                                <li className="footer-link">Our Fabrics</li>
                                <li className="footer-link">Fair Trade Policy</li>
                                <li className="footer-link">Our Journal</li>
                                <li className="footer-link">Our World</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <div className="footer-col">
                            <h6 className="footer-col-title">Collections</h6>

                            <ul>
                                <li className="footer-link">New In</li>
                                <li className="footer-link">Womens</li>
                                <li className="footer-link">Dresses</li>
                                <li className="footer-link">Tops</li>
                                <li className="footer-link">Socks</li>
                                <li className="footer-link">Accessories & Gifts</li>
                                <li className="footer-link">Mens</li>
                                <li className="footer-link">Sale</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <div className="footer-col">
                            <h6 className="footer-col-title">Support</h6>

                            <ul>
                                <li className="footer-link">Contact Us</li>
                                <li className="footer-link">Delivery & Returns</li>
                                <li className="footer-link">Terms & Conditions</li>
                                <li className="footer-link">Privacy Policy</li>
                                <li className="footer-link">Find Our Stockists</li>
                                <li className="footer-link">Wholesale</li>
                                <li className="footer-link">Home</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="footer-col">
                            <h6 className="footer-col-title">Subscribe to our Emails</h6>

                            <ul>
                                <li className="footer-link">Subscribe to receive all our updates and offers, and get a 15% discount on your first purchase.</li>
                            </ul>
                            <form action="#" method="post">
                                <input type="email" placeholder="Email" required className="news_form_field" />
                                <button type="submit" className="news_form_field"><i class="fa-solid fa-chevron-right"></i></button>
                            </form>
                            <p className="form-note">By subscribing you agree to the Terms of Use & Privacy Policy.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid footer-copyright">
                <div className="row space-between">
                    <div className="col-md-3 col-sm-12"></div>
                    <div className="col-md-6 col-sm-12">
                        <p className="copy-right">© 2025 Nomads Clothing. All rights reserved.</p>
                    </div>
                    <div className="col-md-3 col-sm-12"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;