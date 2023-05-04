import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./style.scss";

class Aboutme extends Component {
  state = {};
  render() {
    const { t } = this.props;
    return (
      <section className="aboutme">
        <div className="container">
          <div className="head">
            <h2 data-aos="fade-right" data-aos-delay="300">
              {t("aboutme.title")}
            </h2>
          </div>
          <div className="content">
            <div className="left w-50">
              <p>{t("aboutme.text")}</p>
              <div className="contact">
                <button>{t("aboutme.button")}</button>
              </div>
            </div>
            <div className="right">
              <img
                src="/assets/img/me.jpg"
                alt="Marco Scherf"
                className="w-100"
              />
            </div>
          </div>
          <div
            className="arrow d-flex flex-end w-100"
            data-aos="fade-down-left"
          >
            <img src="/assets/img/arrow_left.svg" alt="arrow left" />
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Aboutme);
