import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import socialNetworks from "../data/SocialNetworks/socials";
import Countdown from "react-countdown";
import Renderer from "../components/Countdown/Renderer";
import SubscribeEmail from "../components/Newsletter/SubscribeEmail";

const UnderMaintenance = () => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div
        className="cs-17-page-wrapper  bg-img d-flex flex-column justify-content-between"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            "/assets/img/backgrounds/under-maintenance.jpg"
          })`,
        }}
      >
        {/*====================  header ====================*/}
        <header className="cs-17-header space-pt--30 space-pb--30" />
        {/*====================  End of header  ====================*/}
        {/*====================  content ====================*/}
        <div className="cs-17-content">
          <div className="container">
            <div className="row">
              <div className="col-6 ml-auto mr-auto">
                {/* logo */}
                <div className="cs-17-logo text-center space-mb--35">
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/logo-dark.svg"}
                      className="img-fluid"
                      alt="Brandz-Interior"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 ml-auto mr-auto">
                <h3 className="cs-17-content__subtitle text-center space-mb--20">
                  Stay Tuned
                </h3>
                <h2 className="cs-17-content__title text-center">
                  Site is Under Maintenance
                </h2>
                {/* countdown */}
                <div className="cs-17-countdown space-mt--50">
                  <Countdown
                    date={new Date("July 07, 2021 12:12:00")}
                    renderer={Renderer}
                  />
                </div>
                <div className="cs-17-subscription-wrapper space-mt--50 text-center">
                  {/* subscribe email */}
                  <SubscribeEmail mailchimpUrl="https://gmail.us2.list-manage.com/subscribe/post?u=696736434709b1f7c18a2765b&amp;id=c5f58b02d8" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of content  ====================*/}
        {/*====================  footer ====================*/}
        <footer className="cs-17-footer space-pt--25 space-pb--25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                {/* social icons */}
                <ul className="cs-17-social-icons d-flex align-items-center justify-content-center space-mb--30">
                  <li>
                    {/* <div className="social-icons"> */}
                    {socialNetworks.map((social) => (
                      <a
                        key={social.id}
                        href={`https://${social.networkName}.com/${social.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`fa fa-${social.networkName}`} />
                      </a>
                    ))}
                    {/* </div> */}
                  </li>
                </ul>
                {/* copyright */}
                <div className="cs-17-copyright text-center">
                  &copy; {new Date().getFullYear() + " "}
                  <a
                    href="https://brandynodoyo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brandz
                  </a>
                  , all rights reserved
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*====================  End of footer  ====================*/}
      </div>
    </Fragment>
  );
};

export default UnderMaintenance;
