import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import "./style.scss";

class Portfolio extends Component {
  myDivs = [];
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  setRef = (ref) => {
    if (ref) {
      this.myDivs.push(ref);
      this.observer.observe(ref);
    }
  };

  componentWillUnmount() {
    this.observer?.disconnect();
  }
  state = {};
  render() {
    const { t } = this.props;
    return (
      <section className="portfolio" id="projects">
        <div className=" container">
          <div className="head">
            <h2 data-aos="zoom-in">Portfolio</h2>
            <span></span>
          </div>
          <div className="project-container">
            <div className="scroll" ref={this.setRef}>
              <div className="number">01/04</div>
              <div className="left">
                <a
                  className="img"
                  href="https://www.marco-scherf.de/join"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/img/projecte/join.png"
                    alt="Join"
                    className="img"
                  />
                </a>
                <div className="description ">
                  <div className="title">Join</div>
                  <div className="stack">Angular | Html | SCSS | Firebase</div>
                  <p>{t("portfolio.join")}</p>
                  <div className="buttons">
                    <a
                      href="https://github.com/MarcoScherf/join_v2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.marco-scherf.de/join"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Try Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll" ref={this.setRef}>
              <div className="number ">02/04</div>
              <div className="right ">
                <a
                  className="img"
                  href="https://www.marco-scherf.de/elpolloloco"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/img/projecte/elpolloloco.png"
                    alt="El Pollo Loco"
                    className="img"
                  />
                </a>
                <div className="description">
                  <div className="title">El Pollo Loco</div>
                  <div className="stack">JavaScript | Html | CSS</div>
                  <p>{t("portfolio.elpolloloco")}</p>
                  <div className="buttons">
                    <a
                      href="https://github.com/MarcoScherf/El-Pollo-Loco"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.marco-scherf.de/elpolloloco"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Try Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll " ref={this.setRef}>
              <div className="number">03/04</div>
              <div className="left ">
                <a
                  className="img"
                  href="https://www.marco-scherf.de/kingscup"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/img/projecte/kingscup.png"
                    alt="Kings Cup"
                    className="img"
                  />
                </a>
                <div className="description">
                  <div className="title ">Kings Cup</div>
                  <div className="stack">Angular | Html | SCSS | Firebase</div>
                  <p>{t("portfolio.kingscup")}</p>
                  <div className="buttons ">
                    <a
                      href="https://github.com/MarcoScherf/kingscup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.marco-scherf.de/kingscup"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Try Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll " ref={this.setRef}>
              <div className="number">04/04</div>
              <div className="right">
                <a
                  className="img"
                  href="https://www.marco-scherf.de/pokedex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/img/projecte/pokedex.png"
                    alt="Pokedex"
                    className="img"
                  />
                </a>
                <div className="description">
                  <div className="title">Pokedex</div>
                  <div className="stack">JavaScript | Html | CSS | API</div>
                  <p>{t("portfolio.pokedex")}</p>
                  <div className="buttons">
                    <a
                      href="https://github.com/MarcoScherf/pokedex"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.marco-scherf.de/pokedex"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Try Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withTranslation()(Portfolio);
