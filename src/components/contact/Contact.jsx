"use client";

import React, { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { ThemeContext } from "@/app/context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [done, setdone] = useState(false);
  const [result, setresult] = useState()

  function arigato() {
    setTimeout(() => {
      setdone(false);
    }, 3000);
    if(result === "OK"){
      return "Thanks Your Message Has Successfully Been Sent";
    }else{
      return result;
    }

  }

  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t013qu6",
        "template_nha3cbf",
        formRef.current,
        "S3wDX9fA3YMvNBlF_"
      )
      .then(
        (result) => {
          setresult(result.text);
          setdone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c mt-10 pb-4">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className=" text-3xl md:text-5xl w-[100%] md:w-[80%]">
            Let's discuss your project
          </h1>
          <div className="c-info">
            <div className="c-info-item">
              <Image
                src="/img/phone.png"
                width={500}
                height={500}
                alt="Phone"
                className="c-icon"
              />
              +880 1317 136 420
            </div>
            <div className="c-info-item">
              <Image
                className="c-icon"
                src="/img/email.png"
                width={500}
                height={500}
                alt="email"
              />
              salehadib007@gmail.com
            </div>
            <div className="c-info-item">
              <Image
                className="c-icon"
                src="/img/address.png"
                width={500}
                height={500}
                alt="address"
              />
              245 Ansar Math, Gopalganj, Bangladesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b className="text-2xl font-medium">What's your story?</b> Get in
            touch. Always available for freelancing if the right project comes
            along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            <div className="my-4">{done && arigato()}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
