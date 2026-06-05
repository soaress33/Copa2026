"use client";

import { Volleyball } from 'lucide-react';
import Image from 'next/image';
import Icons from '../components/icons';

export default function Footer() {
    return (
        <div
            className={`
        w-full
        h-50
        bg-[#002776]
        items-center 
        justify-center
        flex
        flex-col
        
            `}
        >
            <div className=" items-center  flex gap-3 justify-center w-100  h-20">
                <div className="bg-yellow-300 p-2 w-10 h-10 items-center flex justify-center rounded-full">
                    <Image
                        width={50}
                        height={50}
                        alt='ball'
                        src={"/bola.png"}
                        className='w-full h-full'
                    />
                </div>
                <h1
                    className='font-bold text-lg'
                >COPA DO MUNDO 2026</h1>
            </div>
            <div className=" flex gap-7  items-center justify-center w-100 h-10">
                <a href='https://github.com/soaress33'>
                    <Icons
                        imagem={"/git.png"}
                    />
                </a>


               
                    <Icons
                        imagem={"/linkedin.png"}
                    />
              
            <a href='https://www.instagram.com/soaress44?igsh=MXZsZzYycDIxZTZjZQ%3D%3D&utm_source=qr'>
                <Icons
                    imagem={"/ig.png"}
                />
            </a>

                <Icons
                    imagem={"/fece.png"}
                />
            </div>

        </div>
    )
}