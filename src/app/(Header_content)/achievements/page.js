"use client";

import React, { useState, useEffect } from "react";
import ExpandableCardDemo from "@/components/ui/expandable-card-demo-grid";

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch("/data/achievements.json");
        const data = await response.json();
        setAchievements(data.achievements);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Loading Background Elements */}
        {/* <BackgroundBeams /> */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${8 + Math.random() * 8}s`
            }}
          ></div>
        ))}
        <div className="relative z-10 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4a6cd2] mx-auto mb-4"></div>
          <p className="text-[#c5c2c2]">Loading achievements...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      {/* <BackgroundBeams /> */}
      
      {/* Floating Particles */}
      {[...Array(80)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${8 + Math.random() * 8}s`
          }}
        ></div>
      ))}
      
      {/* Floating Geometric Shapes */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`shape-${i}`}
          className={`absolute opacity-10 animate-float-slow ${
            i % 3 === 0 ? 'w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full' :
            i % 3 === 1 ? 'w-6 h-6 bg-gradient-to-r from-indigo-400 to-pink-400 rotate-45' :
            'w-3 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${12 + Math.random() * 6}s`
          }}
        ></div>
      ))}
      
      {/* Animated Dots Grid */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${(i % 5) * 20 + 10}%`,
              top: `${Math.floor(i / 5) * 20 + 10}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-tl from-[#615f5f] to-[#d5e4e2] bg-clip-text text-transparent mb-6">
            Our <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">Achievements</span>
          </h1>
          <p className="text-lg md:text-xl text-[#c5c2c2] max-w-3xl mx-auto leading-relaxed">
            Celebrating our journey of excellence, innovation, and impact in the world of engineering and technology. 
            These achievements reflect our commitment to pushing boundaries and making a difference.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <ExpandableCardDemo cards={achievements} />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-gradient-to-r from-[#151628] to-[#3e0c1e] backdrop-blur-sm border-2 border-white/20 rounded-3xl shadow-md shadow-[grey]">
            <div className="text-3xl font-bold text-[#d5e4e2] mb-2">
              {achievements.length}+
            </div>
            <div className="text-[#c5c2c2]">
              Major Achievements
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-[#151628] to-[#3e0c1e] backdrop-blur-sm border-2 border-white/20 rounded-3xl shadow-md shadow-[grey]">
            <div className="text-3xl font-bold text-[#d5e4e2] mb-2">
              50+
            </div>
            <div className="text-[#c5c2c2]">
              Awards & Recognitions
            </div>
          </div>
          <div className="text-center p-6 bg-gradient-to-r from-[#151628] to-[#3e0c1e] backdrop-blur-sm border-2 border-white/20 rounded-3xl shadow-md shadow-[grey]">
            <div className="text-3xl font-bold text-[#d5e4e2] mb-2">
              1000+
            </div>
            <div className="text-[#c5c2c2]">
              Students Impacted
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#151628] to-[#3e0c1e] backdrop-blur-sm border-2 border-white/20 rounded-3xl p-8 shadow-md shadow-[grey] max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#d5e4e2] mb-4">
              Join Our Journey
            </h3>
            <p className="text-[#c5c2c2] mb-6">
              Be part of our continued success story. Join IEEE RGIPT and contribute to our legacy of excellence.
            </p>
            <button className="bg-[#4a6cd2] hover:bg-[#4a6cd2]/80 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Become a Member
            </button>
          </div>
        </div>
      </div>
      
      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          25% { 
            transform: translateY(-15px) rotate(90deg) scale(1.1); 
          }
          50% { 
            transform: translateY(-30px) rotate(180deg) scale(0.9); 
          }
          75% { 
            transform: translateY(-15px) rotate(270deg) scale(1.05); 
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-float-slow {
          animation: float-slow ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
