import React from "react";
import "./DoctorCard.css";
import { Link } from "react-router-dom";

export default function DoctorCard({ doc }) {
  return (
    <div className="card">
      <div className="top">
        <img className="avatar" src={doc.photo} alt={doc.name} />
        <div className="rate">{doc.rating}⭐</div>
      </div>
      <h3 className="name">{doc.name}</h3>
      <div className="details">
        <div>🧬 {doc.specialization}</div>
        <div>🎓 {doc.experience} years of Experience</div>
        <div>💬 Speaks: {doc.languages.join(", ")}</div>
      </div>
      <div className="badges">
        <div className="badge">
          <div>Video Consultation</div>
          <div className="price">₹{doc.videoPrice}</div>
        </div>
        <div className="badge">
          <div>Chat Consultation</div>
          <div className="price">{doc.chatPrice}</div>
        </div>
      </div>
      <div className="actions">
        <Link to={`/profile/${doc.id}`} className="ghost">
          View Profile
        </Link>
        <button className="bookconsultation">Book a consultation</button>
      </div>
    </div>
  );
}
