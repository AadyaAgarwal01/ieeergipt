// This page will contain all the upcoming events
"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Users, Trophy, WavesIcon, ComponentIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IconSunElectricity, IconWavesElectricity } from '@tabler/icons-react';

const UpcomingHighlights = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    const router = useRouter()

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const events = [
        {
            id: 1,
            date: "1 June to 27 July",
            title: "Dev Wave",
            description: "Web Development Series",
            icon: WavesIcon,
            gradient: "from-blue-600 to-purple-600",
            delay: "delay-100"
        },
        {
            id: 2,
            date: "1 June to 31 June",
            title: "Electro Wave",
            description: "Arduino , Matlab AND Simulation Practice",
            icon: IconWavesElectricity,
            gradient: "from-purple-600 to-pink-600",
            delay: "delay-200"
        },
        {
            id: 3,
            date: "1 June to 27 July",
            title: "Code Nex",
            description: "DSA and Competetive Programming Series",
            icon: ComponentIcon,
            gradient: "from-pink-600 to-red-600",
            delay: "delay-300"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
            </div>

            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${10 + Math.random() * 10}s`
                    }}
                ></div>
            ))}

            <div className="relative z-10 container mx-auto px-6 py-20">
                {/* Header Section */}
                <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h1 className="text-5xl md:text-6xl h-[100px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 animate-gradient-x">
                        Upcoming Events
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Don't miss out on our exciting upcoming events and activities
                    </p>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {events.map((event, index) => {
                        const Icon = event.icon;
                        return (
                            <Link
                                key={event.id}
                                href={'/Upcomingevents/details'}
                                className={`group relative transform transition-all duration-700 ${event.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                    }`}
                                onMouseEnter={() => setHoveredCard(event.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Card Container */}
                                <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 h-full overflow-hidden group-hover:border-gray-600/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">

                                    {/* Animated Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                    {/* Floating Icon */}
                                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                                        <Icon size={40} className="text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="text-blue-400 text-sm font-semibold mb-3 tracking-wider uppercase">
                                            {event.date}
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                            {event.title}
                                        </h3>

                                        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                                            {event.description}
                                        </p>

                                        <div className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group/btn transition-all duration-300">
                                            <span className="group-hover/btn:mr-2 transition-all duration-300">Learn more</span>
                                            <ArrowRight
                                                size={16}
                                                className="ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Hover Effect Lines */}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                </div>

                                {/* Floating Animation for Hovered Card */}
                                {hoveredCard === event.id && (
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-25 animate-pulse"></div>
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* View All Events Button */}
                <div className={`text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <button onClick={()=> router.push('/Upcomingevents/details')} className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
                        <span className="relative z-10 flex items-center">
                            View All Events
                            <ArrowRight
                                size={20}
                                className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                            />
                        </span>

                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Ripple Effect */}
                        <div className="absolute inset-0 rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-300"></div>
                        </div>
                    </button>
                </div>
            </div>

            <style jsx>{`
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
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
};

export default UpcomingHighlights;