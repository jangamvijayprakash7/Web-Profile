import { useState } from "react";
import "./App.css";
import clickup from "./assets/ClickUp.svg";
import dropbox from "./assets/Dropbox.svg";
import elastic from "./assets/Elastic.svg";
import maskgroup from "./assets/Mask group.svg";
import paychex from "./assets/Paychex.svg";
import stripe from "./assets/Stripe.svg";
import hero from "./assets/Hero.png";
import maskgroup2 from "./assets/Mask group 2.svg";
import maskgroup3 from "./assets/Mask group 3.svg";
import client1 from "./assets/client 1.svg";
import client2 from "./assets/client 2.svg";
import client3 from "./assets/client 3.svg";
import client4 from "./assets/client 4.svg";
import imageone from "./assets/image1.png";
import imagetwo from "./assets/image1.png";

function AppOrginal() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div class="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Case Study</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Recent work</a>
            </li>
            <li>
              <a href="#">Get In Touch</a>
            </li>
            <li class="logo-container">
              <a herf="#">
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M0 1.97499C0 1.40259 0.202708 0.930366 0.608108 0.558324C1.01351 0.186265 1.54055 0.000244141 2.18919 0.000244141C2.82626 0.000244141 3.34169 0.183397 3.73552 0.549738C4.14092 0.927515 4.34363 1.41976 4.34363 2.0265C4.34363 2.576 4.14672 3.0339 3.7529 3.40024C3.3475 3.77802 2.81467 3.9669 2.15444 3.9669H2.13707C1.49999 3.9669 0.984562 3.77802 0.590734 3.40024C0.196905 3.02246 0 2.54737 0 1.97499ZM0.225869 17.0002V5.52953H4.08301V17.0002H0.225869ZM6.22008 17.0002H10.0772V10.5952C10.0772 10.1945 10.1236 9.8854 10.2162 9.6679C10.3784 9.27867 10.6245 8.94954 10.9546 8.68053C11.2847 8.4115 11.6988 8.277 12.1969 8.277C13.4942 8.277 14.1429 9.1413 14.1429 10.8699V17.0002H18V10.4235C18 8.72918 17.5946 7.44417 16.7838 6.56842C15.973 5.69266 14.9016 5.25478 13.5695 5.25478C12.0753 5.25478 10.9112 5.89013 10.0772 7.16084V7.19518H10.0598L10.0772 7.16084V5.52953H6.22008C6.24324 5.89585 6.25483 7.0349 6.25483 8.94669C6.25483 10.8585 6.24324 13.543 6.22008 17.0002Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a herf="#">
                <svg
                  width="22"
                  height="14"
                  viewBox="0 0 22 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M19.4963 0.691124H14.0261V2.21242H19.5178L19.4963 0.691124ZM18.3418 11.1567C17.9268 11.4317 17.4368 11.5712 16.9392 11.556C16.6098 11.5903 16.2769 11.5563 15.9613 11.456C15.6457 11.3558 15.3542 11.1914 15.105 10.9733C14.6443 10.451 14.4045 9.77017 14.4361 9.07441H21.5786C21.6301 8.34996 21.5682 7.62192 21.3952 6.91655C21.2278 6.24548 20.9349 5.61216 20.532 5.05C20.1265 4.50471 19.6027 4.05838 19 3.7445C18.3293 3.41385 17.5897 3.24743 16.8421 3.25898C16.139 3.25383 15.4419 3.38957 14.7921 3.65818C14.1971 3.90903 13.658 4.2758 13.2061 4.73711C12.7555 5.20765 12.4066 5.76589 12.1811 6.37709C11.9391 7.03691 11.8185 7.73507 11.8251 8.43784C11.814 9.15059 11.9309 9.85955 12.1703 10.531C12.3737 11.139 12.6965 11.7002 13.1198 12.1817C13.5577 12.6545 14.096 13.0231 14.695 13.2607C15.363 13.5152 16.0734 13.6397 16.7882 13.6275C17.7909 13.6588 18.781 13.3962 19.6365 12.8722C20.5007 12.2582 21.1228 11.3612 21.3952 10.3368H19.0108C18.8831 10.6757 18.6482 10.9636 18.3418 11.1567ZM14.6411 6.71156C14.7251 6.44256 14.8644 6.19414 15.0503 5.98229C15.2361 5.77045 15.4642 5.59988 15.72 5.48158C16.0588 5.32911 16.4276 5.25533 16.7989 5.26579C17.0672 5.24288 17.3372 5.27826 17.5905 5.36952C17.8438 5.46077 18.0743 5.60574 18.2663 5.79447C18.6329 6.24323 18.8682 6.7847 18.946 7.35891H14.4685C14.4859 7.13966 14.5257 6.92275 14.5871 6.71156H14.6411ZM8.93354 6.19367C9.48268 5.965 9.95983 5.59223 10.3146 5.11474C10.6407 4.60765 10.8026 4.01243 10.7785 3.41003C10.7997 2.86068 10.6925 2.31396 10.4656 1.81321C10.275 1.37939 9.96897 1.0062 9.5809 0.734281C9.16945 0.451573 8.70223 0.260267 8.21066 0.173238C7.62892 0.051225 7.03556 -0.00666339 6.44121 0.000608901H0V13.5736H6.58147C7.1821 13.574 7.78034 13.4978 8.36171 13.347C8.91277 13.2044 9.43484 12.9671 9.90458 12.6457C10.3596 12.3303 10.7301 11.9079 10.9835 11.4157C11.2639 10.8652 11.4012 10.253 11.3827 9.63546C11.4031 8.87021 11.1885 8.11709 10.7677 7.4776C10.3152 6.83447 9.64404 6.37808 8.8796 6.19367H8.93354ZM2.98864 2.32031H5.78307C6.03979 2.31999 6.29607 2.34165 6.54911 2.38505C6.7821 2.41957 7.00586 2.50027 7.20725 2.62241C7.40184 2.73248 7.5595 2.89765 7.66041 3.09714C7.78537 3.33636 7.84492 3.60434 7.83303 3.87397C7.85314 4.1062 7.81762 4.33987 7.72944 4.55564C7.64126 4.77141 7.50294 4.96307 7.32594 5.11474C6.93981 5.38019 6.47777 5.51274 6.00964 5.49236H2.98864V2.32031ZM8.21066 10.3476C8.09981 10.5674 7.93218 10.7537 7.72514 10.887C7.50968 11.021 7.27228 11.116 7.02384 11.1675C6.74769 11.2294 6.46521 11.2583 6.18227 11.2539H2.94548V7.53154H6.18227C6.73772 7.50722 7.28625 7.66232 7.74672 7.97391C7.95475 8.16059 8.1159 8.39364 8.21712 8.65419C8.31834 8.91473 8.35678 9.19545 8.32934 9.47362C8.35851 9.7702 8.31787 10.0695 8.21066 10.3476Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a herf="#">
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M17.5417 1.71084C16.8824 1.99685 16.1852 2.18592 15.4718 2.27217C16.2244 1.82251 16.7885 1.11511 17.0593 0.281193C16.352 0.702249 15.5777 0.998908 14.7701 1.15828C14.2303 0.572887 13.5114 0.18322 12.7263 0.05039C11.9412 -0.0824399 11.1342 0.0490805 10.4319 0.424324C9.72952 0.799568 9.17161 1.39731 8.8456 2.1238C8.5196 2.8503 8.44394 3.66445 8.63051 4.43857C7.20036 4.36623 5.80142 3.99385 4.52457 3.3456C3.24773 2.69736 2.12153 1.78775 1.21915 0.675881C0.90264 1.22859 0.736329 1.85453 0.73675 2.49144C0.735628 3.08293 0.880783 3.66552 1.15929 4.18734C1.4378 4.70916 1.84102 5.15402 2.33304 5.4823C1.76116 5.46674 1.2015 5.31329 0.701667 5.03499V5.07884C0.705953 5.90759 0.996362 6.70942 1.52377 7.3487C2.05118 7.98799 2.78321 8.42548 3.59604 8.58718C3.28315 8.6824 2.95829 8.7326 2.63125 8.73628C2.40487 8.73364 2.17905 8.71311 1.9559 8.67489C2.18737 9.38779 2.63531 10.0108 3.23738 10.4573C3.83946 10.9037 4.56573 11.1514 5.31513 11.1658C4.04967 12.1615 2.48731 12.705 0.877084 12.7095C0.583906 12.7104 0.29096 12.6929 0 12.6568C1.64403 13.7183 3.55992 14.2818 5.51686 14.2795C6.8673 14.2935 8.20699 14.0383 9.4577 13.5287C10.7084 13.0192 11.845 12.2656 12.8012 11.3118C13.7574 10.3581 14.514 9.22341 15.0267 7.97401C15.5394 6.72462 15.7981 5.38558 15.7875 4.03511C15.7875 3.88601 15.7875 3.72813 15.7875 3.57026C16.4758 3.057 17.0693 2.42779 17.5417 1.71084Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div className="hero">
          <div className="hero-left">
            <h1>Jangam Vijay Kumar</h1>
            <p>
              Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.{" "}
            </p>
            <a href="#" className="btn">
              Let's get Started{" "}
              <svg
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.18608 4.37364L2.06653 0.259206C1.72049 -0.086402 1.1583 -0.086402 0.812263 0.259206C0.466225 0.604814 0.466225 1.16631 0.812263 1.51191L4.30469 5L0.812263 8.4881C0.466225 8.8337 0.466225 9.3952 0.812263 9.7408C0.98528 9.91361 1.2123 10 1.43939 10C1.66647 10 1.89351 9.9136 2.06651 9.7408L6.18606 5.62637C6.5321 5.28076 6.5321 4.71927 6.18606 4.37366L6.18608 4.37364Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div className="hero-right">
            <img src={hero} alt="Profile Photo" className="profile-pic" />
          </div>
        </div>
        <div className="hero-logo-section">
          <p>worked with</p>
          <div className="hero-logo-container">
            <a href="#">
              <img src={clickup} alt="ClickUp" />
            </a>
            <a href="#">
              <img src={dropbox} alt="Dropbox" />
            </a>
            <a href="#">
              <img src={paychex} alt="Paychex" />
            </a>
            <a href="#">
              <img src={elastic} alt="Elastic" />
            </a>
            <a href="#">
              <img src={stripe} alt="Stripe" />
            </a>
          </div>
        </div>
      </header>
      <section className="case-studies-section">
        <div className="case-studies-head">
          <h2>Case Studies</h2>
          <p>Solving user & business problems since last 15+ years.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="cards">
          <div className="card">
            <div>
              <p
                className="span"
                style={{ colour: " #FFA217", backgroundColor: " #ffa2175c" }}
              >
                Fintech
              </p>
              <h2>Work name here</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <p>
                <a
                  href="#"
                  className="btn-sm"
                  style={{ backgroundColor: "#FFA217" }}
                >
                  View Case Study{" "}
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.18608 4.37364L2.06653 0.259206C1.72049 -0.086402 1.1583 -0.086402 0.812263 0.259206C0.466225 0.604814 0.466225 1.16631 0.812263 1.51191L4.30469 5L0.812263 8.4881C0.466225 8.8337 0.466225 9.3952 0.812263 9.7408C0.98528 9.91361 1.2123 10 1.43939 10C1.66647 10 1.89351 9.9136 2.06651 9.7408L6.18606 5.62637C6.5321 5.28076 6.5321 4.71927 6.18606 4.37366L6.18608 4.37364Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </p>
            </div>
            <div>
              <img src={maskgroup} alt="Mask-group" />
            </div>
          </div>

          <div className="card rev-flex">
            <div>
              <p
                className="span"
                style={{ color: " #000AFF", backgroundColor: " #0008ff5c" }}
              >
                EdTech
              </p>
              <h2>Work name here</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <p>
                <a
                  href="#"
                  className="btn-sm"
                  style={{ backgroundColor: "#000AFF" }}
                >
                  View Case Study{" "}
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.18608 4.37364L2.06653 0.259206C1.72049 -0.086402 1.1583 -0.086402 0.812263 0.259206C0.466225 0.604814 0.466225 1.16631 0.812263 1.51191L4.30469 5L0.812263 8.4881C0.466225 8.8337 0.466225 9.3952 0.812263 9.7408C0.98528 9.91361 1.2123 10 1.43939 10C1.66647 10 1.89351 9.9136 2.06651 9.7408L6.18606 5.62637C6.5321 5.28076 6.5321 4.71927 6.18606 4.37366L6.18608 4.37364Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </p>
            </div>
            <div>
              <img src={maskgroup2} alt="Mask group 2" />
            </div>
          </div>

          <div className="card">
            <div>
              <p
                className="span"
                style={{
                  color: " #2AB090",
                  backgroundColor: " #2ab0915c",
                }}
              >
                Pharma
              </p>
              <h2>Work name here</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <p>
                <a
                  href="#"
                  className="btn-sm"
                  style={{ backgroundColor: "#2AB090" }}
                >
                  View Case Study{" "}
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.18608 4.37364L2.06653 0.259206C1.72049 -0.086402 1.1583 -0.086402 0.812263 0.259206C0.466225 0.604814 0.466225 1.16631 0.812263 1.51191L4.30469 5L0.812263 8.4881C0.466225 8.8337 0.466225 9.3952 0.812263 9.7408C0.98528 9.91361 1.2123 10 1.43939 10C1.66647 10 1.89351 9.9136 2.06651 9.7408L6.18606 5.62637C6.5321 5.28076 6.5321 4.71927 6.18606 4.37366L6.18608 4.37364Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </p>
            </div>
            <div>
              <img src={maskgroup3} alt="Mask Group 2" />
            </div>
          </div>
        </div>
      </section>
      <section class="testimonials">
        <h2>Testimonials</h2>
        <p class="intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="testimonial-grid">
          <div class="testimonial-card">
            <span class="quote">“</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="client-info">
              <div>
                <img src={client1} alt="Client 1" class="avatar" />
              </div>
              <span class="client-name">Client Name</span>
            </div>
          </div>
          <div class="testimonial-card">
            <span class="quote">“</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="client-info">
              <div>
                <img src={client2} alt="Client 2" class="avatar" />
              </div>
              <span class="client-name">Client Name</span>
            </div>
          </div>
          <div class="testimonial-card">
            <span class="quote">“</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="client-info">
              <div>
                <img src={client3} alt="Client 3" class="avatar" />
              </div>
              <span class="client-name">Client Name</span>
            </div>
          </div>
          <div class="testimonial-card">
            <span class="quote">“</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="client-info">
              <div>
                <img src={client4} alt="Client 4" class="avatar" />
              </div>
              <span class="client-name">Client Name</span>
            </div>
          </div>
        </div>
      </section>

      <section class="case-studies-section">
        <div class="case-studies-head">
          <h2>Recent Work</h2>
          <p>Solving user & business problems since last 15+ years.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div class="cards" style={{ flexDirection: "row" }}>
          <div class="card rev-flex-column">
            <div>
              <p
                class="span"
                style={{ color: " #FFA217", backgroundColor: " #ffa2175c" }}
              >
                Fintech
              </p>
              <h2>Work name here</h2>
              <p>
                Labore et dolore magna aliqua. sed do eiusmod tempor incididunt
                ut labore et dolore magna.
              </p>
              <p>
                <a
                  href="#"
                  class="btn-sm"
                  style={{ backgroundColor: "#3F8E00" }}
                >
                  Know more{" "}
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.18608 4.37364L2.06653 0.259206C1.72049 -0.086402 1.1583 -0.086402 0.812263 0.259206C0.466225 0.604814 0.466225 1.16631 0.812263 1.51191L4.30469 5L0.812263 8.4881C0.466225 8.8337 0.466225 9.3952 0.812263 9.7408C0.98528 9.91361 1.2123 10 1.43939 10C1.66647 10 1.89351 9.9136 2.06651 9.7408L6.18606 5.62637C6.5321 5.28076 6.5321 4.71927 6.18606 4.37366L6.18608 4.37364Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </p>
            </div>
            <div>
              <img src={imageone} alt="Image-1" />
            </div>
          </div>

          <div class="card rev-flex-column">
            <div>
              <p
                class="span"
                style={{ color: " #2AB090", backgroundColor: " #2ab0915c" }}
              >
                Pharma
              </p>
              <h2>Work name here</h2>
              <p>
                Labore et dolore magna aliqua. sed do eiusmod tempor incididunt
                ut labore et dolore magna.
              </p>
              <p>
                <a
                  href="#"
                  class="btn-sm"
                  style={{ backgroundColor: "#3F8E00" }}
                >
                  Know more{" "}
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.18608 4.37364L2.06653 0.259206C1.72049 -0.086402 1.1583 -0.086402 0.812263 0.259206C0.466225 0.604814 0.466225 1.16631 0.812263 1.51191L4.30469 5L0.812263 8.4881C0.466225 8.8337 0.466225 9.3952 0.812263 9.7408C0.98528 9.91361 1.2123 10 1.43939 10C1.66647 10 1.89351 9.9136 2.06651 9.7408L6.18606 5.62637C6.5321 5.28076 6.5321 4.71927 6.18606 4.37366L6.18608 4.37364Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </p>
            </div>
            <div>
              <img src={imagetwo} alt="Image-2" />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-black">
        <div class="contact-section">
          <h2>Get In Touch</h2>
          <p class="intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form class="contact-form">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Please enter your email"
              required
            />

            <label for="mobile">Mobile</label>
            <input type="tel" id="mobile" placeholder="Enter mobile" required />

            <label for="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" class="submit-btn">
              Submit{" "}
              <svg
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.18608 4.37364L2.06653 0.259206C1.72049 -0.086402 1.1583 -0.086402 0.812263 0.259206C0.466225 0.604814 0.466225 1.16631 0.812263 1.51191L4.30469 5L0.812263 8.4881C0.466225 8.8337 0.466225 9.3952 0.812263 9.7408C0.98528 9.91361 1.2123 10 1.43939 10C1.66647 10 1.89351 9.9136 2.06651 9.7408L6.18606 5.62637C6.5321 5.28076 6.5321 4.71927 6.18606 4.37366L6.18608 4.37364Z"
                  fill="white"
                />
              </svg>
            </button>
          </form>
        </div>
        <div class=""></div>
      </section>
      <footer>
        <span>Made with ❤️</span>
      </footer>
    </>
  );
}

export default AppOrginal;
