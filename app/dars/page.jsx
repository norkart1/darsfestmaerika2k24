"use client";
import React, { useState , useEffect } from "react";
import Link from "next/link";
import Data from "../../data/FullData.json";
import Headear from "@/components/Headear";

function DarsWise() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedZone, setSelectedZone] = useState("");

  

  useEffect (()=>{
    const zone = localStorage.getItem("zone")

    setSelectedZone(zone)
  })
  const uniqueData = Array.from(new Set(Data.map((item) => item.teamname))).map(
    (teamname) => {
      return Data.find((item) => item.teamname === teamname);
    }
  );

  useEffect(()=>{
    const filteredResults =  uniqueData.filter((item) => {
      return item.zone.toLowerCase() === selectedZone.toLowerCase()
    });

    setFilteredData(filteredResults)
  },[selectedZone])


  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchText(searchTerm);

    // Filter the uniqueData based on the search input
    if(selectedZone){
      const filteredResults =  uniqueData.filter((item) => {
        return item.zone.toLowerCase() === selectedZone.toLowerCase() && item.teamname.toLowerCase().includes(searchTerm.toLowerCase());
      });
  
      setFilteredData(filteredResults);
    }else{
      const filteredResults =  uniqueData.filter((item) => {
        return item.teamname.toLowerCase().includes(searchTerm.toLowerCase());
      });
  
      setFilteredData(filteredResults);
    }
  
  };

  // Check if filteredData is empty, and display uniqueData if it is
  const displayData = filteredData.length > 0 ? filteredData : uniqueData;


  return (<>
    <Headear selectedZone={selectedZone} setSelectedZone={setSelectedZone}/>
    <div className="p-12 pt-0 lg:p-20 flex flex-col">
            
      <h1 className="text-center font-extrabold text-3xl text-primary mb-3">
        Team Wise Program List
      </h1>
      <input
        type="text"
        placeholder="Search by Team Name"
        value={searchText}
        onChange={handleSearch}
        className="w-full px-4 py-2 rounded-xl border-2 border-dashed border-primary"
      />
      <div className="flex flex-wrap gap-2 justify-center mt-3">
        {displayData.map((item, index) => (
          <div key={index} className="w-72 bg-secondary p-6 rounded-xl">
            <h1 className="font-bold line-clamp-2 h-12">{item.teamname}</h1>
            <div className="flex gap-2 mt-1">
             
              <Link href={`/team/sr/${item.slug}`}>
                <button className="px-2 py-1 bg-primary hover:bg-primaryDark rounded-lg text-white font-semibold">
                  PROGRAM
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div></>
  );
}

export default DarsWise;
