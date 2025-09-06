// in this we add the landing page
"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import ieee from "../../../public/ieee-1 1.png";
import ieeelogo from "../../../public/ieee_logo_blue.png";

import { Francois_One } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Poppins } from "next/font/google";
import CanvasCursor from "@/components/ui/canvas-cursor-effect";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin']
})

const francois = Francois_One({
  weight: ['400'],
  subsets: ['latin'],
});

const merriweather = Merriweather({
  weight: ['400'],
  subsets: ['latin'],
});



export function BackgroundBeamsDemo() {

  const router =useRouter()
  return (
    <div className="min-h-screen w-full rounded-md  relative flex flex-col bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 items-center justify-center antialiased">
      {/* <AnimatedCircles></AnimatedCircles> */}
      <AnimatedRectangles></AnimatedRectangles>
      <div style={{ position: 'relative', width: '60%', height: '150px' }}>
        <Image src={ieee} alt="ieee image" fill style={{ objectFit: 'contain' }} />

      </div>
      <h1 className={`sm:text-8xl ${merriweather.className}  sm:text-5xl text-4xl sm:mt-4 font-serif bg-gradient-to-tl from-[#615f5f] to-[#d5e4e2] bg-clip-text text-transparent `} >Student Branch</h1>
      <h1 className={`sm:text-4xl ${poppins.className}  text-xl sm:mt-4 mt-6 font-serif text-center text-[#c5c2c2] `} >Rajiv Gandhi Institute Of Petroleum Technology</h1>

      <div className="flex flex-row gap-10 pt-8 z-20 ">
        <button onClick={()=> router.push('/about_us')} className={ ` sm:w-[200px] w-[170px] h-[50px] rounded-lg sm:text-xl  cursor-pointer ${merriweather.className} text-white bg-blue-600 `}> About IEEE_RGIPT</button>
        <button onClick={()=> router.push('/Upcomingevents/details')} className={`w-[100px] ${merriweather.className} h-[50px] rounded-lg text-xl cursor-pointer bg-[white]`}> Events </button>

        


      </div>


      



      <BackgroundBeams />
    </div>
  );
}

// 2. Rectangle Shapes Component - Distributed ONLY in middle areas (NO CORNERS)
const AnimatedRectangles = () => {
  const rectangles = [
    // Top row - only middle areas
    {
      id: 1,
      size: "w-96 h-24",
      position: "top-[24%] -left-[4%]",
      rotation: "-rotate-32",
    },
    {
      id: 2,
      size: "w-96 h-28",
      position: "top-[78%] left-[74%]",
      rotation: "-rotate-16",
    },

    // Upper middle row
    // { id: 3, size: 'w-36 h-24', position: 'top-[20%] left-[75%]', rotation: 'rotate-3' },
    {
      id: 4,
      size: "w-48 h-12",
      position: "top-[75%] left-[22%]",
      rotation: "-rotate-12",
    },

    // Center left and right (not corners)
    {
      id: 5,
      size: "w-80 h-20",
      position: "top-[0%] left-[40%]",
      rotation: "-rotate-160",
    },
    // { id: 6, size: 'w-36 h-20', position: 'top-[40%] left-[70%]', rotation: '-rotate-4' },

    // True center
    // { id: 7, size: 'w-44 h-24', position: 'top-[50%] left-[45%]', rotation: 'rotate-15' },

    // Lower middle areas
    // { id: 8, size: 'w-44 h-28', position: 'top-[60%] left-[80%]', rotation: 'rotate-6' },
    // { id: 9, size: 'w-40 h-24', position: 'top-[65%] left-[60%]', rotation: '-rotate-10' },

    // Bottom row - only middle areas
    // { id: 10, size: 'w-36 h-28', position: 'top-[75%] left-[90%]', rotation: 'rotate-4' },
    {
      id: 11,
      size: "w-64 h-20",
      position: "top-[20%] left-[82%]",
      rotation: "-rotate-128",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style jsx>{`
        @keyframes floatMove {
          0%,
          100% {
            transform: translate(0, 0) rotate(var(--rotation));
          }
          33% {
            transform: translate(15px, -10px)
              rotate(calc(var(--rotation) + 2deg));
          }
          66% {
            transform: translate(-10px, 8px)
              rotate(calc(var(--rotation) - 3deg));
          }
        }
      `}</style>
      {rectangles.map((rect) => (
        <div
          key={rect.id}
          className={`absolute ${rect.size} ${rect.position} opacity-60
                     bg-gradient-to-r from-[#151628] to-[#3e0c1e]
                     backdrop-blur-sm border-2 border-white/20 rounded-3xl
                     shadow-md shadow-[grey]  `}
          style={{
            "--rotation": rect.rotation.includes("-")
              ? rect.rotation.replace("-rotate-", "-") + "deg"
              : rect.rotation.replace("rotate-", "") + "deg",
            animation: `floatMove ${8 + (rect.id % 3)}s ease-in-out infinite`,
            animationDelay: `${rect.id * 0.5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

// // 3. Circular Shapes Component - Distributed ONLY in middle areas (NO CORNERS)
// const AnimatedCircles = () => {
//   const circles = [
//     // Top row - only middle areas
//     // { id: 1, size: 'w-32 h-32', position: 'top-[12%] left-[40%]' },
//     // { id: 2, size: 'w-28 h-28', position: 'top-[75%] left-[25%]' },

//     // Upper middle
//     // { id: 3, size: 'w-24 h-24', position: 'top-[25%] left-[30%]' },
//     // { id: 4, size: 'w-36 h-36', position: 'top-[30%] left-[50%]' },

//     // Left and right middle (not corners)
//     // { id: 5, size: 'w-30 h-30', position: 'top-[40%] left-[25%]' },
//     // { id: 6, size: 'w-26 h-26', position: 'top-[45%] left-[65%]' },

//     // True center
//     // { id: 7, size: 'w-22 h-22', position: 'top-[55%] left-[45%]' },

//     // Lower middle areas
//     // { id: 8, size: 'w-34 h-34', position: 'top-[65%] left-[35%]' },
//     // { id: 9, size: 'w-28 h-28', position: 'top-[70%] left-[55%]' },

//     // Bottom row - only middle areas
//     // { id: 10, size: 'w-24 h-24', position: 'top-[80%] left-[30%]' },
//     // { id: 11, size: 'w-30 h-30', position: 'top-[85%] left-[50%]' },
//   ];

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       <style jsx>{`
//         @keyframes circleFloat {
//           0%, 100% {
//             transform: translate(0, 0) scale(1);
//           }
//           25% {
//             transform: translate(12px, -8px) scale(1.05);
//           }
//           50% {
//             transform: translate(-8px, 12px) scale(0.95);
//           }
//           75% {
//             transform: translate(8px, -12px) scale(1.02);
//           }
//         }
//       `}</style>
//       {circles.map((circle) => (
//         <div
//           key={circle.id}
//           className={`absolute ${circle.size} ${circle.position} opacity-35
//                      bg-gradient-to-br from-cyan-500/12 via-blue-500/15 to-indigo-500/12
//                      backdrop-blur-sm border-2 border-white/25 rounded-full`}
//           style={{
//             animation: `circleFloat ${6 + (circle.id % 4)}s ease-in-out infinite`,
//             animationDelay: `${circle.id * 0.7}s`,
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// };
