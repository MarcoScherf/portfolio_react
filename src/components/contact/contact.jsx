import React, { Component } from "react";
import Scroll from "../../services/scroll";
import "./style.scss";
import { withTranslation } from "react-i18next";

class Contact extends Component {
  myForm = React.createRef();
  formName = React.createRef();
  formEmail = React.createRef();
  formMessage = React.createRef();
  state = {
    emailSended: false,
    emailSendedError: false,
    formSubmitted: false,
    form: {
      name: "",
      email: "",
      message: "",
    },
  };

  isValidEmail = (email) => {
    // Eine einfache Überprüfungsmethode - Hier können Sie eine geeignetere Validierung einsetzen
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  sendMail = async (event) => {
    event.preventDefault();
    try {
      const { name, email, message } = this.state.form;
      let fd = new FormData();
      fd.append("name", name);
      fd.append("email", email);
      fd.append("message", message);
      const response = await fetch("https://scheco-design.de/send_mail.php", {
        method: "POST",
        body: fd,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      this.setState({ emailSended: true });
      this.setState({ emailSended: true, formSubmitted: true });
    } catch (error) {
      this.setState({ emailSendedError: true });
      this.setState({ emailSendedError: true, formSubmitted: true });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  };

  render() {
    const { t } = this.props;
    const { emailSended, emailSendedError, formSubmitted, form } = this.state;

    return (
      <footer id="contact">
        <div className="container">
          <div className="header">
            <div className="greeting" data-aos="fade-right">
              {t("contact.hello")}
            </div>
          </div>
          <div
            className={`form-container ${
              emailSended || emailSendedError ? "hidden" : ""
            }`}
          >
            <h3>{t("contact.title")}</h3>
            <span className="subtitle">{t("contact.subtitle")}</span>
            <form onSubmit={this.sendMail}>
              <div className="input">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={this.handleChange}
                  placeholder=" "
                />
                <span>{t("contact.name")}</span>
                <img
                  src={
                    form.name && form.name.length >= 3
                      ? "/assets/img/valid.svg" // Valid SVG anzeigen, wenn das Eingabefeld nicht leer ist
                      : "/assets/img/error.svg" // Error SVG anzeigen, wenn das Eingabefeld leer ist
                  }
                  alt="Error"
                  hidden={!form.name}
                />
                <div className="error" hidden={!(formSubmitted && !form.name)}>
                  {t("contact.nameerror")}
                </div>
              </div>
              <div className="input">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={this.handleChange}
                  placeholder=" "
                />
                <span>{t("contact.email")}</span>
                <img
                  src={
                    this.isValidEmail(form.email)
                      ? "/assets/img/valid.svg" // Valid SVG anzeigen, wenn eine gültige E-Mail-Adresse eingegeben wurde
                      : "/assets/img/error.svg" // Error SVG anzeigen, wenn die E-Mail-Adresse ungültig ist oder leer ist
                  }
                  alt="Error"
                  hidden={!form.email}
                />
                <div
                  className="error "
                  hidden={
                    !(
                      formSubmitted &&
                      (!form.email || !this.isValidEmail(form.email))
                    )
                  }
                >
                  {t("contact.emailerror")}
                </div>
              </div>
              <div className="input">
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  value={form.message}
                  onChange={this.handleChange}
                  placeholder=" "
                ></textarea>
                <span>{t("contact.message")}</span>
                <img
                  src={
                    form.message && form.message.length >= 5
                      ? "/assets/img/valid.svg"
                      : "/assets/img/error.svg"
                  }
                  alt="Error"
                  hidden={!form.message}
                />
                <div
                  className="error"
                  hidden={!(formSubmitted && !form.message)}
                >
                  {t("contact.messageerror")}
                </div>
              </div>
              <button
                type="submit"
                // disabled={!(form.name && form.email && form.message)}
              >
                {t("contact.send")}
              </button>
            </form>
          </div>
          <div
            className="sent-message"
            hidden={!emailSended && !emailSendedError}
          >
            <div className={emailSended ? "successfully" : "hidden"}>
              <h3>{t("contact.sendedTitle")}</h3>
              <p className="font-overpass">{t("contact.sendedMessage")}</p>
            </div>
            <div className={emailSendedError ? "error" : "hidden"}>
              <h3>{t("contact.sendedErrorTitle")}</h3>
              <p className="font-overpass">{t("contact.sendedErrorMessage")}</p>
              <p className="font-overpass">{t("contact.thanks")}</p>
            </div>
          </div>
          <div className="desktop">
            <div className="arrow-up" onClick={() => Scroll.scrollTo("home")}>
              <img src="/assets/img/arrow_up.svg" alt="" />
              <img src="/assets/img/arrow_up_2.svg" alt="" />
            </div>
            <div className="logo">
              <span>[M.S]</span>
            </div>
            <div className="container-copyright">
              <div className="copyright">© Marco Scherf 2023</div>
              <div className="social">
                <a
                  href="https://github.com/MarcoScherf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/img/github.svg" alt="GitHub" />
                </a>
                <a href="mailto:mail@marco-scherf.de">
                  <img src="/assets/img/mail.svg" alt="Email" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marco-scherf-107956249"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/assets/img/in.svg" alt="Linkedin" />
                </a>
              </div>
            </div>
            <div className="legal">
              <span>Legal notice</span>
            </div>
          </div>
          <div className="mobile">
            <div className="social">
              <a
                href="https://github.com/MarcoScherf"
                target="_blank"
                rel="noreferrer"
                alt="gitHub"
              >
                <img src="/assets/img/github.svg" alt="GitHub" />
              </a>
              <a href="mailto:mail@marco-scherf.de">
                <img src="/assets/img/mail.svg" alt="Email" />
              </a>
              <a
                href="https://www.linkedin.com/in/marco-scherf-107956249"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/assets/img/in.svg" alt="Linkedin" />
              </a>
            </div>
            <div className="logo">
              <span>[M.S]</span>
            </div>
            <div>
              <div className="copyright">© Marco Scherf 2023</div>
            </div>
            <div className="legal">
              <span>Legal notice</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslation()(Contact);
