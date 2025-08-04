"use client";

import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const SeraTeamCard = ({ member }) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-400/30">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      {/* Profile Image */}
      <div className="relative z-10 mb-6 flex justify-center">
        <div className="relative">
          <img
            src={member["Profile Image Link"]}
            alt={member.Name}
            className="w-32 h-32 rounded-full object-cover border-4 border-white/20 group-hover:border-blue-400/50 transition-all duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
          {member.Name}
        </h3>
        <p className="text-blue-300 font-semibold mb-4 group-hover:text-blue-200 transition-colors duration-300">
          {member.Position}
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          {member.Linkedin && (
            <a
              href={member.Linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-blue-600/20 hover:bg-blue-600/40 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-4 h-4 text-blue-400 hover:text-blue-300" />
            </a>
          )}
          {member.Github && (
            <a
              href={member.Github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 bg-gray-600/20 hover:bg-gray-600/40 rounded-full border border-gray-500/30 hover:border-gray-400/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-4 h-4 text-gray-400 hover:text-gray-300" />
            </a>
          )}
        </div>
      </div>

      {/* Hover indicator */}
      <div className="absolute bottom-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
      
      {/* Bottom border effect */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
    </div>
  );
};

export default SeraTeamCard;