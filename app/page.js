"use client";

import Footer from "@/components/Footer";
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
        <div className="w-full h-screen items-center justify-center p-10 border-gray-500 border-2 flex bg-[#FFC107]">
          <Sobre />
        </div>

        {/**caixa pai dos jogadorees */}
        <div className="w-full h-screen justify-center gap-20 p-2 border-gray-500  flex bg-[#009C3B]">
          {/**Caixa dos jogadores */}
          <div className=" flex flex-col items-center justify-center gap-4 w-400" id="Jogadores">
            <div className="flex gap-5">

              <CardJogador
                nome="Neymar"
                posicao="Atacante / Meia"
                time="Santos"
                imagem="/ney1.jpg"
                jogos="120+"
                gols="79+"
                camisa="10"
              />


              <CardJogador
                nome="Rodrygo"
                posicao="Atacante / Ponta"
                time="Real Madrid"
                imagem="/rodrigo.jpg"
                jogos="30+"
                gols="8+"
                camisa="10 / 21"
              />

              <CardJogador
                nome="Raphinha"
                posicao="Ponta-direita"
                time="Barcelona"
                imagem="/rapha1.jpg"
                jogos="35+"
                gols="11+"
                camisa="11"
              />

              <CardJogador
                nome="Endrick"
                posicao="Centroavante"
                time="Real Madrid"
                imagem="/endrick.jpg"
                jogos="15+"
                gols="5+"
                camisa="9 / 21"
              />

              <CardJogador
                nome="Bruno Guimarães"
                posicao="Meio-campo"
                time="Newcastle"
                imagem="/bruno.jpg"
                jogos="30+"
                gols="1+"
                camisa="8"
              />
            </div>

            <div className="flex gap-5">
              <CardJogador
                nome="Casemiro"
                posicao="Volante"
                time="Manchester United"
                imagem="/case.jpg"
                jogos="75+"
                gols="7+"
                camisa="5"
              />

              <CardJogador
                nome="Alisson"
                posicao="Goleiro"
                time="Liverpool"
                imagem="/alison.jpg"
                jogos="65+"
                gols="0"
                camisa="1"
              />

              <CardJogador
                nome="Marquinhos"
                posicao="Zagueiro"
                time="PSG"
                imagem="/marquinho.jpg"
                jogos="90+"
                gols="7+"
                camisa="4"
              />

              <CardJogador
                nome="Gabriel Magalhães"
                posicao="Zagueiro"
                time="Arsenal"
                imagem="/gael.jpg"
                jogos="15+"
                gols="1+"
                camisa="14"
              />

              <CardJogador
                nome="Vinícius Jr"
                posicao="Ponta-esquerda"
                time="Real Madrid"
                imagem="/vini.jpg"
                jogos="40+"
                gols="7+"
                camisa="7"
              />


            </div>



          </div>


        </div>

        <Footer />
      </div>

    </div>
  );
}
