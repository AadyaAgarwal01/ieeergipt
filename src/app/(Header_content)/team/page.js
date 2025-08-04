"use client";

import React, { useState, useEffect } from 'react';
import SeraTeamCard from '@/components/ui/sera-team-card';
import { Users, Award, Target, Zap } from 'lucide-react';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const loadTeamData = async () => {
      try {
        const response = await fetch('/data/team-members.json');
        const data = await response.json();
        setTeamMembers(data.officeBearer);
        setLoading(false);
      } catch (error) {
        console.error('Error loading team data:', error);
        setLoading(false);
      }
    };

    loadTeamData();
    setIsVisible(true);
  }, []);

  const stats = [
    {
      id: 1,
      icon: Users,
      number: "50+",
      label: "Active Members",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      icon: Award,
      number: "25+",
      label: "Events Organized",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: Target,
      number: "15+",
      label: "Technical Workshops",
      gradient: "from-pink-500 to-red-500"
    },
    {
      id: 4,
      icon: Zap,
      number: "100+",
      label: "Projects Completed",
      gradient: "from-red-500 to-orange-500"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-white mb-2">Loading Team</h2>
          <p className="text-gray-400">Getting our amazing team members...</p>
        </div>
      </div>
    );
  }

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
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl mt-10 md:text-6xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated individuals who drive innovation and excellence at IEEE RGIPT Student Branch
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
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

        {/* Team Members Section */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Office Bearers
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Click on any team member card to visit their LinkedIn profile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <SeraTeamCard member={member} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-gray-300 mb-6">
              Interested in becoming part of IEEE RGIPT? We're always looking for passionate students 
              who want to contribute to the tech community and develop their leadership skills.
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
              <span className="relative z-10 flex items-center justify-center">
                Get Involved
                <Users size={20} className="ml-2" />
              </span>
            </button>
          </div>
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

export default TeamPage;