"use client";

import Header from "@/components/Header";
import Sobre from "@/components/Sobre";
import CardJogador from "@/components/CardJogador";

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

        {/**caixa pai dos jogadorees */}
        <div className="w-full h-screen justify-center gap-30 p-10 border-gray-500 border-2 flex bg-blue-500">
          {/**Caixa dos jogadores */}
          <div className="bg-white flex flex-col items-center justify-center  gap-10 p-6  w-400">
            <div className="flex gap-5">
              <CardJogador />

              <CardJogador />

              <CardJogador />

              <CardJogador />
              
              <CardJogador />
            </div>

            <div className="flex gap-5">
              <CardJogador />

              <CardJogador />

              <CardJogador />

              <CardJogador />

              <CardJogador />
            </div>

         

          </div>


        </div>

      </div>
    </div>
  );
}
