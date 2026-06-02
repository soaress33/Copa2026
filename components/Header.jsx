import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      <Image
        src="/fundo.png"
        alt="Fundo"
        fill
        priority
        className="object-cover"
      />


      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <p className="text-white tracking-[8px] text-sm mb-4">
          A ODISSEIA DO FUTEBOL MUNDIAL
        </p>

        <h1 className="text-7xl md:text-9xl font-black text-white">
          COPA DO
        </h1>

        <h1 className="text-7xl md:text-9xl font-black text-yellow-400">
          MUNDO
        </h1>

     
        <a href="#Jogadores">
        <button className="mt-10 bg-green-700 hover:bg-green-800 px-8 py-4 text-white font-bold rounded">
          EXPLORAR JOGADORES
        </button>
        </a>
      </div>
    </div>
  );
}