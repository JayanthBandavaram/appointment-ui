import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { DOCTORS } from "./Doctors";
import "./Profile.css"; 

export default function Profile() {
  const { id } = useParams();
  const [mode, setMode] = useState("Video");
  const [picked, setPicked] = useState("11:00 AM");

  const doctor = DOCTORS.find((d) => d.id === parseInt(id));

  if (!doctor) {
    return <p className="noResults">Doctor not found</p>;
  }

  return (
    <div className="page">
      <div className="head">
        <img className="profile-avatar" src={doctor.photo} alt={doctor.name} />
        <div>
          <div className="profile-name">
            {doctor.name}
            <span style={{ color: "#4c64edff" }}> ✪ </span>
          </div>
          <div style={{ color: "#6f766f" }}>
            {doctor.specialization} <br /> {doctor.rating} ⭐⭐⭐⭐
          </div>
        </div>
        <div className="metrics">
          <div className="metric">
            <b>Followers</b>850
          </div>
          <div className="metric">
            <b>Following</b>18K
          </div>
          <div className="metric">
            <b>Posts</b>250
          </div>
        </div>
        <button className="action">Book an Appointment</button>
      </div>

      <div className="cols">
        <div>
          <div className="profilecard">
            <div className="titleRow">
              <div className="title">A Little About Me</div>
              <button className="followBtn">Follow +</button>
            </div>

            <p
              className="paragraph"
              style={{ color: "#6e756f", lineHeight: "1.6" }}
            >
              {doctor.about}
            </p>
            <div className="sectionn">
              <div className="section">
                <b>Language Spoken</b>
              </div>
              <div className="iconRow">
                <span className="pill">English</span>
                <span className="pill">Hindi</span>
                <span className="pill">Telugu</span>
              </div>
            </div>

            <div className="socialIcons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>

          <div className="profilecard">
            <div className="title">I Specialize In</div>
            <div className="specializeIcons">
              <div className="specializeItem">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/040/940/285/non_2x/beauty-logo-template-woman-silhouette-icon-illustration-vector.jpg"
                  alt="Women’s Health"
                />
                <span>Women’s Health</span>
              </div>
              <div className="specializeItem">
                <img
                  src="https://static.thenounproject.com/png/4635991-200.png"
                  alt="Skin Care"
                />
                <span>Skin Care</span>
              </div>
              <div className="specializeItem">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/028/337/375/non_2x/immunity-boost-icon-illustration-vector.jpg"
                  alt="Immunity"
                />
                <span>Immunity</span>
              </div>
              <div className="specializeItem">
                <img
                  src="https://img.freepik.com/premium-vector/hair-care-vector-icon-black-outline-eps-10-serum-oil-drop-illustration-beauty-medicine-treatment-concept-mesotherapy-hair-strengthening-symbol-flat-isolated-sign-white-web-app-dev_669518-63.jpg"
                  alt="Hair Care"
                />
                <span>Hair Care</span>
              </div>
            </div>
          </div>

          <div className="profilecard">
            <div className="title">The Concerns I Treat</div>
            <div className="iconRow">
              {[
                "Skin Treatment",
                "Pregnancy",
                "Period Doubts",
                "Endometriosis",
                "Pelvic Pain",
                "Ovarian Cysts",
                "+ 5 More",
              ].map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="profilecard">
            <div className="title">My Work Experience</div>
            <div
              className="section"
              style={{
                color: "#2F5F38",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              I HAVE BEEN IN PRACTICE FOR : 7+ YEARS
            </div>
            <div className="exp-container">
              <div className="exp-item">
                <div className="info">
                  <h3 className="heading">Midtown Medical Clinic</h3>
                  <p className="para">Senior Doctor</p>
                </div>

                <div className="years">2016–PRESENT</div>
              </div>

              <div className="exp-item">
                <div className="info">
                  <h3 className="heading">Midtown Medical Clinic</h3>
                  <p className="para">Senior Doctor</p>
                </div>
                <div className="years">2010-2015</div>
              </div>
            </div>
          </div>

          <div className="profilecard">
            <div className="title">Featured Reviews (102)</div>
            <div className="reviews-container">
              
              <div className="review-card">
                <div className="review-header">
                  <div className="review-user">
                    <img
                      src="https://i2-prod.mirror.co.uk/article33044544.ece/ALTERNATES/s1200c/0_olivia-cooke-dumped-her-northern-english-accent-to-achieve-acting-fame.jpg"
                      width="36"
                      height="36"
                      className="user-img"
                    />
                    <div>
                      <div className="user-name">
                        <b>Alicent Hightower</b>
                      </div>
                      <div className="user-subtext">
                        Consulted for Hair care
                      </div>
                    </div>
                  </div>
                  <div className="review-date">20 January 2023</div>
                </div>

                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <div className="review-text">
                  Might be bit early to confirm but yes I can see noticeable
                  difference in my hairfall. will write again after using it for
                  longer periods
                </div>
              </div>

             
              <div className="review-card">
                <div className="review-header">
                  <div className="review-user">
                    <img
                      src="https://i2-prod.mirror.co.uk/article33044544.ece/ALTERNATES/s1200c/0_olivia-cooke-dumped-her-northern-english-accent-to-achieve-acting-fame.jpg"
                      width="36"
                      height="36"
                      className="user-img"
                    />
                    <div>
                      <div className="user-name">
                        <b>Alicent Hightower</b>
                      </div>
                      <div className="user-subtext">
                        Consulted for Skin care
                      </div>
                    </div>
                  </div>
                  <div className="review-date">20 January 2023</div>
                </div>

                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <div className="review-text">
                  Might be bit early to confirm but yes I can see noticeable
                  difference in my hairfall. will write again after using it for
                  longer periods
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="profilecard">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="title">Appointment Fee</div>
              <div className="appoint-amount">₹699.00</div>
            </div>

            <div className="title" style={{ marginTop: "10px" }}>
              Select your mode of session
            </div>
            <div className="sessionOpts">
              {" "}
              {["In-Clinic", "Video", "Chat"].map((eachoption) => (
                <div
                  key={eachoption}
                  className={`opt ${mode === eachoption ? "active" : ""}`}
                  onClick={() => setMode(eachoption)}
                >
                  {" "}
                  <div
                    style={{
                      fontWeight: 350,
                      color: "#3A643B",
                      font: "Gotham Rounded",
                    }}
                  >
                    {" "}
                    {eachoption} {mode === eachoption ? "✅" : ""}{" "}
                  </div>{" "}
                  <div style={{ color: "#6e756f" }}>
                    {" "}
                    {eachoption === "Chat" ? "10 Mins" : "45 Mins"}{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>

            <div
              className="row"
              style={{ justifyContent: "space-between", marginTop: "14px" }}
            >
              <div className="title">Pick a time slot</div>
              <div>📅</div>
            </div>

            <div className="slotDeck">
              <button className="time">‹</button>
              {[
                { day: "Mon, 10 Oct", slots: "10 slots", tone: "#B9D6BF" },
                { day: "Tue, 11 Oct", slots: "02 slots", tone: "#D66B2E" },
                { day: "Wed, 12 Oct", slots: "05 slots", tone: "#E0B44F" },
              ].map((d, i) => (
                <div key={i} className="slot">
                  <strong>{d.day}</strong>
                  <small>{d.slots}</small>
                </div>
              ))}
              <button className="time">›</button>
            </div>

            <div className="title">Morning</div>
            <div className="times">
              {[
                "09:00 AM",
                "09:30 AM",
                "10:00 AM",
                "10:15 AM",
                "10:45 AM",
                "11:00 AM",
              ].map((t) => (
                <button
                  key={t}
                  className={`time ${picked === t ? "active" : ""}`}
                  onClick={() => setPicked(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="title">Evening</div>
            <div className="times">
              {["04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM", "05:15 PM"].map(
                (t) => (
                  <button
                    key={t}
                    className={`time ${picked === t ? "active" : ""}`}
                    onClick={() => setPicked(t)}
                  >
                    {t}
                  </button>
                )
              )}
            </div>

            <button className="appointment-button">Make An Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
