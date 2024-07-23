import React from 'react';
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/SVG.png';
import logo2 from '../../assets/home.png';
import logo3 from '../../assets/details.png';
import logo4 from "../../assets/img3.png";
import logo5 from "../../assets/img4.png";
import logo6 from "../../assets/img5.png";
import logo7 from "../../assets/img6.png";
import logo8 from "../../assets/img7.png";
import logo9 from "../../assets/img8.png";
import logo10 from "../../assets/triangle.png";
import logo11 from "../../assets/semicircle.png";
import { CiShare1 } from "react-icons/ci";



function Homepage() {
    const navigate = useNavigate();
    return (
        <div className={styles.page} onClick={() => {navigate("/signup")}}>
            <div className={styles.navBox}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" className={styles.logoImg} />
                    <p>FormBot</p>
                </div>
                <div className={styles.rightnav}>
                    <div className={styles.btn1} onClick={() => { navigate("/login") }}> <button>Sign in</button> </div>
                    <div className={styles.btn2} onClick={() => {navigate("/signup")}}> <button> Create a FormBot</button></div>
                </div>
            </div>
            <div className={styles.box1}>
                <div className={styles.top}>
                    <div className={styles.iconT}>
                        <img src={logo10} alt="Avatar" />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.middle}>
                            <div className={styles.h1}>
                                <h1> Build advanced chatbots<br />
                                    visually </h1>
                            </div>
                            <div className={styles.para}>
                                Typebot gives you powerful blocks to create unique chat experiences. Embed them<br />
                                anywhere on your web/mobile apps and start collecting results like magic.
                            </div>
                            <div className={styles.botbtn}>
                                <button>Create a Form Bot for free</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.iconC}>
                        <img src={logo11} alt="Avatar" />
                    </div>
                </div>
                <div className={styles.middle}>
                    <img src={logo2} alt="details" />
                </div>
            </div>
            <div className={styles.box2}>
                <div className={styles.header}>
                    <h1>Replace your old school forms<br />with<br />
                        chatbots</h1>
                </div>
                <div className={styles.para}>
                    <p>Typebot is a better way to ask for information. It leads to an increase in customer satisfaction and retention and multiply by<br />3<br />
                        your conversion rate compared to classical forms.</p>
                </div>
                <div className={styles.logodetail}>
                    <img src={logo3} alt="detail" />
                </div>
            </div>
            <div className={styles.box3}>
                <div className={styles.img3}>
                    <img src={logo4} alt="Avatar" />
                </div>
                <div className={styles.box3Content}>
                    <h1>Easy building
                        experience</h1>
                    <p>All you have to do is drag and<br />
                        drop blocks to create your app.<br />
                        Even if you have custom needs,<br />
                        you can always add custom<br />
                        code.</p>
                </div>

            </div>
            <div className={styles.box4}>
                <div className={styles.box4content}>
                    <h1>Embed in a click</h1>
                    <p>Embedding your typebot in<br />
                        your applications is a walk in<br />
                        the park. Typebot gives you<br />
                        several step-by-step platform-<br />
                        specific instructions. Your<br />
                        typebot will always feel "native".</p>

                </div>
                <div className={styles.img4}>
                    <img src={logo5} alt="Avatar" />
                </div>
            </div>
            <div className={styles.box5}>
                <div className={styles.img5}>
                    <img src={logo6} alt="Avatar" />
                </div>
                <div className={styles.box5Content}>
                    <h1>Integrate with any platform</h1>
                    <p>Typebot offers several native integrations
                        blocks as well as instructions on<br /> how to embed typebot
                        on particular platforms
                    </p>
                </div>
            </div>
            <div className={styles.box6}>
                <div className={styles.box6content}>
                    <h1>Collect result in real-time</h1>
                    <p>
                        One of the main advantage of a chat application is that you collect the user's responses on each question.<br />
                        <span> You won't lose any valuable data.</span>
                    </p>
                </div>
                <div className={styles.img6}>
                    <img src={logo7} alt="Avatar" />
                </div>
            </div>
            <div className={styles.box7}>
                <div className={styles.box7content}>
                    <h1>And many more features</h1>
                    <p>Typebot make form building easy and comes with powerful features</p>
                </div>
                <div className={styles.img7}>
                    <img src={logo8} alt="Avatar" />
                </div>
            </div>
            <div className={styles.box8}>
                <div className={styles.box8content}>
                    <h2>Loved by teams and creators from all around the world</h2>
                </div>
                <div className={styles.img8}>
                    <img src={logo9} alt="Avatar" />
                </div>
            </div>
            <div className={styles.box9}>
                
                    <div className={styles.imgT}>
                        <img src={logo10} alt="Avatar" />
                    </div>
                    <div className={styles.box9content}>
                    <div className={styles.box9h1}>
                        <h1>Improve conversion and user engagement<br />
                            with FormBots</h1>
                    </div>
                    <div className={styles.box9btn}>
                        <button>Create a FormBot</button>
                    </div>
                    <div className={styles.box9P}>
                        <p>No trial. Generous <span>free</span>plan.</p>
                    </div>
                </div>
                    <div className={styles.imgC}>
                        <img src={logo11} alt="Avatar" />
                    </div>

                
                
            </div>
            <div className={styles.box10}>
                <div className={styles.first}>
                    <ul>
                        <li>Made with❤️by<br />@cuvette</li>
                    </ul>
                </div>
                <div className={styles.second}>
                    <ul>
                        <li>Status <CiShare1 /></li>
                        <li>Documentation<CiShare1 /></li>
                        <li>Roadmap<CiShare1 /></li>
                        <li>Pricing<CiShare1 /></li>
                    </ul>
                </div>
                <div className={styles.third}>
                    <ul>
                        <li>Discord<CiShare1 /></li>
                        <li>GitHub repository<CiShare1 /></li>
                        <li>Twitter<CiShare1 /></li>
                        <li>LinkedIn<CiShare1 /></li>
                        <li>OSS Friends</li>
                    </ul>
                </div>
                <div className={styles.fourth}>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Terms of Service</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Homepage;
