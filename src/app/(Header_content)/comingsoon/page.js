// This page contain the coming soon page
// components/ComingSoon.js

"use client";
// import { useEffect, useState } from 'react';

// const ComingSoon = ({ pageName = "this page" }) => {
//   const [animatedText, setAnimatedText] = useState('');
//   const fullText = `Coming Soon!`;
//   const description = `${pageName} is currently under development. We're working hard to bring you an amazing experience. Stay tuned!`;

//   // Animation for the "Coming Soon!" text
//   useEffect(() => {
//     let currentIndex = 0;
//     const interval = setInterval(() => {
//       if (currentIndex <= fullText.length) {
//         setAnimatedText(fullText.substring(0, currentIndex));
//         currentIndex++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 100); // Adjust speed as needed

//     return () => clearInterval(interval);
//   }, [fullText]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
//       <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl">
//         <div className="p-8 md:p-12">
//           <div className="flex flex-col items-center">
//             {/* Animated construction icon */}
//             <div className="relative mb-8">
//               <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-16 w-16 text-yellow-800 animate-bounce"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 10V3L4 14h7v7l9-11h-7z"
//                   />
//                 </svg>
//               </div>
//               <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center animate-ping">
//                 <span className="text-xs font-bold">!</span>
//               </div>
//             </div>

//             {/* Animated text */}
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//                 {animatedText}
//               </span>
//               <span className="animate-pulse">|</span>
//             </h1>

//             <p className="text-lg text-gray-600 mb-8 text-center">
//               {description}
//             </p>

//             {/* Progress bar animation */}
//             <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
//               <div
//                 className="bg-gradient-to-r from-blue-500 to-indigo-600 h-4 rounded-full animate-progress"
//                 style={{ width: '65%' }}
//               ></div>
//             </div>

//             {/* Countdown or social links can be added here */}
//             <div className="flex space-x-4">
//               <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105">
//                 Notify Me
//               </button>
//               <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105">
//                 Go Back
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating elements for decoration */}
//       <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-blue-200 opacity-30 animate-float1"></div>
//       <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-indigo-200 opacity-30 animate-float2"></div>
//       <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-purple-200 opacity-30 animate-float3"></div>

//       <style jsx global>{`
//         @keyframes progress {
//           0% { width: 0%; }
//           100% { width: 65%; }
//         }
//         .animate-progress {
//           animation: progress 2s ease-out forwards;
//         }
//         @keyframes float1 {
//           0%, 100% { transform: translateY(0) translateX(0); }
//           50% { transform: translateY(-20px) translateX(10px); }
//         }
//         @keyframes float2 {
//           0%, 100% { transform: translateY(0) translateX(0); }
//           50% { transform: translateY(15px) translateX(-15px); }
//         }
//         @keyframes float3 {
//           0%, 100% { transform: translateY(0) translateX(0); }
//           50% { transform: translateY(-15px) translateX(-5px); }
//         }
//         .animate-float1 { animation: float1 8s ease-in-out infinite; }
//         .animate-float2 { animation: float2 10s ease-in-out infinite; }
//         .animate-float3 { animation: float3 7s ease-in-out infinite; }
//       `}</style>
//     </div>
//   );
// };

// export default ComingSoon;

import { useState, useEffect } from "react";

export default function UnderDevelopment() {
  const [dots, setDots] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Animated dots effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Fade in animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  //   bg-gradient-to-br pt-40 from-blue-900 via-purple-900 to-indigo-900

  return (
    <div className="min-h-screen  overflow-clip w-full bg-gradient-to-br pt-40 from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div
        className={`text-center transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Animated Icon - Floating Code Matrix */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto mb-6 relative">
            {/* Main floating laptop/code container */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-3 animate-pulse shadow-2xl">
              <div className="w-full h-full bg-gray-900 rounded-2xl m-1 flex flex-col">
                {/* Laptop screen */}
                <div className="flex-1 bg-black rounded-t-xl p-3 relative overflow-hidden">
                  {/* Matrix code effect */}
                  <div className="absolute inset-0 opacity-70">
                    <div className="text-green-400 text-xs font-mono animate-pulse">
                      <div
                        className="animate-bounce"
                        style={{ animationDelay: "0s" }}
                      >
                        &lt;React/&gt;
                      </div>
                      <div
                        className="animate-bounce ml-4 mt-1"
                        style={{ animationDelay: "0.5s" }}
                      >
                        function()
                      </div>
                      <div
                        className="animate-bounce ml-2 mt-1"
                        style={{ animationDelay: "1s" }}
                      >
                        {"{...}"}
                      </div>
                      <div
                        className="animate-bounce ml-6 mt-1"
                        style={{ animationDelay: "1.5s" }}
                      >
                        const
                      </div>
                    </div>
                    {/* Floating binary */}
                    <div className="absolute top-2 right-2 text-blue-400 text-xs animate-ping">
                      01
                    </div>
                    <div
                      className="absolute bottom-4 left-2 text-purple-400 text-xs animate-ping"
                      style={{ animationDelay: "0.7s" }}
                    >
                      10
                    </div>
                  </div>

                  {/* Cursor blink */}
                  <div className="absolute bottom-2 left-2 w-1 h-4 bg-white animate-ping"></div>
                </div>

                {/* Laptop keyboard */}
                <div className="h-4 bg-gray-800 rounded-b-xl flex justify-center items-center">
                  <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Floating elements around the laptop */}
            <div
              className="absolute -top-4 -left-6 w-8 h-8 bg-yellow-400 rounded-lg animate-bounce transform rotate-12"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-sm">
                JS
              </div>
            </div>

            <div
              className="absolute -top-2 -right-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs">
                ⚛
              </div>
            </div>

            <div
              className="absolute -bottom-2 -right-6 w-7 h-7 bg-green-500 rounded-lg animate-bounce transform -rotate-12"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs">
                CSS
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 w-5 h-5 bg-red-500 rounded-full animate-bounce"
              style={{ animationDelay: "1.6s" }}
            >
              <div className="w-full h-full flex items-center justify-center text-white font-bold text-xs">
                H
              </div>
            </div>

            {/* Orbiting elements */}
            <div
              className="absolute inset-0 animate-spin"
              style={{ animationDuration: "8s" }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Floating code symbols */}
          <div
            className="absolute -top-6 -left-8 text-yellow-400 text-lg animate-bounce font-mono"
            style={{ animationDelay: "0.3s" }}
          >
            &lt;/&gt;
          </div>
          <div
            className="absolute -top-8 -right-6 text-blue-400 text-sm animate-bounce font-mono"
            style={{ animationDelay: "0.7s" }}
          >
            {}
          </div>
          <div
            className="absolute -bottom-4 -left-6 text-green-400 text-lg animate-bounce font-mono"
            style={{ animationDelay: "1.1s" }}
          >
            ( )
          </div>
          <div
            className="absolute -bottom-6 -right-8 text-purple-400 text-sm animate-bounce font-mono"
            style={{ animationDelay: "1.5s" }}
          >
            [ ]
          </div>
          <div
            className="absolute top-6 -right-12 text-pink-400 text-xs animate-bounce font-mono"
            style={{ animationDelay: "1.9s" }}
          >
            npm
          </div>
          <div
            className="absolute bottom-8 -left-10 text-orange-400 text-xs animate-bounce font-mono"
            style={{ animationDelay: "2.3s" }}
          >
            git
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-pulse">
          Under Development
        </h1>

        {/* Subtitle with animated dots */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          This page is coming soon for you{dots}
        </p>

        {/* Progress Bar */}
        <div className="w-80 max-w-full mx-auto mb-8">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full animate-pulse"
              style={{ width: "65%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Development Progress: 65%
          </p>
        </div>

        {/* Features Coming Soon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Amazing Features
            </h3>
            <p className="text-gray-300 text-sm">
              Cutting-edge functionality designed just for students
            </p>
          </div>

          <div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Smart Solutions
            </h3>
            <p className="text-gray-300 text-sm">
              Innovative tools to enhance your academic journey
            </p>
          </div>

          <div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Student Focused
            </h3>
            <p className="text-gray-300 text-sm">
              Built specifically for student branch communities
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            We're working hard to bring you something amazing. Follow our
            progress!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 transform hover:scale-105">
              Notify Me
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-400 text-sm">
          <p>Expected Launch: Coming Soon | Student Branch Development Team</p>
        </div>
      </div>
    </div>
  );
}
