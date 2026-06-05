import Image from "next/image";

export default function Sobre() {
    return (
        <div
            className={`
       
        w-400
        h-full
        flex
        flex-col
        gap-3
        py-4
        items-center
        justify-center
        
       `}
        >
            <div className="w-full h-20 bg-[#F5F5F5] text-5xl rounded text-black py-5 flex items-center justify-center">
                <h1>COPA DO MUNDO DE 2026</h1>
            </div>


            <div className="text-gray-600 items-center flex text-left border  p-6  border-white  w-full h-150">

                <div className=" text-xl gap-5 flex p-6 flex-col w-full">
                    <div className="text-white">
                        <p>O MAIO ESPETACULA DA TERRRA</p>
                    </div>
                    <div className="">
                        <h1 className="text-black text-5xl font-bold">A COPA DO</h1>
                        <h1 className=" text-5xl font-bold text-green-900">MUNDO FIFA</h1>
                    </div>
                    <div className="text-white ">
                        <p>A<strong className="text-black"> Copa do Mundo FIFA </strong> é o torneio de futebol mais assistido e</p>
                        <p>prestigiado do planeta. Realizada a cada quatro anos, ela reúne as</p>
                        <p>melhores seleções nacionais do globo em uma competição épica que</p>
                        <p>paralisa nações inteiras e une bilhões de pessoas em torno de uma única</p>
                        <p>paixão.</p>
                    </div>

                    <div className="text-white">
                        <p>Desde a primeira edição em 1930, no Uruguai, a competição evoluiu para</p>
                        <p>um fenômeno cultural sem precedentes. Cada edição escreve novos</p>
                        <p>capítulos de glória, tragédia e superação — histórias que transcendem o</p>
                        <p>esporte e se tornam parte da memória coletiva da humanidade.</p>
                    </div>



                </div>

                <div className="bg-green-400 rounded w-[50%] h-120">
                    <Image
                        src="/copa.png"
                        alt="Sobre"
                        width={500}
                        height={300}
                        className="object-cover w-full rounded h-full"
                    />

                </div>
            </div>

        </div>
    );
}