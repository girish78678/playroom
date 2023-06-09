import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import dynamic from "next/dynamic";


export default function GridHome() {
    return (
    <>
      <Head>
        <title>playroom-kids Theme</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="body">
      <header>
        <div className="inner--header">
          <div className="left-p">A place where kids have fun & learn</div>
          <div className="nav--flex">
            <div>Gold Street 40, NY 12365</div>
            <div>Mon - Sun : 9am - 8pm</div>
          </div>
        </div>
      <nav>
          <div className="navbar navbar-grid">
        <div className="logo">
          <Link href="/">
            <img src="images/homepage/header-logo.png" alt="Logo" />
          </Link>
        </div>

            <div id="mySidepanel" className="sidepanel">
              <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>×</a>
              <a className="no--border" href="#home">Home</a>
              <a href="#" className="nav-link">Pages</a>
              <a href="#" className="nav-link">Events </a>
              <a href="#" className="nav-link">Blog</a>
              <a href="#" className="nav-link">Shop</a>
              <a href="#" className="nav-link">Landing</a>
              </div>
            <button className="openbtn open-btn-grid" onClick={() => openNav()}>...</button>
  </div>
<div className="grid--nav--flex">
<div className="grid--logo">
  <img src="images/grid-home/center--logo.png" alt="playroom" />
</div>
      <div className="nav-links grid-nav">
              <ul className="no-bullets">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pages">Pages</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/landing">Landing</Link>
        </li>
      </ul>
    </div>
</div>
</nav>
</header>
<div className="grid-hero">
  <h3>This Is Playroom</h3>
  <h2>Kid's Fun <br /> Center</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elittellus, luctus nec ullamcorper?</p>
  <button>Read More</button>
</div>
<div className="qodef-learn-play-flexbox">
<div className="learn--and--play--text">
    <h3>Perfect Spot To</h3>
    <h2><span className="change-color"> Learn </span><span className="second-color"> And</span> <span className="third-color">Play</span> </h2>
    <p>Quem iuvaret eos ne. Posse mediocrem referrentur, similique adversarium nostrud melius maluisset eos?</p>
    <p className="learn--play-text"><strong>Activity :</strong>  Ferri verear definition in quo adet</p>
 <p><strong>Details:</strong> <a href=""></a></p>
</div>
  <div className="breaker-image-down">
    <img src="/images/grid-home/pink-dress-kid.png" alt="kid image" />
  </div>
 
  </div>
  <div className="down-breaker">
  <img src="/images/grid-home/down-breaker.png" alt="elementor" />
</div>
<div className="latest--stories--section">

<div className="latest-stories">
    <h3>Read About Us</h3>
    <h2><span className="change-color"> Our </span><span className="second-color"> Latest</span> <span className="third-color">Stories</span> </h2>
    </div>
    <div class="my-flex-container">
  <div class="my-card">
   <img src="/images/grid-home/kid-1.jpg" alt="kid" />
    <div class="my-card-content">
      <h2>Come With Us and Have More Fun</h2>
      <div className="card--content--flexbox">
      <p class="my-date">June 5 2020</p>
      <p class="my-play">Play</p>
      </div>
    </div>
  </div>
  <div class="my-card">
  <img src="/images/grid-home/kid-2.jpg" alt="kid" />
    <div class="my-card-content">
      <h2>Doing What They Know and Love </h2>
      <div className="card--content--flexbox">
      <p class="my-date">June 5 2020</p>
      <p class="my-play">Play</p>
      </div>
    </div>
  </div>
  <div class="my-card">
    <img src="/images/grid-home/kid-3.jpg" alt="kid" />
    <div class="my-card-content">
      <h2>Always Be There for Your Child </h2>
      <div className="card--content--flexbox">
      <p class="my-date">June 5 2020</p>
      <p class="my-play">Play</p>
      </div>
    </div>
  </div>
</div>
</div>
<div className="up-breaker">
  <img src="/images/grid-home/up-breaker.png" alt="elementor" />
</div>
<div className="qodef-events-year-flexbox">
  <div className="breaker-image">
    <img src="/images/grid-home/up-breaker-image.png" alt="kid image" />
  </div>
  <div className="events-year-text right--text">
    <h3>Fun Never Stops</h3>
    <h2><span className="change-color"> Events </span><span className="second-color"> Year</span> <span className="third-color">Round</span> </h2>
    <p>Erant nullam periculis mei ut, no has nusquam voluptaria. Usu graeco praesent et. Ex persius voluptatum vis quod?</p>
    <button>Find Events</button>
  </div>

</div>
      <div className="qodef-pricing-plans">
       <p> <span className="sub-heading">Check Out Our</span></p>
        <h1><span className="first-color">Event</span> <span className="second-color">Pricing</span> <span className="third-color">Plans</span></h1>
        <div className="pricing-flexbox">
        <div className="pricing-item pricing-item-1">
          <div className="pricing-image">
        <img src="images/grid-home/36$.png" alt="your-image-description"/>
        <div className="pricing-image-text">
          <h2 className="no-background ">36$</h2></div> 
          </div>
  <h2 className="no-background ">Garden 1Hr</h2>
  <p className="no-background ">Te sint tincidu accomo</p>
  <button>Buy Now</button>
        </div>
        <div className="pricing-item pricing-item-2">
        <div className="pricing-image ">
        <img src="images/grid-home/202$.png" alt="your-image-description"/>
        <div className="pricing-image-text">
          <h2>202$</h2></div> 
          </div>
  <h2>Mini Party</h2>
  <p>Te sint tincidu accomo</p>
  <button>Buy Now</button>
        </div>
        <div className="pricing-item pricing-item-3">
        <div className="pricing-image">
        <img src="images/grid-home/161$.png" alt="your-image-description"/>
        <div className="pricing-image-text">
          <h2>161$</h2></div> 
          </div>
  <h2>Art Class</h2>
  <p>Te sint tincidu accomo</p>
  <button>Buy Now</button>
          </div>
        </div>

      </div>
<div className="element-momenter">
<img src="images/grid-home/robot.png" alt="image" />
<h3>Welcome</h3>
<h2>Playroom</h2>
<p className="p-center">No homero evertitur vim, sea et impedit inimicus hon estatis afacit.</p>
<div className="grid-social-icons">
           <div className="grid-icon"> <img src="images/grid-home/instagram.png" alt="instagram"/>
           </div>
         <div className="grid-icon"><img src="images/grid-home/facebook.png" alt="facebook"/>
           </div>
            <div className="grid-icon"><img src="images/grid-home/twitter.png" alt="twitter"/>
           </div>

         </div>

</div>

      <footer>
        <div className="footer-flexbox">
          <div className="qodef-first-flexbox">
            <a href="#">
          <p> <strong class="no-background">  About </strong></p>

            </a>
            <a href="#">
           <p>
            <strong class="no-background">
            Shop
            </strong>
           </p>
            </a>
            <a href="#">
           <p><strong class="no-background">Calender </strong> </p>
            </a>
          </div>
          <div className="qodef-mid-footer">
            <p><span>© 2023 </span> <span className="bold"><a href=""><strong> Qode Interactive </strong></a></span><span>, All Rights Reserved</span></p>
          </div>
          <div className="qodef-last-flexbox">
            <a href="#">
           <p> <strong class="no-background">Event</strong></p>
            </a>
            <a href="#">
           <p><strong class="no-background">Story</strong></p>
            </a>
            <a href="#">
           <p><strong class="no-background">Contacts</strong></p>
            </a>
          </div>
        </div>
      </footer>
      </ main>
 
    </>
  );
}