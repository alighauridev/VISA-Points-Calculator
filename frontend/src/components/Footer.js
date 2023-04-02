import React from "react";
import two from "../assests/two.png"
import three from "../assests/three.png"
import "../scss/footer.scss"
import { Link } from "react-router-dom";
import facebook from "../assests/facebook.png"
import twitter from "../assests/twitter.png"
import linkedin from "../assests/linkedin.png"
import instagram from "../assests/instagram.png"
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="grid">
                    <div className="item">
                        <div className="logo">
                            <img src="https://www.visa2land.com/wp-content/uploads/2023/03/Visa2Land-logo.png" alt="" />

                        </div>
                        <a className="btn" href='https://www.mara.gov.au/tools-for-registered-agents/code-of-conduct'>MARA Code of Conduct</a>
                        <div className="icons">
                            <a href={'https://www.facebook.com/visa2land'}>
                                <img src={facebook} alt="" />
                            </a>

                            <a href={'https://www.linkedin.com/company/visa-2-land/'}>
                                <img src={linkedin} alt="" />
                            </a>

                            <a href={'https://twitter.com/LandAustralia'}>
                                <img src={twitter} alt="" />
                            </a>

                            <a href={'https://www.instagram.com/visa2land/'}>
                                <img src={instagram} alt="" />
                            </a>

                        </div>
                        <center><b>MARA License</b>: 1574283</center>
                    </div>
                    <div className="item">
                        <img src={three} alt="" />
                    </div>
                    <div className="item">
                        <img src={two} alt="" />
                    </div>
                </div>
                <div className="flex">
                    <div className="start">
                        © 2020 VISARZO. Immigration & Visa Firm. All rights reserved.
                    </div>
                    <div className="end">
                        <ul>
                            <li>
                                <a href="https://visa2land.com/">Home</a>
                            </li>
                            <li>
                                <a href="https://visa2land.com/vision/">About Us</a>
                            </li>
                            <li>
                                <a href="https://visa2land.com/contact/">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
