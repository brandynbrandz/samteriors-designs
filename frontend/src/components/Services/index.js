import React from "react";
import SectionTitle from "../UI/SectionTitle";
import ServiceItem from "./ServiceItem";
import ServicesData from "../../data/Services/services";

function Services({ classes }) {
  return (
    <div className={`service-area-wrapper ${classes}`}>
      <div
        className="service-area-top"
        style={{
          backgroundImage: `url("${
            process.env.PUBLIC_URL + "/assets/img/service/service-bg.jpg"
          }")`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-5 m-auto text-center">
              <SectionTitle
                variant="light"
                title="Our Services"
                heading="We make it simple, providing best solutions"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="service-content-area">
        <div className="container">
          <div className="row mtn-30">
            {ServicesData.map((service) => (
              <ServiceItem
                key={service.id}
                id={service.id}
                title={service.title}
                text={service.shortDesc}
                thumb={service.thumb}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
