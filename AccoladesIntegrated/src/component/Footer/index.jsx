import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer
      className="flex-center px-3 footer"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="serive-banner-two-content  flex-center flex-column gap-4">
        <img
          fetchpriority="high"
          src="https://accoladesintegrated.com/wp-content/uploads/2022/06/Accolades_logo_TM.png"
          class="attachment-full size-full wp-image-1651"
          alt=""
          style={{ width: "100%", maxWidth: "330px" }}
        />
        <div className="flex-center gap-5 flex-lg-nowrap flex-wrap heads">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        <div className="footend">
          <div className="foot">
            {/* <div className="col-lg-1 col-md-12"></div> */}
            <div className="col-lg-3 col-md-12">
              <h5 className="p-2" style={{ color: "#23A7AE" }}>Digital Markeitng Services</h5>
              <ul className="p-2">
                <li>Google Ads</li>
                <li>Search Engine Optimization</li>
                <li>Social Media Marketing</li>
                <li>Online Marketing</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12">
              <h5 className="p-2" style={{ color: "#23A7AE" }}>Accolades</h5>
              <div className="text p-2">
                The ultimatum of our successful company is to adequately provide
                our prospective clients with the required service that they
                promptly demand from us.
              </div>
            </div>
            <div className="col-lg-3 col-md-12 ">
              <h5 style={{ color: "#23A7AE" }} className="p-2">Branches</h5>
              <ul className="p-2">
                <li>Calicut</li>
                <li>Trivandrum</li>
                <li>Bangalore</li>
                Mumbai
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 acc">
              <h5 style={{ color: "#23A7AE" }} className="p-2">Recent Updates</h5>
              <div className="p-2">
                <blockquote cite="https://www.facebook.com/accoladesmc/?ref=bookmarks">
                  <a href="https://www.facebook.com/accoladesmc/?ref=bookmarks">
                    Accolades Media
                  </a>
                </blockquote>
              </div>
            </div>
            {/* <div className="col-lg-1 col-md-12"></div> */}
          </div>
          <div>
            <p className="p-2 rights" >© 2024 | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
