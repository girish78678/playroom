import Link from "next/link";

const Header = () => {
  return(
    <header>
        <nav>
        <div className="navbar">
          <div className="logo">
            <Link href="/">
              <img src="images/homepage/header-logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="nav-links">
            < ul className = "no-bullets">
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
  )
    };
    
    export default Header;
