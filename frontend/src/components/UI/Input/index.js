import React from "react";

const FormInput = ({ tag, type, name, placeholder, classes, id }) => {
  return (
    <div className="single-input-item">
      <label>
        {(() => {
          if (tag === "input") {
            return (
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={classes}
              />
            );
          } else if (tag === "textarea") {
            return (
              <textarea
                name={name}
                id={id}
                cols="30"
                rows="7"
                placeholder={placeholder}
                className={classes}
                required
              />
            );
          } else if (tag === "button") {
            return (
              <button type={type} className={`btn-outline ${classes}`}>
                Send Message
              </button>
            );
          }
        })()}
      </label>
    </div>
  );
};

export default FormInput;
