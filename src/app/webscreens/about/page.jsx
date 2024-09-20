"use client"
import { TypeAnimation } from 'react-type-animation';

const Page = ({}) => {
  return <div className='justify-center'>
    Coming Soon
     <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '.',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        '..',
        1000,
        '...',
        1000,
        '....',
        1000
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity}
    />
  </div>
}

export default Page