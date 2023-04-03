import Link from "next/link";
// Import the FontAwesomeIcon component

const Footer = () => {
    return (
<footer>
    <div className="footer-main-sec">

<div className="sec-container">
          <div className="footer-section1">
            <Link href="/">
              <img src="images/homepage/logo-footer.png" alt="Logo" />
            </Link>
              <h3>Playroom</h3>
              <p>Welcome to your new children's entertainment center website!</p>
         </div>
         <div className="social-icons-groups">
         <div className="bg-color"><img src="images/icons/facebook.png" alt="facebook"/>
           </div>
            <div className="bg-color"><img src="images/icons/twitter.png" alt="twitter"/>
           </div>
           <div className="bg-color instagram"> <img src="images/icons/instagram.png" alt="instagram"/>
           </div>

         </div>

    </div>
<div className="sec-container">
    <div className="empty--space">

    </div>
 <h4>Press/News</h4>
 <div className="info-date">
    <a href="">May 27,2020</a>
 </div>
 <div className="info-title">
    <a href="">Free to express themselves</a>
 </div>
 <div className="info-date">
    <a href="">May 27,2020</a>
 </div>
 <div className="info-title">
    <a href="">It Was Never Easier To Have Fun</a>
 </div>
</div>
<div className="sec-container">
<div className="empty--space">
        
        </div>
    <h4>Information</h4>
    <div className="empty--space">
        
        </div>
  <div className="e-title-text">
    <p>
    <span><a href=""></a></span>
    <span className="inner-text">Party venue center play rules</span>
    </p>
  </div>
  <div className="e-title-text">
    <p>
    <span><a href=""></a></span>
    <span className="inner-text">MAke your party Reservation</span>
    </p>
  </div>
  <div className="e-title-text">
    <p>
    <span><a href=""></a></span>
    <span className="inner-text">Our Premises</span>
    </p>
  </div>
  <div className="e-title-text">
    <p>
    <span><a href=""></a></span>
    <span className="inner-text">Working hours</span>
    </p>
  </div>
  </div>
  <div className="sec-container">
  <div className="empty--space">
        
        </div>
    <h4>Contacts</h4>
  <div className="e-title-text">
    <p>
    <span><a href=""></a></span>
    <span className="inner-text">24 The Maples, NY 11576</span>
    </p>
  </div>
  <div className="e-title-text">
    <p>
    <span><a href=""></a></span>
    <span className="inner-text">playroom@qodeinteractive.com</span>
    </p>
  </div>
  <div className="e-title-text">
    <p>
    <span><a href=""></a></span>
    <span className="inner-text">+368 /123 456 7890</span>
    </p>
  </div>
</div>
    </div>
<div className="copyright">
    <p><span>© 2023 </span> <span className="orange"><a href="">Qode Interactive</a></span><span>, All Rights Reserved</span></p>
</div>

    </footer>
    )
}

export default Footer;