"use client";

import { useState } from "react";

export default function SearchBox() {
  const [company, setCompany] = useState("");

  const handleSearch = () => {
    if (!company.trim()) return;

    window.location.href =
      `/profile/${company}`;
  };

  return (
    <div className="w-full max-w-3xl">

      <div className="flex gap-3">

        <input
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
          placeholder="Search company..."
          className="
          flex-1
          rounded-xl
          border
          border-slate-700
          bg-slate-900
          p-4
          text-white
          outline-none
          focus:border-cyan-400
          "
        />

        <button
          onClick={handleSearch}
          className="
          rounded-xl
          bg-cyan-500
          px-6
          font-semibold
          text-black
          hover:bg-cyan-400
          transition
          "
        >
          Analyze
        </button>

      </div>

    </div>
  );
}