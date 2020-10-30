import React from "react";
import PropTypes from "prop-types";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Newsletter = ({ status, message, onValidated }) => {
  let email;
  const submit = () => {
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
      });
    email.value = "";
  };
  return (
    <>
      <div className="sidebar-newsletter">
        <h3>Newsletter</h3>
        <form>
          <input
            ref={(node) => (email = node)}
            type="email"
            placeholder="Your Email Address"
            required
          />
          <button onClick={submit} className="btn btn-brand">
            Subscribe
          </button>
        </form>
        <div className="mailchimp-alerts">
          {status === "sending" && (
            <div className="mailchimp-submitting">sending...</div>
          )}
          {status === "error" && (
            <div
              className="mailchimp-error"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              className="mailchimp-success"
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
        </div>
      </div>
    </>
  );
};

const SubscribeNewsletter = ({ mailchimpUrl }) => {
  return (
    <div>
      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

SubscribeNewsletter.propTypes = {
  mailchimpUrl: PropTypes.string,
};

export default SubscribeNewsletter;
