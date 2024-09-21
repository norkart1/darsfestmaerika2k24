"use client";
import React, { useEffect, useState } from "react";
import Data from "../data/FullData.json";
import Link from "next/link";
import Headear from "@/components/Headear";
function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null); // State to store the selected item
  const [selectedZone, setSelectedZone] = useState("");


  useEffect(()=>{
    const zone = localStorage.getItem("zone")

    setSelectedZone(zone)
  })

  const filteredData = Data.filter((item) => {
    const searchFields = [
      "code",
      "name",
      "teamname",
      "category",
      
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
  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const openPopup = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (<>
    <Headear selectedZone={selectedZone} setSelectedZone={setSelectedZone} />
    <div className="p-12 pt-0 lg:p-20">
      <div className="flex flex-col items-center gap-4">

        <h1 className="text-center font-extrabold text-3xl text-primary mb-3">
          Candidate Search
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
            <div
              className="w-72 bg-secondary p-6 rounded-xl flex flex-col gap-2 items-start cursor-pointer"
              key={index}
              onClick={() => openPopup(item)}
            >
              <h1 className="px-2 py-1 bg-primary inline rounded-lg text-white font-semibold">
                {item.code}
              </h1>
              <p className="line-clamp-2 h-12">{item.name}</p>
            </div>
          ))}
        </div>
        {selectedItem && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center  items-center">
            <div className="bg-white p-10 rounded-xl flex flex-col items-center max-w-[400px] text-center">
              <p className="px-2 py-1 bg-primary inline rounded-lg text-white font-semibold">
                {selectedItem.code}
              </p>
              <p className="font-bold text-xl text-primary">
                {selectedItem.name}
              </p>
              <p className="font-bold -mt-1 text-sm ">
                {selectedItem.category} Category
              </p>

              <p className="text-sm mt-3 font-bold text-primary">Team Name</p>
              <p className="font-bold -mt-1 mb-4">{selectedItem.teamname}</p>

              {selectedItem.stage1 ||
              selectedItem.stage2 ||
              selectedItem.stage3 ||
              selectedItem.stage4 ||
              selectedItem.stage5 ||
              selectedItem.stage6 ||
              selectedItem.stage7 ||
              selectedItem.stage8 ||
              selectedItem.stage9 ||
              selectedItem.stage10 ||
              selectedItem.stage12 ||
              selectedItem.stage12 ||
              selectedItem.stage13 ||
              selectedItem.stage14 ||
              selectedItem.stage15 ||
              selectedItem.stage16 ||
              selectedItem.stage17 ||
              selectedItem.stage18 ||
              selectedItem.stage19 ||
              selectedItem.stage20 ||
              selectedItem.stage21 ||
              selectedItem.stage22 ||
              selectedItem.stage23 ||
              selectedItem.stage24 ||   
              selectedItem.stage25 ||
              selectedItem.stage26 ||
              selectedItem.stage27 ||
              selectedItem.stage28 ||
              selectedItem.stage29 ||
              selectedItem.stage30 ||
      
              selectedItem.groupstage1 ||
              selectedItem.groupstage2 ||
              selectedItem.groupstage3 ||
              selectedItem.groupstage4 ? (
                <>
                  <p className="bg-primary text-sm text-white px-2 py-1 -mb-2 rounded-lg">
                    stage
                  </p>
                  <div className="border-2 border-dashed border-primary p-3 mb-2 rounded-xl text-center">
                    <p>{selectedItem.stage1}</p>
                    <p>{selectedItem.stage2}</p>
                    <p>{selectedItem.stage3}</p>
                    <p>{selectedItem.stage4}</p>
                     <p>{selectedItem.stage5}</p>
     <p>{selectedItem.stage6}</p>
     <p>{selectedItem.stage7}</p>
     <p>{selectedItem.stage8}</p>
     <p>{selectedItem.stage9}</p>
     <p>{selectedItem.stage10}</p>
     <p>{selectedItem.stage11}</p>
     <p>{selectedItem.stage12}</p>
     <p>{selectedItem.stage13}</p>
     <p>{selectedItem.stage14}</p>
     <p>{selectedItem.stage15}</p>
     <p>{selectedItem.stage16}</p>
     <p>{selectedItem.stage17}</p>
     <p>{selectedItem.stage18}</p>
     <p>{selectedItem.stage19}</p>
     <p>{selectedItem.stage20}</p>
     <p>{selectedItem.stage21}</p>
     <p>{selectedItem.stage22}</p>
     <p>{selectedItem.stage23}</p>
     <p>{selectedItem.stage24}</p>         
     <p>{selectedItem.stage25}</p>
     <p>{selectedItem.stage26}</p>
     <p>{selectedItem.stage27}</p>
     <p>{selectedItem.stage28}</p>
     <p>{selectedItem.stage29}</p>
     <p>{selectedItem.stage30}</p>
                    <p>{selectedItem.groupstage1}</p>
                    <p>{selectedItem.groupstage2}</p>
                    <p>{selectedItem.groupstage3}</p>
                    <p>{selectedItem.groupstage4}</p>
                  </div>
                </>
              ) : null}

              {selectedItem.offstage1 ||
              selectedItem.offstage2 ||
              selectedItem.offstage3 ||
              selectedItem.offstage4 ||
      selectedItem.offstage5 ||
      selectedItem.offstage6 ||
      selectedItem.offstage7 ||
      selectedItem.offstage8 ||
      selectedItem.offstage9 ||
      selectedItem.offstage10 ||
      selectedItem.offstage11 ||
      selectedItem.offstage12 ||
      selectedItem.offstage13 ||
      selectedItem.offstage14 ||
      selectedItem.offstage15 ||
      selectedItem.offstage16 ||
      selectedItem.offstage17 ||
      selectedItem.offstage18 ||
      selectedItem.offstage19 ||
      selectedItem.offstage20 ||    
      selectedItem.offstage21 ||
      selectedItem.offstage22 ||
      selectedItem.offstage23 ||
      selectedItem.offstage24 ||
      selectedItem.offstage25 ||
      selectedItem.offstage26 ||
      selectedItem.offstage27 ||
      selectedItem.offstage28 ||
      selectedItem.offstage20 ||
      selectedItem.offstage30 ||
      selectedItem.offstage31 ||
      selectedItem.offstage32 ||
      selectedItem.offstage33 ||
      selectedItem.offstage34 ||
      selectedItem.offstage35 ||
      selectedItem.offstage36 ||
      selectedItem.offstage37 ||
      selectedItem.offstage38 ||
      selectedItem.offstage39 ||
      selectedItem.offstage40 ||
      selectedItem.offstage41 ||    
      selectedItem.offstage42 ||
      selectedItem.offstage43 ||
      selectedItem.offstage44 ||
      selectedItem.offstage45 ||
      selectedItem.offstage46 ||
      selectedItem.offstage47 ||
      selectedItem.offstage48 ||
      selectedItem.offstage49 ||
      selectedItem.offstage50 ||
      
              selectedItem.groupoffstage1 ||
              selectedItem.groupoffstage2 ||
              selectedItem.groupoffstage3 ||
              selectedItem.groupoffstage4  ? (
                <>
                  <p className="bg-primary text-sm text-white px-2 py-1 -mb-2 rounded-lg">
                    offstage
                  </p>
                  <div className="border-2 border-dashed border-primary p-3 mb-2 rounded-xl text-center">
                    <p>{selectedItem.offstage1}</p>
                    <p>{selectedItem.offstage2}</p>
                    <p>{selectedItem.offstage3}</p>
                    <p>{selectedItem.offstage4}</p> 
     <p>{selectedItem.offstage5}</p>
     <p>{selectedItem.offstage6}</p>
     <p>{selectedItem.offstage7}</p>
     <p>{selectedItem.offstage8}</p>
     <p>{selectedItem.offstage9}</p>
     <p>{selectedItem.offstage10}</p>
     <p>{selectedItem.offstage11}</p>
     <p>{selectedItem.offstage12}</p>
     <p>{selectedItem.offstage13}</p>
     <p>{selectedItem.offstage14}</p>
     <p>{selectedItem.offstage15}</p>
     <p>{selectedItem.offstage16}</p>
     <p>{selectedItem.offstage17}</p>
     <p>{selectedItem.offstage18}</p>
     <p>{selectedItem.offstage19}</p>
     <p>{selectedItem.offstage20}</p>
     <p>{selectedItem.offstage21}</p>
     <p>{selectedItem.offstage22}</p>
     <p>{selectedItem.offstage23}</p>
     <p>{selectedItem.offstage24}</p>
     <p>{selectedItem.offstage25}</p>
                       <p>{selectedItem.offstage26}</p>
                    <p>{selectedItem.offstage27}</p>
                    <p>{selectedItem.offstage28}</p>
                    <p>{selectedItem.offstage29}</p> 
     <p>{selectedItem.offstage30}</p>
     <p>{selectedItem.offstage31}</p>
     <p>{selectedItem.offstage32}</p>
     <p>{selectedItem.offstage33}</p>
     <p>{selectedItem.offstage34}</p>
     <p>{selectedItem.offstage35}</p>
     <p>{selectedItem.offstage36}</p>
     <p>{selectedItem.offstage37}</p>
     <p>{selectedItem.offstage38}</p>
     <p>{selectedItem.offstage39}</p>
     <p>{selectedItem.offstage40}</p>
     <p>{selectedItem.offstage41}</p>
     <p>{selectedItem.offstage42}</p>
     <p>{selectedItem.offstage43}</p>
     <p>{selectedItem.offstage44}</p>
     <p>{selectedItem.offstage45}</p>
     <p>{selectedItem.offstage46}</p>
     <p>{selectedItem.offstage47}</p>
     <p>{selectedItem.offstage48}</p>
     <p>{selectedItem.offstage49}</p>
     <p>{selectedItem.offstage50}</p>
                    <p>{selectedItem.groupoffstage1}</p>
                    <p>{selectedItem.groupoffstage2}</p>
                    <p>{selectedItem.groupoffstage3}</p>
                    <p>{selectedItem.groupoffstage4}</p>
                  </div>
                </>
              ) : null}
              <p className="my-3 text-sm">for enquiries contact admin</p>
              <button
                className="bg-red-700 text-white font-bold px-3 py-2 rounded-lg"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div></>
  );
}

export default Search;
