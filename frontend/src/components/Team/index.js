import React from "react";
import SectionTitle from "../UI/SectionTitle";
import SlickSlider from "../UI/Slick";
import Member from "./Member";

import Teams from "../../data/Team/team";

function Team() {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: false,
    dots: true,
    className: "team-content-wrap slick-dots--light mtn-md-5",
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="team-area-wrapper bg-img sp-y"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/img/team/teamwork-bg.jpg"
        })`,
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <SectionTitle
              variant="light"
              title="Creative Team"
              heading="We have great <br />creative team"
              text="<strong>Samteriors</strong> always try to provide the best Business Solutions for Clients to grow up their
                                      Business sharp and smoothly. We voluptatem voluptas aspernatur aut odit fugit, quia consequuur magni dolores eos qui ratione."
            />
          </div>

          <div className="col-lg-8">
            <SlickSlider settings={settings}>
              {Teams.map((team) => (
                <div key={team.id}>
                  <Member
                    id={team.id}
                    name={team.name}
                    designation={team.designation}
                    profilePic={team.profilePic}
                  />
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
