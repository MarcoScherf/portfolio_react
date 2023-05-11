import React, { Component } from "react";
import AOS from "aos";
import "./style.scss";
import Scroll from "../../services/scroll";

import { withTranslation } from "react-i18next";
import i18n from "../../i18n";

class Navigation extends Component {
  state = {
    isOpen: false,
    isLanguageEN: false,
  };

  componentDidMount() {
    AOS.init();
  }

  handleChangeLanguage = (lng) => {
    if (lng === "de") {
      this.setState({ isLanguageEN: true });
    } else {
      this.setState({ isLanguageEN: false });
    }
    i18n.changeLanguage(lng);
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { t } = this.props;
    return (
      <>
        <header data-aos="fade-down" data-aos-delay="300">
          <div className="container">
            <a href="/">
              <span className="logo">[M.S]</span>
            </a>
            <div className="right">
              <div className="language">
                <span
                  onClick={() => this.handleChangeLanguage("en")}
                  className={this.state.isLanguageEN ? "" : "active"}
                >
                  EN
                </span>
                |
                <span
                  onClick={() => this.handleChangeLanguage("de")}
                  className={this.state.isLanguageEN ? "active" : ""}
                >
                  DE
                </span>
              </div>
              <div onClick={this.handleClick}>
                <div id="menu" className={this.state.isOpen ? "open" : ""}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className={this.state.isOpen ? "nav menu-open" : "nav"}>
          <nav>
            <div
              className="nav-link"
              onClick={() => {
                Scroll.scrollTo("about");
                this.handleClick();
              }}
            >
              {t("nav.about")}
            </div>
            <div
              className="nav-link"
              onClick={() => {
                Scroll.scrollTo("skills");
                this.handleClick();
              }}
            >
              {t("nav.skills")}
            </div>
            <div
              className="nav-link"
              onClick={() => {
                Scroll.scrollTo("projects");
                this.handleClick();
              }}
            >
              {t("nav.portfolio")}
            </div>
            <div
              className="nav-link"
              onClick={() => {
                Scroll.scrollTo("contact");
                this.handleClick();
              }}
            >
              {t("nav.contact")}
            </div>
          </nav>
          <div className="footer">
            <div className="footer-container">
              <div className="left">
                <span className="greeting">{t("nav.hello")}</span>
                <span className="mail">mail@marco-scherf.de</span>
              </div>
              <div className="social ">
                <a
                  href="https://github.com/MarcoScherf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./assets/img/github.svg" alt="github" />
                </a>
                <a href="/">
                  <img src="./assets/img/mail.svg" alt="email" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marco-scherf-107956249"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./assets/img/in.svg" alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation()(Navigation);
