import firstCollection from '../assets/image/sale-jackets.webp';
import secondCollection from '../assets/image/sale-dresses.webp';
import thirdCollection from '../assets/image/sale-tops.webp';  

function MainBody() {
    return (
        <div className="main-body">
            <section className="hero-banner-section">
                <div className="container hero-banner align-content-center">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="hero-banner-title text-white">SAIGE</h1>
                            <p className="hero-banner-description text-white">Flowy fabrics and easy silhouettes, your new summer outfit is waiting.</p>

                            <div className="hero-banner-CTA-btn">
                                <a href="/collections/saige" className="primary-btn">SHOP SAIGE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="brand-description_Area">
                <div className="container brand-description">
                    <div className="row justify-content-center">
                        <div className="col-md-9 col-sm-12">
                            <p className="text-center">Rooted in the principles of slow fashion and timeless designs, we are committed to creating beautiful clothing that not only looks good but also aligns with ethical values. Our focus is on sourcing fabrics that are as responsible and natural as possible, ensuring every piece we craft has a minimal impact on the environment. We believe in quality over quantity, prioritizing sustainability in every step of the process.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-collection_Area">
                <div className="container-fluid featured-collection">
                    <div className="row space-between">
                        <div className="col-md-4 col-sm-12">
                            <div className="featured-collection-card">
                                <div className="collection-img">
                                    <img src={firstCollection} alt="featured_collection_1" />
                                </div>
                                <div className="collection-details">
                                    <a href="/collections/featured-collection-1" className="collection-title link-dark">Sale Jackets</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="featured-collection-card">
                                <div className="collection-img">
                                    <img src={secondCollection} alt="featured_collection_1" />
                                </div>
                                <div className="collection-details">
                                    <a href="/collections/featured-collection-1" className="collection-title link-dark">Sale Dresses</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="featured-collection-card">
                                <div className="collection-img">
                                    <img src={thirdCollection} alt="featured_collection_1" />
                                </div>
                                <div className="collection-details">
                                    <a href="/collections/featured-collection-1" className="collection-title link-dark">Sale Tops</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our_specialty_section">
                <div className="container-fluid">
                    <div className="row space-between">
                        <div className="col-md-3 col-sm-6">
                            <div className="specialty-card">
                                <div className="card-icon text-center">
                                    <svg class="icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M18.6307 0.0851008C18.9214 0.143319 19.2573 0.251631 19.499 0.483071C19.7487 0.722288 19.8616 1.06444 19.9202 1.35568C19.9821 1.66275 20.0008 2.00418 20 2.32523C19.9986 2.89096 19.9355 3.45932 19.9011 3.76888C19.8965 3.81064 19.8924 3.8477 19.889 3.8794L19.8885 3.88469C19.7574 5.00604 19.5546 6.53586 19.2559 8.16345C18.9577 9.77538 18.5618 11.5447 18.0423 13.1175L18.0415 13.1198C17.54 14.6143 16.835 16.2292 15.7876 17.2779C12.1807 20.8897 6.31722 20.917 2.70668 17.3017C-0.903844 13.6864 -0.876728 7.8151 2.73025 4.20335C3.77726 3.15495 5.37751 2.44898 6.88416 1.94609L6.88527 1.94573C8.4557 1.42559 10.21 1.02928 11.8328 0.73059C13.4582 0.431407 14.986 0.228254 16.1059 0.097027L16.1111 0.0964089C16.1231 0.0951308 16.1358 0.0937998 16.1492 0.09237C16.4416 0.0610531 17.0517 -0.0042707 17.6652 0.000220251C17.9855 0.00256445 18.3248 0.0238389 18.6307 0.0851008ZM16.2207 1.10269C15.114 1.23241 13.6107 1.4325 12.0155 1.72612C10.4166 2.02043 8.71247 2.40674 7.20334 2.90653C5.72522 3.39993 4.31684 4.04614 3.44505 4.91909C0.229287 8.13911 0.209266 13.3695 3.42148 16.5859C6.63368 19.8024 11.8571 19.7822 15.0728 16.5622C15.9442 15.6897 16.5895 14.2687 17.0829 12.7984C17.5818 11.2879 17.9676 9.5703 18.2616 7.98044C18.5549 6.38318 18.7546 4.8779 18.8841 3.76969C18.8878 3.73473 18.8921 3.69563 18.8969 3.65288C18.9315 3.33899 18.9879 2.82875 18.9891 2.32275C18.9898 2.03445 18.9722 1.76875 18.9293 1.5558C18.8832 1.32703 18.8229 1.23626 18.8002 1.21454C18.7694 1.18504 18.6656 1.12434 18.4325 1.07766C18.2146 1.03402 17.9461 1.01452 17.6578 1.01241C17.1035 1.00835 16.5429 1.06826 16.2505 1.09951C16.2402 1.10061 16.2303 1.10167 16.2207 1.10269Z"></path>
      <path d="M19.4297 0.501734C19.6261 0.7004 19.6244 1.02084 19.426 1.21747L0.860985 19.6161C0.662582 19.8127 0.342561 19.811 0.146198 19.6124C-0.0501654 19.4137 -0.0485124 19.0933 0.14989 18.8966L18.7149 0.498038C18.9133 0.301414 19.2334 0.303069 19.4297 0.501734Z"></path>
      <path d="M5.62257 2.4772H6.12801V13.6663H17.3961V14.1724H5.62257V2.4772Z"></path>
      <path d="M10.1879 1.18752H10.6933L10.6933 9.14731H18.7842V9.65342H10.1879L10.1879 1.18752Z"></path></svg>
                                </div>
                                <div className="specialty-card-content text-center">
                                    <h5 className="title">Cornish</h5>
                                    <p className="description">Designed in Cornwall</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="specialty-card">
                                <div className="card-icon text-center">
                                    <svg class="icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M15.9633 5.16568C16.1818 5.33464 16.2219 5.64867 16.0529 5.86709L11.2315 12.1C10.7573 12.7132 10.5 13.4664 10.5 14.2415L10.5 17.728C10.5 18.0041 10.2761 18.228 9.99998 18.228C9.72384 18.228 9.49998 18.0041 9.49998 17.728L9.49997 14.2415C9.49997 13.2449 9.8308 12.2765 10.4406 11.4882L15.2619 5.25525C15.4309 5.03683 15.7449 4.99673 15.9633 5.16568Z"></path>
      <path d="M4.13656 9.11047C3.94637 9.31067 3.95448 9.62715 4.15469 9.81735L8.41061 13.8605C9.10616 14.5213 9.49997 15.4386 9.49997 16.398V19.5C9.49997 19.7761 9.72383 20 9.99997 20C10.2761 20 10.5 19.7761 10.5 19.5V16.398C10.5 15.1645 9.99364 13.9851 9.09936 13.1355L4.84344 9.09235C4.64324 8.90216 4.32676 8.91027 4.13656 9.11047Z"></path>
      <path d="M18.3779 1.53927C18.4327 2.29021 18.4725 3.32703 18.4047 4.40738C18.3125 5.87411 18.0299 7.25745 17.4545 8.14562C16.7167 9.28439 15.6883 9.90008 14.7112 10.1459C13.6919 10.4023 12.8474 10.2333 12.4595 9.98203C11.6151 9.43502 10.6657 7.26257 12.1639 4.95007C12.7171 4.09609 13.9498 3.29603 15.4075 2.63437C16.4929 2.1417 17.5917 1.77412 18.3779 1.53927ZM18.7295 0.399095C19.0125 0.322287 19.2884 0.513872 19.3179 0.805582C19.4683 2.2906 19.735 6.46465 18.2937 8.68934C16.5205 11.4265 13.2903 11.7118 11.9158 10.8213C10.5413 9.93084 9.57124 7.11282 11.3246 4.40636C12.7665 2.18066 17.2 0.814295 18.7295 0.399095Z" fill-rule="evenodd"></path>
      <path d="M1.16197 6.23639C1.24915 6.80305 1.38541 7.51404 1.5922 8.22877C1.89834 9.28691 2.31835 10.2055 2.84189 10.729C3.54804 11.4352 4.37904 11.7175 5.11404 11.7439C5.89258 11.7719 6.44282 11.5154 6.64245 11.3158C7.09947 10.8588 7.49486 9.18578 6.0474 7.73833C5.55144 7.24237 4.58274 6.85006 3.40831 6.58298C2.60103 6.3994 1.79173 6.29511 1.16197 6.23639ZM0.569611 5.18777C0.276949 5.16998 0.0467941 5.41364 0.080866 5.70486C0.226586 6.95034 0.719124 10.0205 2.13478 11.4362C3.93434 13.2357 6.44588 12.9266 7.34955 12.0229C8.25323 11.1193 8.53389 8.8106 6.75451 7.03122C5.33581 5.61253 1.90298 5.26882 0.569611 5.18777Z" fill-rule="evenodd"></path></svg>
                                </div>
                                <div className="specialty-card-content text-center">
                                    <h5 className="title">Ethical</h5>
                                    <p className="description">Crafted with integrity & responsibility</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="specialty-card">
                                <div className="card-icon text-center">
                                    <svg class="icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M5.81971 2.09623C5.66962 2.09623 5.54176 2.15186 5.44395 2.25357L1.21145 6.65441C1.1088 6.76918 1.05429 6.90939 1.05429 7.05112C1.05429 7.20712 1.10783 7.34015 1.20568 7.44189L3.32991 9.65061C3.44515 9.76252 3.57826 9.81363 3.71113 9.81363C3.85775 9.81363 3.9834 9.76402 4.08701 9.65628L4.09094 9.6522L4.7024 9.02972C4.85658 8.87275 5.08721 8.82933 5.28453 8.92013C5.48186 9.01093 5.60604 9.21761 5.59798 9.44182L5.31373 17.3532C5.31817 17.6495 5.55481 17.8928 5.84081 17.8928H6.18836L14.1803 17.9038C14.4659 17.9035 14.7026 17.6607 14.7074 17.3648L14.4021 9.4433C14.3934 9.21885 14.5174 9.01164 14.7148 8.92044C14.9122 8.82925 15.1432 8.87254 15.2976 9.02968L15.9059 9.6489C16.0215 9.76199 16.1553 9.81363 16.2889 9.81363C16.4354 9.81363 16.561 9.76407 16.6646 9.65628L18.7886 7.44788C18.8912 7.33314 18.9457 7.19288 18.9457 7.05112C18.9457 6.89515 18.8922 6.76218 18.7943 6.66041L14.5618 2.25956C14.4515 2.15289 14.3167 2.09623 14.1803 2.09623H12.6411C12.5341 2.09623 12.3259 2.19376 12.1903 2.3422L12.181 2.35239C11.5962 2.9605 10.8184 3.29107 9.99479 3.29107C9.1624 3.29107 8.38522 2.95368 7.75232 2.28271L7.74644 2.27647C7.63884 2.1587 7.50017 2.09623 7.35906 2.09623H5.81971ZM4.69845 1.47842C5.00127 1.16356 5.40048 1 5.81971 1H7.35906C7.80667 1 8.21475 1.19917 8.50754 1.51779C8.94944 1.98502 9.45762 2.19485 9.99479 2.19485C10.5398 2.19485 11.0467 1.97904 11.4314 1.5813C11.6973 1.29312 12.1609 1 12.6411 1H14.1803C14.6114 1 15.0018 1.18292 15.2913 1.46809L15.3017 1.47828L19.5398 5.88527C19.8426 6.20007 20 6.61513 20 7.05112C20 7.49942 19.824 7.90545 19.5498 8.20642L19.54 8.21718L17.4101 10.4314C17.0921 10.7621 16.6905 10.9099 16.2889 10.9099C16.0115 10.9099 15.7438 10.8349 15.5054 10.6946L15.7613 17.3337C15.7616 17.341 15.7617 17.3483 15.7617 17.3557C15.7617 18.2613 15.0513 19 14.1803 19L6.18836 18.989H5.84081C4.96982 18.989 4.25938 18.2503 4.25938 17.3447C4.25938 17.3379 4.2595 17.331 4.25974 17.3242L4.49783 10.6977C4.25265 10.8427 3.98187 10.9099 3.71113 10.9099C3.29738 10.9099 2.90507 10.743 2.59955 10.4412L2.58975 10.4316L0.460183 8.21704C0.157401 7.90221 0 7.48707 0 7.05112C0 6.60279 0.176044 6.19683 0.450248 5.89588L0.460047 5.88513L4.69845 1.47842Z"></path></svg>
                                </div>
                                <div className="specialty-card-content text-center">
                                    <h5 className="title">Exclusive Prints</h5>
                                    <p className="description">Prints you won't find anywhere else</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="specialty-card">
                                <div className="card-icon text-center">
                                    <svg class="icon icon-accordion" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M1.55194 9.05556H3.38889C3.88985 9.05556 4.3703 9.25456 4.72454 9.6088C5.07877 9.96303 5.27778 10.4435 5.27778 10.9444V11.8889C5.27778 12.3899 5.47678 12.8703 5.83102 13.2245C6.18526 13.5788 6.6657 13.7778 7.16667 13.7778C7.66763 13.7778 8.14808 13.9768 8.50231 14.331C8.85655 14.6853 9.05556 15.1657 9.05556 15.6667V18.4481M6.22222 2.38306V3.86111C6.22222 4.48732 6.47098 5.08787 6.91378 5.53067C7.35657 5.97346 7.95713 6.22222 8.58333 6.22222H9.05556C9.55652 6.22222 10.037 6.42123 10.3912 6.77547C10.7454 7.1297 10.9444 7.61015 10.9444 8.11111C10.9444 8.61208 11.1435 9.09252 11.4977 9.44676C11.8519 9.80099 12.3324 10 12.8333 10C13.3343 10 13.8147 9.80099 14.169 9.44676C14.5232 9.09252 14.7222 8.61208 14.7222 8.11111C14.7222 7.61015 14.9212 7.1297 15.2755 6.77547C15.6297 6.42123 16.1101 6.22222 16.6111 6.22222H17.616M12.8333 18.0164V15.6667C12.8333 15.1657 13.0323 14.6853 13.3866 14.331C13.7408 13.9768 14.2213 13.7778 14.7222 13.7778H17.616M18.5 10C18.5 11.1162 18.2801 12.2215 17.853 13.2528C17.4258 14.2841 16.7997 15.2211 16.0104 16.0104C15.2211 16.7997 14.2841 17.4258 13.2528 17.853C12.2215 18.2801 11.1162 18.5 10 18.5C8.88376 18.5 7.77846 18.2801 6.74719 17.853C5.71592 17.4258 4.77889 16.7997 3.98959 16.0104C3.20029 15.2211 2.57419 14.2841 2.14702 13.2528C1.71986 12.2215 1.5 11.1162 1.5 10C1.5 7.74566 2.39553 5.58365 3.98959 3.98959C5.58365 2.39553 7.74566 1.5 10 1.5C12.2543 1.5 14.4163 2.39553 16.0104 3.98959C17.6045 5.58365 18.5 7.74566 18.5 10Z" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div className="specialty-card-content text-center">
                                    <h5 className="title">Environment</h5>
                                    <p className="description">Our slow fashion respects the planet - One stitch at a time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainBody;