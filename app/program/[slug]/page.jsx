"use client"; // This tells Next.js to render this component on the client-side

import React from "react";
import { useParams } from "next/navigation";
import Data from "../../../data/FullData.json";

function ProgramDetail() {
  const { slug } = useParams();
  const programFields = [
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
              candidate[fieldToCheck] === programValue &&
              candidate.category === item.category
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
        slug,
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

  const programData = uniqueValues.find((item) => item.slug === slug);

  if (programData) {
    programData.candidates.sort((a, b) => {
      // Assuming that 'darsplace' is a string property, you can use localeCompare for string comparison.
      return a.darsplace.localeCompare(b.darsplace);
    });
  }

  if (!programData) {
    // Handle the case where the program is not found
    return <div>Program not found</div>;
  }

  return (
    <div className="p-20 print:p-2 lg:flex lg:flex-col lg:items-center">
      <div className="text-center">
        <p className="text-3xl font-bold ">Maerika2k24 </p>
        <p className="text-2xl font-bold my-2">
          Jawharathul Uloom Suffa Dars Art Fest 2k24
        </p>
        <h1 className="font-bold mt-2 border-y-2 mb-4 border-black">
          {programData.program} ({programData.category})
        </h1>
      </div>

      <table className="m-3">
        <thead>
          <tr className="print:bg-black print:text-white bg-black text-white">
            <th className="p-1">Sl No</th>
            <th className="p-1">Code</th>
            <th className="p-1">Name </th>
            <th className="p-1">Team Name</th>
            <th className="p-1">Mark</th>
            <th className="p-1">Grade</th>
          </tr>
        </thead>
        <tbody>
          {programData.candidates.map((v, i) => (
            <tr key={i} className="">
              <td className="px-1 text-center w-8">{i + 1}</td>
              <td className="px-1 text-center w-10">{v.code}</td>
              <td className="px-1 w-64 line-clamp-1">{v.name}</td>
              <td className="px-1 w-44">{v.darsplace}</td>
              <td className="px-1 w-10"></td>
              <td className="px-1 w-8"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProgramDetail;
