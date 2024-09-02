"use client";
import React from "react";
import { useParams } from "next/navigation";
import Data from "../../../../data/FullData.json";

function DarsDetails() {
  const { slug } = useParams();
  const selectedDars = Data.find((item) => item.slug === slug);
  const darsData = Data.filter(
    (item) => item.slug === slug && item.category === "PROGRAM"
  );

  if (!selectedDars) {
    return <div>No data found for pis slug.</div>;
  }

  const containsNumber1to9 = (values, number) =>
    values.some((value) => value && value.includes(number));
  const containsNumber = (values, number) =>
    values.some((value) => value && value.includes(number + 20));
  return (
    <div className="text-center text-xs m-10 print:m-0 p-8 rounded-xl mr-6">
      <p className="text-3xl font-bold ">Maerika2k24</p>
      <p className="text-2xl font-bold mb-2">Jawharathul Uloom Suffa Dars Art Fest 2k24</p>
      <div className="">
        <div className="flex h-48 items-end mb-8 w-[1260px]">
          <div className="w-[400px] my-auto text-center">
            <p className="text-2xl font-bold ">{selectedDars.darsname}</p>
            <p className="font-bold mt-2">Program List for Senior Category</p>
          </div>
          <div className="">
            <div className="flex whitespace-nowrap font-semibold">
              <p className="w-6 -rotate-90">ഖിറാഅത്ത്</p>
              <p className="w-6 -rotate-90">ഹിഫ്ള്</p>
              <p className="w-6 -rotate-90">വാങ്ക്</p>
              <p className="w-6 -rotate-90">പ്രസംഗം അറബി</p>
              <p className="w-6 -rotate-90">പ്രസംഗം മലയാളം</p>
              <p className="w-6 -rotate-90">പ്രസംഗം ഇംഗ്ലീഷ്</p>
              <p className="w-6 -rotate-90">അറബി ഗാനം</p>
              <p className="w-6 -rotate-90">മലയാള ഗാനം</p>
              <p className="w-6 -rotate-90">ഉറുദു ഗാനം</p>
              <p className="w-6 -rotate-90">മധുര മലയാളം</p>
              <p className="w-6 -rotate-90">ക്ലാസ്സ് അവതരണം</p>
              <p className="w-6 -rotate-90">അനൗൺസ്മെൻ്റ്</p>
              <p className="w-6 -rotate-90">വഅ്ള്</p>
              <p className="w-6 -rotate-90">കവിതാലാപനം</p>
              <p className="w-6 -rotate-90">മുശാഅറ</p>
              <p className="w-6 -rotate-90">ആദർശ ക്ലാസ്സ്</p>
              
              <p className="w-6 -rotate-90">മാലപാട്ട്</p>
              <p className="w-6 -rotate-90">
                സംഘഗാനം(മാപ്പിളപ്പാട്ട്)
              </p>
              <p className="w-6 -rotate-90">കഥാപ്രസംഗം </p>
              <p className="w-6 -rotate-90">ബുറുദ</p>
              
              <p className="w-6 -rotate-90">മെമ്മറി ടെസ്റ്</p>
              <p className="w-6 -rotate-90">ക്വിസ്സ് </p>
              <p className="w-6 -rotate-90">പെൻസിൽ ഡ്രോയിങ്</p>
              <p className="w-6 -rotate-90">ചിത്ര രചന</p>
              <p className="w-6 -rotate-90">പ്രബന്ധം അറബി </p>
              <p className="w-6 -rotate-90">പ്രബന്ധം ഇംഗ്ലീഷ് </p>
              <p className="w-6 -rotate-90">പ്രബന്ധം മലയാളം </p>
              <p className="w-6 -rotate-90">പദപയറ്റ് അറബി </p>
              <p className="w-6 -rotate-90">പദപയറ്റ് ഇംഗ്ലീഷ്</p>
              <p className="w-6 -rotate-90">കയ്യെഴുത്ത് അറബി</p>
              <p className="w-6 -rotate-90">കയ്യെഴുത്ത് മലയാളം</p>
              <p className="w-6 -rotate-90">കയ്യെഴുത്ത് ഇംഗ്ലീഷ്</p>
              <p className="w-6 -rotate-90">തലക്കെട്ട് നിർമ്മാണം</p>
              <p className="w-6 -rotate-90">പോസ്റ്റർ നിർമ്മാണം</p>
              <p className="w-6 -rotate-90">
                നിഘണ്ടു നിര്‍മ്മാണം (അറ){" "}
              </p>
              <p className="w-6 -rotate-90">
                നിഘണ്ടു നിര്‍മ്മാണം (ഇംഗ്ലീഷ്){" "}
              </p>
              <p className="w-6 -rotate-90">അടിക്കുറിപ്പ് </p>
              <p className="w-6 -rotate-90">കൊളാഷ് നിർമ്മാണം</p>
              <p className="w-6 -rotate-90">കവിതാരചന മലയാളം</p>
              <p className="w-6 -rotate-90">ടൈപ്പിംഗ് മലയാളം</p>
              <p className="w-6 -rotate-90">ടൈപ്പിംഗ് അറബി</p>
              <p className="w-6 -rotate-90">ടൈപ്പിംഗ് ഇംഗ്ലീഷ്</p>
              <p className="w-6 -rotate-90">പത്രനിര്‍മാണം</p>
              <p className="w-6 -rotate-90">മാഗസിൻ നിർമ്മാണം</p>
              <p className="w-6 -rotate-90">എക്സ്പ്പിനിമേഷൻ</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {darsData.map((v, i) => (
          <div key={i} className="flex w-[1260px] ggg">
            <p className="w-[60px] text-left line-clamp-1 font-semibold pl-2">
              {v.code}
            </p>
            <p className="w-[340px] text-left line-clamp-1 font-semibold pl-2">
              {v.name}
            </p>
            <div className="">
              <div  iv className="flex border-b border-slate-800">
                {Array.from({ length: 20 }, (_, index) => (
                  <p
                    key={index}
                    className="w-6 even:bg-gray-200 font-bold"
                  >
                    {containsNumber1to20(
                      [
                        v.stage1,
                        v.stage2,
                        v.stage3,
                        v.stage4,
                        v.groupstage1,
                        v.groupstage2,
                        v.groupstage3,
                        v.offstage1,
                        v.offstage2,
                        v.offstage3,
                        v.groupoffstage,
                      ],
                      "0" + (index + 1)
                    )
                      ? "✓"
                      : ""}
                  </p>
                ))}
                {Array.from({ length: 31 }, (_, index) => (
                  <p
                    key={index}
                    className="w-6 even:bg-gray-200 font-bold"
                  >
                    {containsNumber(
                      [
                        v.stage1,
                        v.stage2,
                        v.stage3,
                        v.stage4,
                        v.groupstage1,
                        v.groupstage2,
                        v.groupstage3,
                        v.offstage1,
                        v.offstage2,
                        v.offstage3,
                        v.groupoffstage,
                      ],
                      index + 1
                    )
                      ? "✓"
                      : ""}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DarsDetails;
