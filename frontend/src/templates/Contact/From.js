import React from "react";
import emailjs from "emailjs-com";
import FormInput from "../../components/UI/Input";

const From = () => {
  function sendEmail(e) {
    const success = document.getElementById("success");
    // const button = document.getElementById("buttonsent");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j2gsouq",
        "template_wjh5xlk",
        e.target,
        "user_G5VZzfTLd1y4BuSa461mf"
      )
      .then(
        (result) => {
          console.log(result.text);
          success.classList.add("show");
          //   button.classList.add("show");
          failed.classList.remove("show");
        },
        (error) => {
          console.log(error.text);
          failed.classList.add("show");
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact-form-wrap">
      <form id="contact-form" onSubmit={sendEmail}>
        <div className="row">
          <div className="col-md-6">
            <FormInput
              tag={"input"}
              type={"text"}
              name={"first_name"}
              placeholder={"First Name *"}
            />
          </div>

          <div className="col-md-6">
            <FormInput
              tag={"input"}
              type={"text"}
              name={"last_name"}
              placeholder={"Last Name *"}
            />
          </div>

          <div className="col-md-6">
            <FormInput
              tag={"input"}
              type={"email"}
              name={"email_address"}
              placeholder={"Email address *"}
              required
            />
          </div>

          <div className="col-md-6">
            <FormInput
              tag={"input"}
              type={"text"}
              name={"phone_no"}
              placeholder={"Phone No"}
            />
          </div>

          <div className="col-12">
            <FormInput
              tag={"textarea"}
              name={"message"}
              placeholder={"Write Your Message *"}
            />

            <FormInput tag={"button"} type={"submit"} classes={"btn-outline"} />

            <div className="form-message">
              <div id="success" className="hide">
                Your message has been sent...
              </div>
              <div id="failed" className="hide">
                Message failed...
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default From;
