import {FaInstagram, FaFacebook} from 'react-icons/fa'

import {BsFillThreadsFill, BsYoutube} from 'react-icons/bs'

import {SiLinkedin} from 'react-icons/si'

import './index.css'

const SubScribe = () => (
  <div className="subscribe-bg-container">
    <div className="flex-row-top-container">
      <div className="row-container-1">
        <h1 className="subscribe-heading"> SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p className="subscribe-description">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necesbus enim
        </p>
        <form>
          <input
            type="text"
            placeholder="Enter your email address"
            className="mail-input-container"
          />
          <button className="subscriber-btn" type="submit">
            SUBSCRIBE
          </button>
        </form>
      </div>
      <div className="row-container-2">
        <h1 className="subscribe-heading">About us</h1>
        <ul className="about-ul-container">
          <li className="about-list-item">Our Story</li>
          <li className="about-list-item">Blogs</li>
          <li className="about-list-item">Careers</li>
          <li className="about-list-item">Contact Us</li>

          <li className="about-list-item">Help & Support</li>
        </ul>
      </div>
      <div className="container-3">
        <h1 className="subscribe-heading">our services </h1>
        <ul className="about-ul-container">
          <li className="about-list-item">Book Maali</li>
          <li className="about-list-item">Plant Day Care</li>
          <li className="about-list-item">Rent Plants</li>
          <li className="about-list-item">Plants & Pots</li>
          <li className="about-list-item">Gardening Tools</li>
        </ul>
      </div>
      <div className="container-3">
        <h1 className="subscribe-heading">useful links</h1>
        <ul className="about-ul-container">
          <li className="about-list-item">My Account</li>
          <li className="about-list-item">Orders & Returns</li>
          <li className="about-list-item">Track Order</li>
          <li className="about-list-item">Terms & Conditions</li>
          <li className="about-list-item">Privacy Policy</li>
          <li className="about-list-item">
            Return, Refund &<br /> Replacement Policy
          </li>
        </ul>
      </div>
      <div className="last-container">
        <h1 className="subscribe-heading">GET IN TOUCH</h1>
        <p className="subscribe-description">
          Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
          Gurgaon, Haryana, India 122003
        </p>
        <p className="subscribe-description">
          Call:
          <br />
          +919958287272
        </p>
        <p className="subscribe-description">
          Email:
          <br /> care@chaperoneplants.com
        </p>
      </div>
    </div>
    <div className="chaperone-container">
      <h1 className="chaperone-heading">CHAPERONE</h1>
      <p className="chaperone-description">
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis. Non molestiae ratione et laborum doloribus aut molestiae
        voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
        est voluptatem eius. Et architecto nihil id labore omnis hic iste
        deleniti et porro aspernatur.
      </p>
    </div>
    <div className="chaperone-container">
      <h1 className="chaperone-heading">Follow us on</h1>
      <div className="icons-container">
        <button type="button" className="icon-btn">
          <a href="https://www.instagram.com/chaperoneplants/?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw%3D%3D">
            <FaInstagram size="25" color="#000000" />
          </a>
        </button>

        <button type="button" className="icon-btn">
          <a href="https://www.facebook.com/?_rdr">
            <FaFacebook size="25" color="#000000" />
          </a>
        </button>
        <button type="button" className="icon-btn">
          <a href="https://www.facebook.com/?_rdr">
            <BsFillThreadsFill size="25" color="#000000" />
          </a>
        </button>
        <button type="button" className="icon-btn">
          <a href="https://www.youtube.com">
            <BsYoutube size="30" color="#000000" />
          </a>
        </button>
        <button type="button" className="icon-btn">
          <a href="https://www.linkedin.com/">
            <SiLinkedin size="25" color="#000000" />
          </a>
        </button>
      </div>
    </div>
    <hr className="subscribe-line" />
    <p className="email-text">© 2023, chaperone.com All rights reserved.</p>
  </div>
)
export default SubScribe
