"use client";
import Header from "@/components/header"; 
import CodeEditor from "@/components/syntaxHighlighter";
import Image from "next/image";
import { useState } from "react";

import Download from "@/components/solidityDownloadBtn";
import RenderBtn from "@/components/RenderBtn";

import CopyBtn from "@/components/CopyBtn";
import DefenderBtn from "@/components/DefenderBtn";

export default function Home() {

const [selected, setSelected] = useState(0);

const handleClick = (index: any) => {
  setSelected(index);
};
  return (
    <>
    <div className="flex flex-col gap-4 p-4 mx-4 rounded   bg-slate-50">
      <div className=" flex flex-row justify-between ">
          <div className=" overflow-hidden ">
              <div className="flex overflow-hidden ">
                <button type="button" className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${selected === 0 ? ' bg-[#4e5de4] hover:bg-[#4e5de4] text-[#f5f5f5]' : ''}`} onClick={() => handleClick(0)}>ERC20</button>

                <button type="button" className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${selected === 1 ? ' bg-[#4e5de4] hover:bg-[#4e5de4] text-[#f5f5f5]' : ''}`} onClick={() => handleClick(1)}>ERC721</button>

                <button type="button" className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${selected === 2 ? ' bg-[#4e5de4] hover:bg-[#4e5de4] text-[#f5f5f5]' : ''}`} onClick={() => handleClick(2)}>ERC1155</button>
                
                <button type="button" className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${selected === 3 ? ' bg-[#4e5de4] hover:bg-[#4e5de4] text-[#f5f5f5]' : ''}`} onClick={() => handleClick(3)}>Governor</button>

                <button type="button" className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${selected === 4 ? ' bg-[#4e5de4] hover:bg-[#4e5de4] text-[#f5f5f5]' : ''}`} onClick={() => handleClick(4)}>Custom</button>
              </div>
          </div>
          <div className="action flex flex-row gap-2 shrink-0">  
               <DefenderBtn/>
                <CopyBtn/>
                <RenderBtn/>
                <Download/>   
          </div>
        </div>
        <div className="flex flex-row gap-4 grow">
            <div className="w-64 flex flex-col shrink-0 justify-between overflow-auto  h-[calc(100vh-84px)] rounded shadow-md">side bar</div>
            

            <div className="output flex flex-col grow overflow-auto  h-[calc(100vh-84px)]  ">
              <CodeEditor/>
            </div>
        
        </div>
    </div>
    
    </>
    
  );
}
