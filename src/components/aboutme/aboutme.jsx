import React, { Component } from "react";
import Scroll from "../../services/scroll";
import { withTranslation } from "react-i18next";
import "./style.scss";

class Aboutme extends Component {
  state = {};
  render() {
    const { t } = this.props;
    return (
      <section className="aboutme" id="about">
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
                <button onClick={() => Scroll.scrollTo("contact")}>
                  {t("aboutme.button")}
                </button>
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
          <div className="arrow" data-aos="fade-down">
            <img src="/assets/img/arrow_left.svg" alt="arrow left" />
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Aboutme);
