"use client";

import Image from "next/image";

export default function Icons({
    imagem,
    nome,

}) {
    return (
        <div
            className={`
        
        rounded-full
        w-14
        h-14
        p-3
        border
        border-white
        `}

        >


            <img
                src={imagem}
                alt={nome}
                className=" object-cover object-top"
            />




        </div>
    )
}