// In this we will store the details of the events which we will going to launch
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Trophy,
    Users,
    Code,
    Wrench,
    Calendar,
    Clock,
    MapPin,
    Award,
    Info,
    ChevronRight,
    Target,
    Zap
} from 'lucide-react';
import { TimelineDemo } from '@/app/Timeline/page';

const UpcomingEventsDetails = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeFilter, setActiveFilter] = useState('Series');
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        {
            id: 1,
            icon: Trophy,
            number: "20+",
            label: "Events Conducted",
            gradient: "from-blue-500 to-purple-500"
        },
        {
            id: 2,
            icon: Users,
            number: "1000+",
            label: "Student Participants",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            icon: Code,
            number: "50K+",
            label: "Lines of Code",
            gradient: "from-pink-500 to-red-500"
        },
        {
            id: 4,
            icon: Wrench,
            number: "100+",
            label: "Projects Built",
            gradient: "from-red-500 to-orange-500"
        }
    ];

    const filters = [
        { name: 'Series', icon: Target },
        { name: 'Competitions', icon: Code },
        { name: 'Workshops', icon: Users },
        { name: 'Hackathons', icon: Trophy }
    ];

    const events = [
        {
            id: 1,
            category: 'Series',
            date: 'Every Sunday from 1 june to 27 july',
            title: 'Dev Wave',
            tags: ['Skill Up Series', 'Intermediate'],
            status: 'LIVE NOW',
            statusColor: 'text-green-400',
            timeRemaining: null,
            description: ' SkillUp Series 2.0 presents DevWave, an 8-week journey designed to transform you into a skilled full-stack web developer. From mastering design principles to building and deploying full-fledged applications, DevWave blends learning with hands-on practice and weekly challenges to accelerate your growth',
            techStack: ['UI/UX Designing', 'Frontend', 'Backend', 'MERN Stack'],
            // prizes: ['₹50,000', '₹30,000', '₹20,000'],
            registrations: '95+ registrations',
            // teamSize: '2-4 members',
            location: 'Online',
            gradient: 'from-blue-600 to-purple-600',
            registration_link: 'https://forms.gle/8MFKgkZGbgUha1re9'
        },

        {
            id: 2,
            category: 'Series',
            date: 'Every Saturday from 1 june to 27 july',
            title: 'Code Nex',
            tags: ['Skill Up Series', 'Intermediate'],
            status: 'LIVE NOW',
            statusColor: 'text-green-400',
            timeRemaining: null,
            description: '   SkillUp Series 2.0 presents CodeNex, an 8-week competitive programming journey designed to elevate your problem-solving skills. With structured arenas and weekly contests, this track helps you build a strong DSA foundation and grow into a confident coder ready for any challenge',
            techStack: ['C++', 'Logical Learning', 'Dynamic Programming'],
            // prizes: ['₹50,000', '₹30,000', '₹20,000'],
            registrations: '93+ registrations',
            // teamSize: '2-4 members',
            location: 'Online',
            gradient: 'from-blue-600 to-purple-600',
            registration_link: 'https://forms.gle/CeeKjDNg1UYrtoBt9'
        },
        {
            id: 3,
            category: 'Series',
            date: 'Every Saturday and Sunday from 1 june to 31 june',
            title: 'ElectroWave',
            tags: ['Skill Up Series', 'Intermediate'],
            status: 'LIVE NOW',
            statusColor: 'text-green-400',
            timeRemaining: null,
            description:   " ElectroWave by IEEE RAS RGIPT is a 4-weekend workshop series for EEE students to master circuit logic through simulation-based learning.Explore MATLAB, LTSpice, Arduino, and PCB design tools with hands-on sessions led by IEEE mentors—turning concepts into real-world skills.",
            techStack: ['MATLAB', 'LTSpice', 'Arduino', 'PCB design'],
            // prizes: ['₹50,000', '₹30,000', '₹20,000'],
            registrations: '93+ registrations',
            // teamSize: '2-4 members',
            location: 'Online',
            gradient: 'from-blue-600 to-purple-600',
            registration_link: 'https://forms.gle/LuHJZbRXjmdCcJxs6'
        },
        {
            id: 3,
            // category: 'Competitions',
            date: 'Wednesday, January 29',
            title: 'Coding Weekender',
            tags: ['Competition', 'Beginner'],
            status: null,
            timeRemaining: '18d 8h remaining',
            description: 'Weekend-long competitive coding challenge',
            techStack: ['C++', 'Java', 'Python', 'DSA'],
            prizes: ['₹10,000', '₹7,000', '₹5,000'],
            registrations: '100+ registrations',
            teamSize: 'Individual',
            location: 'Lab Complex',
            gradient: 'from-pink-600 to-red-600'
        }
    ];

    const filteredEvents = events.filter(event => event.category === activeFilter);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
            </div>

            {/* Floating Particles */}
            {[...Array(15)].map((_, i) => (
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
                    <h1 className="text-5xl mt-10 md:text-6xl font-bold mb-6">
                        <span className="text-white">Upcoming </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x">Events</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Join our technical events and showcase your skills
                    </p>
                </div>


                {/* Filter Tabs */}
                <div className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    {filters.map((filter) => {
                        const Icon = filter.icon;
                        return (
                            <button
                                key={filter.name}
                                onClick={() => setActiveFilter(filter.name)}
                                className={`group flex items-center px-6 py-3 rounded-full border transition-all duration-300 ${activeFilter === filter.name
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white shadow-lg shadow-purple-500/25'
                                    : 'bg-gray-900/50 border-gray-700/50 text-gray-300 hover:border-gray-600/50 hover:bg-gray-800/50'
                                    }`}
                            >
                                <Icon size={18} className="mr-2" />
                                <span className="font-medium">{filter.name}</span>
                            </button>
                        );
                    })}
                </div>




                {/* Events Grid */}
                {/* Events Grid */}
                <div className="grid md:grid-cols-2 mb-20 lg:grid-cols-3 gap-8">
                    {filteredEvents.map((event, index) => (
                        <div
                            key={event.id}
                            className={`relative transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Card Container */}
                            <div className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300 hover:shadow-xl">

                                {/* Simple Background Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Date */}
                                    <div className="flex items-center text-blue-400 text-sm font-medium mb-3">
                                        <Calendar size={16} className="mr-2" />
                                        {event.date}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-4 hover:text-blue-400 transition-colors duration-300">
                                        {event.title}
                                    </h3>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {event.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${idx === 0
                                                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                                                    : 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Status or Timer */}
                                    {event.status ? (
                                        <div className={`flex items-center ${event.statusColor} font-medium mb-4`}>
                                            <Zap size={16} className="mr-2" />
                                            {event.status}
                                        </div>
                                    ) : event.timeRemaining && (
                                        <div className="flex items-center text-blue-400 font-medium mb-4">
                                            <Clock size={16} className="mr-2" />
                                            {event.timeRemaining}
                                        </div>
                                    )}

                                    {/* Description */}
                                    <p className="text-gray-200 mb-4 hover:text-gray-300   transition-colors duration-300">
                                        {event.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="mb-4">
                                        <div className="text-white font-medium mb-2">Tech Stack You will Learn:</div>
                                        <div className="flex flex-wrap gap-2">
                                            {event.techStack.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-600/30"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Prizes */}
                                    {event.prizes && (
                                        <div className="mb-4">
                                            <div className="text-white font-medium mb-2">Prizes:</div>
                                            <div className="flex gap-2">
                                                {event.prizes.map((prize, idx) => (
                                                    <div key={idx} className="flex items-center text-yellow-400 text-sm">
                                                        <Award size={14} className="mr-1" />
                                                        {prize}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Footer Info */}
                                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                                        <span>{event.registrations}</span>
                                        {event.teamSize && <span>{event.teamSize}</span>}
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center text-pink-400 text-sm mb-6">
                                        <MapPin size={16} className="mr-2" />
                                        {event.location}
                                    </div>

                                    {/* Simple Register Button */}
                                    <div className="w-full">
                                        <Link
                                            href={event.registration_link}
                                            className="inline-block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg text-center cursor-pointer"
                                        >
                                            <span className="flex items-center justify-center">
                                                Register Now
                                                <ChevronRight size={18} className="ml-2" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                {/* Simple Bottom Line Effect */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:w-full transition-all duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Alert Banner */}
                <div className={`mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-6">
                        <div className="flex items-center justify-center text-center">
                            <Info className="text-blue-400 mr-3 flex-shrink-0" size={24} />
                            <div>
                                <h3 className="text-blue-400 font-semibold mb-2">Attention!</h3>
                                <p className="text-gray-300">
                                    Our events calendar is currently being updated. Check back soon for the latest events and workshops!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={stat.id}
                                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                                <div className="relative z-10">
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${stat.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={24} className="text-white" />
                                    </div>

                                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                                        {stat.number}
                                    </div>

                                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
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


      <TimelineDemo></TimelineDemo>



        </div>
    );
};

export default UpcomingEventsDetails;