import React, { useState } from "react";
import "./SearchRibbon.css";

export default function SearchRibbon({ query, setQuery, filters, setFilters }) {
  const [location, setLocation] = useState("");

  const setTag = (key, val) => setFilters((f) => ({ ...f, [key]: val }));
  const active = Object.entries(filters).filter(([k, v]) => v);

  return (
    <div className="wrap">
      <h2 className="h1">Find Expert Doctors For An In-Clinic Session Here</h2>

      <div className="ribbon">
        <div className="locationInput">
          <span className="icon">➤</span>
          <select
            className="search"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="" disabled>
              Select Location
            </option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        <div className="input">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="eg. Doctor, specialization, clinic name"
          />
          <button className="go">➜</button>
        </div>
      </div>

      <div className="filters">
        {[
          {
            label: "Expertise",
            options: ["Dermatology", "Gynecology", "Orthopedics"],
          },
          { label: "Gender", options: ["Male", "Female", "Other"] },
          { label: "Fees", options: ["<$50", "$50-$100", "$100+"] },
          {
            label: "Languages",
            options: ["English", "Telugu", "Hindi", "Marathi"],
          },
          { label: "All filters", options: ["Option 1", "Option 2"] },
        ].map(({ label, options }) => (
          <select
            key={label}
            className="select"
            defaultValue=""
            onChange={(e) => setTag(label.toLowerCase(), e.target.value)}
          >
            <option value="" disabled>
              {label}
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ))}
      </div>

      <div className="tags">
        {active.map(([k, v]) => (
          <span className="tag" key={k}>
            {v} ✕
          </span>
        ))}
      </div>
    </div>
  );
}
