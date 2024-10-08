"use client";
import Link from "next/link";
import Data from "../data/FullData.json";
import React, { useEffect, useState } from "react";

const Headear = ({ selectedZone, setSelectedZone }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = Data.filter((item) => {
    const searchFields = [
      "code",
      "name",
      "teamname",
      "category",
      "offstage1",
      "offstage2",
      "offstage3",
      "offstage4",
      "offstage5",
      "offstage6",
      "offstage7",
      "offstage8",
      "offstage9",
      "offstage10",
      "offstage11",
      "offstage12",
      "offstage13",
      "offstage14",
      "offstage15",
      "offstage16",
      "offstage17",
      "offstage18",
      "offstage19",
      "offstage20",
      "offstage21",
      "offstage22",
      "offstage23",
      "offstage24",
      "offstage25",
      "offstage26",
      "offstage27",
      "offstage28",
      "offstage29",
      "offstage30",
      "offstage31",
      "offstage32",
      "offstage33",
      "offstage34",
      "offstage35",
      "offstage36",
      "offstage37",
      "offstage38",
      "offstage39",
      "offstage40",
      "offstage41",
      "offstage42",
      "offstage43",
      "offstage44",
      "offstage45",
      "offstage46",
      "offstage47",
      "offstage48",
      "offstage49",
      "offstage50",
      
      "stage1",
      "stage2",
      "stage3",
      "stage4",
      "stage5",
      "stage6",
      "stage7",
      "stage8",
      "stage9",
      "stage10",
      "stage11",
      "stage12",
      "stage13",
      "stage14",
      "stage15",
      "stage16",
      "stage17",
      "stage18",
      "stage19",
      "stage20",
      "stage21",
      "stage22",
      "stage23",
      "stage24",
      "stage25",
      "stage26",
      "stage27",
      "stage28",
      "stage29",
      "stage30",
      
      "groupstage1",
      "groupstage2",
      "groupstage3",
      "groupstage4",

      "groupoffstage1",
      "groupoffstage2",
      "groupoffstage3",
      "groupoffstage4",
      

    ];

    // Check if the selectedZone is not empty, and filter by zone if applicable
    if (selectedZone) {
      return (
        item.zone.toLowerCase() === selectedZone.toLowerCase() &&
        searchFields.some((field) => {
          const fieldValue = item[field] || "";
          return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    } else {
      return searchFields.some((field) => {
        const fieldValue = item[field] || "";
        return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  });
  return (
    <div className="lg:fixed lg:right-20 lg:top-5 bg-white w-full lg:w-fit text-center rounded-full lg:p-4 px-4 p-10">
      <select
        value={selectedZone}
        onChange={(e) => {
          localStorage.setItem("zone", e.target.value);
          setSelectedZone(e.target.value);
        }}
        className="w-2/3 px-4 py-2 rounded-xl border-2 border-dashed border-primary mt-3"
      >
        <option value="">All Teams</option>
        {/* Assuming the zones are available in your data */}
        {Array.from(new Set(Data.map((item) => item.zone))).map(
          (zone, index) => (
            <option key={index} value={zone}>
              {zone}
            </option>
          ),
        )}
      </select>

      <Link
        className="bg-white text-primary p-2 hover:bg-secondary font-bold rounded-2xl mx-1"
        href="/"
      >
        Candidates
      </Link>

      <Link
        className="bg-white text-primary p-2 hover:bg-secondary font-bold rounded-2xl mx-1"
        href="/program"
      >
        Programs
      </Link>
      <Link
            className="bg-white text-slate-800 p-2 hover:bg-secondary font-bold rounded-2xl mx-1"
            href="https://maerika2k24-results.netlify.app"
          >
            Check Result
          </Link>

      
      <Link
            className="bg-white text-slate-800 p-2 hover:bg-secondary font-bold rounded-2xl mx-1"
            href="https://stats.uptimerobot.com/yZZTIGtjWk"
          >
            Status
          </Link>
    </div>
  );
};

export default Headear;
