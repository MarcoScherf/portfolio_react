import React, { Component } from "react";
import "./style.scss";
import { withTranslation } from "react-i18next";

class MySkills extends Component {
  allSkills = [
    { name: "Angular", path: "assets/img/skills/angular.svg" },
    { name: "TypeScript", path: "assets/img/skills/ts.svg" },
    { name: "JavaScript", path: "assets/img/skills/js.svg" },
    { name: "HTML", path: "assets/img/skills/html.svg" },
    { name: "CSS", path: "assets/img/skills/css.svg" },
    { name: "Firebase", path: "assets/img/skills/firebase.svg" },
    { name: "Git", path: "assets/img/skills/git.svg" },
    { name: "Scrum", path: "assets/img/skills/scrum.svg" },
    { name: "Rest-API", path: "assets/img/skills/api.svg" },
    { name: "Material Design", path: "assets/img/skills/material.svg" },
  ];

  state = {};
  render() {
    const { t } = this.props;
    return (
      <section className="mySkills">
        <div className="container">
          <h2 data-aos="zoom-in">{t("skills.title")}</h2>
          <div className="skills-icons">
            {this.allSkills.map((skill, index) => (
              <div data-aos="flip-left" className="skill" key={index}>
                <div className="img">
                  <img src={skill.path} alt={skill.name} />
                </div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="arrow" data-aos="fade-down-right">
          <img src="/assets/img/arrow_right.svg" alt="" />
        </div>
      </section>
    );
  }
}

export default withTranslation()(MySkills);
