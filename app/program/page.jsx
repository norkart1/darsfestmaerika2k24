"use client";
import React, { useState , useEffect } from "react";
import Data from "../../data/FullData.json";
import Link from "next/link";
import Headear from "@/components/Headear";
function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedZone, setSelectedZone] = useState("");


  useEffect (()=>{
    const zone = localStorage.getItem("zone")

    setSelectedZone(zone)
  })

  const programFields = [
 
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
    

  ];
  const allValues = Data.reduce((result, item) => {
    programFields.forEach((field) => {
      if (item[field]) {
        const programValue = item[field];
        const candidates = Data.filter((candidate) => {
          return programFields.some((fieldToCheck) => {
            return (
              candidate[fieldToCheck] === programValue && candidate.category === item.category
            );
          });
        }).map((candidate) => ({
          code: candidate.code,
          name: candidate.name,
          darsplace: candidate.darsplace,
        }));
        result.push({
          program: programValue,
          category: item.category,
          candidates,
        });
      }
    });
  
    return result;
  }, []);

  const uniqueValues = allValues.reduce((unique, current) => {
    const isDuplicate = unique.some(
      (item) =>
        item.program === current.program && item.category === current.category
    );
    if (!isDuplicate) {
      // Generate a slug based on the first letter of the category and the first two letters of program
      const slug = generateSlug(current.category, current.program);
      unique.push({
        program: current.program,
        category: current.category,
        candidates: current.candidates,
        slug, // Add the slug here
      });
    }
    return unique;
  }, []);

  // Define a function to generate a slug based on category and program
  function generateSlug(category, program) {
    const categorySlug = category.charAt(0);
    const programSlug = program.slice(0, 2);
    return categorySlug + programSlug;
  }

  const filteredData = uniqueValues.filter((item) => {
    return programFields.some((field) => {
      const fieldValue = item[field] || ""; // Ensure a default value if the field is undefined
      return fieldValue.toLowerCase().includes(searchTerm.toLowerCase());
    });
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (<>
    <Headear selectedZone={selectedZone} setSelectedZone={setSelectedZone}/>
    <div className="p-12 pt-0 lg:p-20">

      <div className="flex flex-col items-center gap-4">

        <h1 className="text-center font-extrabold text-3xl text-primary mb-3">
          Program Search
        </h1>
        <input
          type="text"
          placeholder="Search by CODE, Name, Dars Name, etc."
          value={searchTerm}
          onChange={handleSearch}
          className="w-2/3 px-4 py-2 rounded-xl border-2 border-dashed border-primary"
        />
        <div className="flex flex-wrap gap-2 justify-center mt-3">
          {filteredData.map((item, index) => (
            <Link key={index} href={`/program/${item.slug}`}>
              <div
                className="w-72 bg-secondary p-6 rounded-xl flex flex-col gap-2 items-start cursor-pointer"
              >
                <div className="flex justify-between items-center w-full">
                  {" "}
                  <h1 className="px-2 py-1 bg-primary inline rounded-lg text-white font-semibold">
                    {item.category}
                  </h1>
                  <h1 className="text-primary font-semibold">
                    {item.candidates.length} Candidates
                  </h1>
                </div>
                <div className="line-clamp-2 border-2 h-16 p-3 my-2 border-primary flex items-center justify-center rounded-xl border-dashed w-full">
                  <p className="line-clamp-2 text-center">{item.program}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div></>
  );
}

export default Search;
