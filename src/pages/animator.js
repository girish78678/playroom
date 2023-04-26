import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Header from "@/components/Header";
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
      <main className="animator">
        <header>
          <div className="header">
            <Header />
          </div>
        </header>
        <div className="animator--flexbox">
          <div className="animator--text">
            <h3>Welcome to Playroom</h3>
            <h1>
              <span className="first-color">Meet</span>{" "}
              <span className="second-color">Your</span>{" "}
              <span className="third-color">Animator</span>
            </h1>
            <p>
              At utinam probatus vix, justo velit dolores ei duo. Atom orum
              praesent interpretaris vim cu, in eum quaeque qualisque. Ea usu
              mnesarchum vo luptatibus, agam dictas civibus.
            </p>
            <p>
              <span>
                {" "}
                <strong className="Bold--animator ">
                  ”Lorem ipsum dolor sit amet, consectetur adipiscing elit.”{" "}
                </strong>
              </span>
            </p>
            <p>
              Adhuc summo dissentiet ei usu, qui dico noster indoctum eu.
              Telegere diceretuss his, pri veritus inciderint ut, vidit ullum.
            </p>
            <h4 className="social--heading">Social Network</h4>
            <div className="social-icons-animator">
              <div className="instagram-animator">
                <img
                  src="/images/animator/instagram.png"
                  alt="instagram icon"
                />
              </div>
              <div className="twiter-animator">
                <img src="/images/animator/twitter.png" alt="twitter" />
              </div>
              <div className="facebook-animator">
                <img src="/images/animator/facebook.png" alt="facebook" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer--flexbox__animator">
          <div className="location">
            <div className="location-text">
              <p>
                <strong>Location :</strong>
              </p>
            </div>
            <div className="location-details">
              <p>754 Catherine St, NY</p>
            </div>
          </div>
          <div className="call-us">
            <div className="call-us-text">
              <strong>Call us:</strong>
            </div>
            <div className="call-us-details">
              <p>+368/123-456-7890</p>
            </div>
          </div>
          <div className="Email--us">
            <div className="email--text">
              <p>
                <strong>Email Us: </strong>
              </p>
            </div>
            <div className="email--details">
              <p>playroom@qodeinteractive.com</p>
            </div>
          </div>
          <div className="social--footer">
            <div className="social--text"><p> <strong>Social:</strong> </p></div>
            <div className="social-icons-animator--footer">
              <div className="instagram-animator">
                <img
                  src="/images/animator/instagram--2.png"
                  alt="instagram icon"
                />
              </div>
              <div className="twiter-animator">
                <img src="/images/animator/twitter--2.png" alt="twitter" />
              </div>
              <div className="facebook-animator">
                <img src="/images/animator/facebook--2.png" alt="facebook" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}