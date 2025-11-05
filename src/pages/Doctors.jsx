import React, { useMemo, useState } from "react";
import "./Doctors.css";
import SearchRibbon from "../components/SearchRibbon";
import DoctorCard from "../components/DoctorCard";

export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Prerna Narang",
    specialization: "Male-Female Infertility",
    rating: "4.8",
    photo:
      "https://plus.unsplash.com/premium_photo-1664474647299-7ef90322be6c?q=80&w=1169&auto=format&fit=crop",
    about:
      "I am Dr. Prerna Narang, a Dermatologist specializing in skin care and cosmetic treatments. My focus is on providing quality care to all patients.",
    experience: 7,
    languages: ["English", "Hindi", "Marathi"],
    videoPrice: 700,
    chatPrice: "Free",
  },
  {
    id: 2,
    name: "Dr. Prerna Narang",
    specialization: "Male-Female Infertility",
    rating: "4.8",
    photo:
      "https://plus.unsplash.com/premium_photo-1664474647299-7ef90322be6c?q=80&w=1169&auto=format&fit=crop",
    about:
      "I am Dr. Prerna Narang, a Dermatologist specializing in skin care and cosmetic treatments. My focus is on providing quality care to all patients.",
    experience: 7,
    languages: ["English", "Hindi", "Marathi"],
    videoPrice: 700,
    chatPrice: "Free",
  },
  {
    id: 3,
    name: "Dr. Prerna Narang",
    specialization: "Male-Female Infertility",
    rating: "4.8",
    photo:
      "https://plus.unsplash.com/premium_photo-1664474647299-7ef90322be6c?q=80&w=1169&auto=format&fit=crop",
    about:
      "I am Dr. Prerna Narang, a Dermatologist specializing in skin care and cosmetic treatments. My focus is on providing quality care to all patients.",
    experience: 7,
    languages: ["English", "Hindi", "Marathi"],
    videoPrice: 700,
    chatPrice: "Free",
  },
];

export default function Doctors() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({});

  const list = useMemo(() => {
    return DOCTORS.filter((d) =>
      d.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div className="page">
      <SearchRibbon
        query={query}
        setQuery={setQuery}
        filters={filters}
        setFilters={setFilters}
      />
      <div className="cards-container">
        {list.length > 0 ? (
          list.map((d) => <DoctorCard key={d.id} doc={d} />)
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
}
