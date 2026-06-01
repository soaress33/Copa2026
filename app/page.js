"use client";

import Header from "@/components/Header";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <div className="flex  items-center justify-center">
      {/**caixa pai segudaria */}
      <div className="w-full h-full">
        <div className="bg-white w-full">

          <Header />
        </div>
        {/**caixa sobre */}
        <div className="w-full h-screen justify-center  border-gray-500 border-2 flex bg-[#FFC107]">
          <Sobre />
        </div>

        <div className="w-full h-screen justify-center gap-30 border-gray-500 border-2 flex bg-blue-500">
          <Sobre />
        </div>

      </div>
    </div>
  );
}
