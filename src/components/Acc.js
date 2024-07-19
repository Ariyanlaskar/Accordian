import React from "react";
import "./css/AccStyle.css";
function acc() {
  return (
    <div className="main">
      <ul className="container">
        <li>
          <input type="radio" name="accordion" id="first" />
          <label htmlFor="first" className="quest">
            Q. What is a digital agency?
          </label>
          <div className="content">
            <p>
              A digital agency is a company that leverages digital channels to
              grow their clients’ brands online. It offers services and
              technologies such as web design, digital marketing, creative
              design, and app development.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="second" />
          <label htmlFor="second">
            Q. What services does a digital agency prov 'id'e?
          </label>
          <div className="content">
            <p>
              A digital agency is a company that leverages digital channels to
              grow their clients’ brands online. It offers services and
              technologies such as web design, digital marketing, creative
              design, and app development.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="third" />
          <label htmlFor="third">
            Q. What questions should you ask when interviewing a digital agency?
          </label>
          <div className="content">
            <p>
              A digital agency is a company that leverages digital channels to
              grow their clients’ brands online. It offers services and
              technologies such as web design, digital marketing, creative
              design, and app development.
            </p>
          </div>
        </li>
        <li>
          <input type="radio" name="accordion" id="fourth" />
          <label htmlFor="fourth">
            Q. Hiring a digital agency vs hiring in-house: What is the
            difference?
          </label>
          <div className="content">
            <p>
              A digital agency is a company that leverages digital channels to
              grow their clients’ brands online. It offers services and
              technologies such as web design, digital marketing, creative
              design, and app development.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default acc;
