import React from "react";
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>
      <footer className="footer-area sp-bottom">
        <div className="container">
          <div className="row mtn-40">
            <div className="col-lg-4 order-4 order-lg-0">
              <div className="widget-item">
                <div className="about-widget">
                  <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/logo-dark.svg"}
                      alt="Logo"
                    />
                    {/* <img src={Logo} alt="Logo" /> */}
                  </Link>

                  <Text>Your complete Interior design solutions.</Text>

                  <Text classes="copyright-txt">
                    &copy; 2014 - {new Date().getFullYear()} Samterior Ltd. All
                    Rights Reserved.
                  </Text>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-2 ml-auto">
              <Widget title="Information">
                <List classes="widget-list">
                  <LI>
                    <Link to={`${process.env.PUBLIC_URL + "/about"}`}>
                      Our company
                    </Link>
                  </LI>
                  <LI>
                    <Link to={`${process.env.PUBLIC_URL + "/contact"}`}>
                      Contact us
                    </Link>
                  </LI>
                  <LI>
                    <Link to={`${process.env.PUBLIC_URL + "/services"}`}>
                      Our services
                    </Link>
                  </LI>
                  <LI>
                    <Link to={`${process.env.PUBLIC_URL + "/"}`}>Careers</Link>
                  </LI>
                </List>
              </Widget>
            </div>

            <div className="col-md-4 col-lg-2 ml-auto">
              <Widget title="Social Links">
                <List classes="widget-list">
                  <LI>
                    <Link
                      to="https://facebook.com/brandyn.o.avatar/"
                      target={"_blank"}
                    >
                      Facebook
                    </Link>
                  </LI>
                  <LI>
                    <Link
                      to="https://twitter.com/brandynbrandz/"
                      target={"_blank"}
                    >
                      Twitter
                    </Link>
                  </LI>
                  <LI>
                    <Link
                      to="https://dribbble.com/brandynodoyo/"
                      target={"_blank"}
                    >
                      LinkedIn
                    </Link>
                  </LI>
                  <LI>
                    <Link
                      to="https://www.instagram.com/brandynbrandz/"
                      target={"_blank"}
                    >
                      Instagram
                    </Link>
                  </LI>
                </List>
              </Widget>
            </div>

            <div className="col-md-4 col-lg-3">
              <Widget title="Contact Us">
                <address>
                  Komarock Mall. 10, Nairobi 00100, Kenya <br />
                  https://brandynodoyo.com <br />
                  (+254) 710100100
                </address>
              </Widget>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default index;
