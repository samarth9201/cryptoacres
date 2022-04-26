import React, { useRef } from "react";
import "./Contact.css";
import {
  HeadingH2,
  HeadingH5,
  ContactWrapper,
  ContactContainer,
  ContactDetails,
  ContactDetails1,
} from "./Contact";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { Column1, Column2, SectionRow } from "../Aboutsection/Aboutuselements";
import emailjs from "@emailjs/browser";

const Contactus = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Cryptoacres",
        "template_76edv1p",
        form.current,
        "gFA22Q0LhYPytTaBO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactContainer>
      <ContactWrapper>
        <HeadingH5>Get In Touch</HeadingH5>
        <HeadingH2>Contact Me</HeadingH2>
        <SectionRow>
          <Column1>
            <div className="contact_options">
              <article className="contact__option">
                <MdOutlineEmail className="contact__option_icon" />
                <ContactDetails>Email</ContactDetails>
                <ContactDetails1>dummy@gmail.com</ContactDetails1>
                <a href="mailto:sharlwadhwa@gmail.com" target="blank">
                  Send Message
                </a>
              </article>
              <article className="contact__option">
                <RiMessengerLine className="contact__option_icon" />
                <ContactDetails>Messenger</ContactDetails>
                <ContactDetails1>cryptoacres</ContactDetails1>
                <a href="mailto:sharlwadhwa@gmail.com" target="blank">
                  Send Message
                </a>
              </article>
              <article className="contact__option">
                <BsWhatsapp className="contact__option_icon" />
                <ContactDetails1>WhatsApp</ContactDetails1>
                <ContactDetails1>+919766093436</ContactDetails1>
                <a
                  href="https://api.whatsapp.com/send?phone+919766093436"
                  target="blank"
                >
                  Send Message
                </a>
              </article>
            </div>
          </Column1>
          <Column2>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder=" Your Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              />
              <button type="submit" className="btn-sub">
                Send Message
              </button>
            </form>
          </Column2>
        </SectionRow>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contactus;
