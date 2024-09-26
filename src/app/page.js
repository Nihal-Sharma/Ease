"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className="p-8">
      <div className="text-6xl font-bold font-sans bg-gradient-to-r from-[#7E20D8]  to-[#913D44] inline-block text-transparent bg-clip-text mb-3 ">Eease Ai</div>
      <div className="text-4xl font-sans text-[#736767] mb-3">All the AI engines on a single platform</div>
      <div className="text-4xl mb-20">
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Gemini.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Hugging face.',
        1000,
        'Bard.',
        1000,
        'Pollinations.',
        1000
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
            </div>
      <div className="flex space-x-5">
        <button className="ext-white bg-gradient-to-r from-[#7E20D8]  to-[#913D44] hover:bg-gradient-to-br  shadow-lg shadow-pink-500/80 dark:shadow-lg dark:shadow-pink-500/30 font-medium rounded-lg text-sm px-7 py-2.5 text-center me-2 mb-2">Try Ease</button>
        <button className="ext-white bg-gradient-to-r from-[#7E20D8]  to-[#913D44] hover:bg-gradient-to-br  shadow-lg shadow-pink-500/80 dark:shadow-lg dark:shadow-pink-500/30 font-medium rounded-lg text-sm px-7  py-2.5 text-center me-2 mb-2">Docs</button>
      </div>
    </div>
  )
}
