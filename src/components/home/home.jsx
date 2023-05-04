import React, { Component } from "react";
import "./style.scss";
import AOS from "aos";

class Home extends Component {
  state = {};

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <section className="home">
        <div className="container">
          <h2 data-aos="zoom-in" data-aos-duration="1000">
            Frontend Developer
          </h2>
          <div className="name">
            <div
              className="line"
              data-aos="zoom-in"
              data-aos-duration="1000"
            ></div>
            <span data-aos="fade-left">Marco Scherf</span>
          </div>
        </div>
        <div className="mobile">
          <button>Send a Message</button>
        </div>
        <div className="contact">
          <div className="mail" data-aos="fade-right" data-aos-duration="1000">
            mail@marco-scherf.de
          </div>
          <div className="scroll" data-aos="fade-left">
            <div className="img">
              <img src="./assets/img/arrow_down.svg" alt="" />
            </div>
            <div className="scroll-text">
              <span>
                Scroll <br />
                Down
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
