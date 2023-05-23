import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import dynamic from "next/dynamic";
import FadeMenu from "@/components/material";
import Footer from "../components/Footer";
import FadeMenu2 from "@/components/pages";
export default function Abouts() {
  return (
    <>
      <Head>
        <title> playroom - kids Theme </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="ROP">
        <header>
          <div className="navbar navbar-grid">
            <div className="logo">
              <Link href="/">
                <img src="images/homepage/header-logo.png" alt="Logo" />
              </Link>
            </div>

            <div id="mySidepanel" className="sidepanel">
              <a
                href="javascript:void(0)"
                className="closebtn"
                onClick={() => closeNav()}
              ></a>
              <a className="no--border" href="#home">
                Home
              </a>
              <a href="#" className="nav-link">
                Pages
              </a>
              <a href="#" className="nav-link">
                Events
              </a>
              <a href="#" className="nav-link">
                Blog
              </a>
              <a href="#" className="nav-link">
                Shop
              </a>
              <a href="#" className="nav-link">
                Landing
              </a>
            </div>
           <FadeMenu2/>
          </div>
          <div className="navbar navbar--ROP">
            <div className="logo">
              <Link href="/">
                <img src="images/homepage/header-logo.png" alt="Logo" />
              </Link>
            </div>

            <div className="nav-links">
            <ul className = "no-bullets">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#"><FadeMenu /></Link>
              </li>
              <li>
                <Link href="/Blog">Blog</Link>
              </li>

              <li>
                <Link href="/shop">Shop</Link>
                 </li> 
              <li>
                <Link href="/grid-view">Grid Home</Link>
              </li>
              <li>
                <Link href="/Events">Events</Link>
              </li>
            </ul>
          </div>
          </div>
        </header>
        <div className="ROP--hero about--us--hero">
          <p className="pink"> Welcome To Playroom </p>
          <h1>About Us </h1>
        </div>
        <div className="our-center">
          <h2> What We Offer</h2>
          <h1>
            <span className="orange"> Our </span>
            <span className="second-color"> Play </span>
            <span className="third-color"> Space </span>
          </h1>
        </div>
        <div className="about-us-flexbox">
          <div className="about--us-item">
            <div className="flx-image">
              <img src="images/about-us/flex-image-1.png/" alt="image" />
            </div>
            <div className="flx-text">
              <h4>All Day Fun </h4>
              <p>Suas quas veniam at eam anvi dem delenitium odio</p>
            </div>
          </div>
          <div className="about--us-item">
            <div className="flx-image">
              <img src="images/about-us/flex--image-2.png/" alt="image" />
            </div>
            <div className="flx-text">
              <h4>Birthday Parties </h4>
              <p>Suas quas veniam at eam anvi dem delenitium odio</p>
            </div>
          </div>
          <div className="about--us-item">
            <div className="flx-image">
              <img src="images/about-us/flex-image-3.png/" alt="image" />
            </div>
            <div className="flx-text">
              <h4>Playland & Caffe </h4>
              <p>Suas quas veniam at eam anvi dem delenitium odio</p>
            </div>
          </div>
          <div className="about--us-item">
            <div className="flx-image">
              <img src="images/about-us/flex-image-4.png/" alt="image" />
            </div>
            <div className="flx-text">
              <h4>Celebrate and Learn </h4>
              <p>Suas quas veniam at eam anvi dem delenitium odio</p>
            </div>
          </div>
        </div>
        <div className="new-events--2">
          <div className="event-play-section">
            <h2>Education & Play</h2>
            <h1>
              <span className="first-color">Kid's </span> 
              <span className="second-color">Fun & Play </span> 
              <span className="third-color"> Space</span> 
            </h1>
            <p>
              Partem deserunt inciderint euismod noluisse has in, persiusem de
              sem runtume tres most inciderint his id, ut mei nulla alterum fac.{" "}
            </p>
            <div className="exp-flexbox">
              <div className="experience">
                <h3>Experience </h3>
              </div>
              <div className="percentage">95%</div>
            </div>
            <div className="experience--bar"></div>
            <div className="create-flexbox">
              <div className="creativity">
                <h3>Creativity</h3>
              </div>
              <div className="percentage-70">70%</div>
            </div>
            <div className="creativity--bar"></div>
          </div>
          <div className="event-video">
            <div className="event-image kids-image">
              <img src="/images/about-us/vimeo.png" alt="video" />
            </div>
            <a
              className="play--button"
              itemprop="url"
              href="https://vimeo.com/202895655"
              target="_self"
              data_type="iframe"
            >
              <img
                class="qodef-m-image"
                src="https://playroom.qodeinteractive.com/wp-content/plugins/playroom-core/inc/shortcodes/video-button/assets/img/video-button-play.png"
                alt="Play icon image"
              ></img>
            </a>
          </div>
        </div>
        <div className="animators--head">
          <h3>Playroom Team</h3>
          <h2 className="h2--head">    <span className="green"> Meet</span>
              <span className="second-color"> Our</span>
              <span className="third-color"> Animators</span>
            </h2>
      
        <div className="animator__flexbox">
          <div className="flexbox open-session animators--width">
            <img
              src="/images/about-us/white-women.jpg"
              alt="open-sessions image"
            />
            <h3>Jessica Lewis </h3>
            <p> Augue mnesarchum ex sed, an cum nusquam adipisci ocurreret. </p>
          </div>
          <div className="flexbox animators--width">
            <img
              src="/images/about-us/women-2.jpg"
              alt="class-trips image"
            />
            <h3>Sarah Walsh </h3>
            <p> Augue mnesarchum ex sed, an cum nusquam adipisci ocurreret. </p>
          </div>
          <div className="flexbox animators--width">
            <img
              src="/images/about-us/men.jpg"
              alt="birthday party image"
            />
            <h3>Benjamin Morgan </h3>
            <p> Augue mnesarchum ex sed, an cum nusquam adipisci ocurreret. </p>
          </div>
        </div>
        </div>
        <div className="contact-about--us">
<div className="map--text">
  <h2>Sign up FOR MORE INFO</h2>
  <h1>
              <span className="first-color">Stay </span> 
              <span className="second-color">tuned </span> 
              <span className="third-color">For More </span>
            </h1>
            <p>Mea ea omnesque dignissim, modo alterum honestatis quon id. Vix possit torquatos ad, et vix tota definitiones. </p>
  <input className="input--text" type="text" placeholder="Email "/>
  <button type="submit"><span></span></button>
  <label>
  <input type="checkbox" name="agree" value="yes"/>
  I agree that my submitted data is being collected
</label> 

</div>
<div className="map map--contact">
<iframe class="map-size"src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d24175.93406743113!2d-73.989465!3d40.762206!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683521937515!5m2!1sen!2sin" width="335
" height="380" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
        </div>
      </main>

      <div className="footer-sec">
        <Footer />
      </div>
    </>
  );
}
