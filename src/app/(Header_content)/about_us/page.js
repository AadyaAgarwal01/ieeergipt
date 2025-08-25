"use client";

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb, 
  Star, 
  BookOpen, 
  Crown, 
  Shield,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const AboutUsPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);

  useEffect(() => {
    const loadAboutData = async () => {
      try {
        const response = await fetch('/data/about-us.json');
        const data = await response.json();
        setAboutData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading about data:', error);
        setLoading(false);
      }
    };

    loadAboutData();
    setIsVisible(true);
  }, []);

  const getValueIcon = (iconName) => {
    const icons = {
      '💡': Lightbulb,
      '⭐': Star,
      '🤝': Users,
      '📚': BookOpen,
      '👑': Crown,
      '🛡️': Shield
    };
    return icons[iconName] || Lightbulb;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-white mb-2">Loading About Us</h2>
          <p className="text-gray-400">Getting our story...</p>
        </div>
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white mb-2">Error Loading Content</h2>
          <p className="text-gray-400">Please try again later.</p>
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
        {/* Hero Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl mt-10 md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient-x">
              {aboutData.hero.title}
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            {aboutData.hero.subtitle}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {aboutData.hero.description}
          </p>
        </div>

        {/* Mission & Vision Section */}
        <div className={`grid md:grid-cols-2 gap-12 mb-20 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Mission */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">{aboutData.mission.title}</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {aboutData.mission.description}
            </p>
            <ul className="space-y-3">
              {aboutData.mission.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">{aboutData.vision.title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              {aboutData.vision.description}
            </p>
          </div>
        </div>

        {/* History Timeline */}
        <div className={`mb-20 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">{aboutData.history.title}</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {aboutData.history.description}
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {aboutData.history.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  onMouseEnter={() => setActiveTimeline(index)}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 ${
                      activeTimeline === index ? 'scale-105 shadow-2xl shadow-purple-500/20' : ''
                    }`}>
                      <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-semibold text-white mb-3">{milestone.title}</h4>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                      activeTimeline === index 
                        ? 'bg-purple-500 border-purple-300 scale-125' 
                        : 'bg-blue-500 border-blue-300'
                    }`}></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden relative">
            {/* Mobile Timeline Line */}
            <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-8">
              {aboutData.history.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6"
                  onTouchStart={() => setActiveTimeline(index)}
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 mt-2">
                    <div className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                      activeTimeline === index 
                        ? 'bg-purple-500 border-purple-300 scale-125' 
                        : 'bg-blue-500 border-blue-300'
                    }`}></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 ${
                      activeTimeline === index ? 'scale-105 shadow-2xl shadow-purple-500/20' : ''
                    }`}>
                      <div className="text-xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                      <h4 className="text-lg font-semibold text-white mb-3">{milestone.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">{aboutData.activities.title}</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {aboutData.activities.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.activities.categories.map((activity, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{activity.title}</h4>
                <p className="text-gray-300 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Stats */}
        <div className={`mb-20 transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">{aboutData.achievements.title}</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aboutData.achievements.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-2">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className={`mb-20 transform transition-all duration-1000 delay-1100 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">{aboutData.values.title}</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutData.values.items.map((value, index) => {
              const IconComponent = getValueIcon(value.icon);
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{value.title}</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact Section */}
        <div className={`transform transition-all duration-1000 delay-1300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">{aboutData.contact.title}</h3>
              <p className="text-xl text-gray-300">{aboutData.contact.description}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-white font-semibold mb-2">Email</div>
                <a href={`mailto:${aboutData.contact.email}`} className="text-blue-300 hover:text-blue-200 transition-colors">
                  {aboutData.contact.email}
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-4">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-white font-semibold mb-2">Phone</div>
                <a href={`tel:${aboutData.contact.phone}`} className="text-green-300 hover:text-green-200 transition-colors">
                  {aboutData.contact.phone}
                </a>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-white font-semibold mb-2">Address</div>
                <div className="text-gray-300">{aboutData.contact.address}</div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex justify-center gap-4">
                <a
                  href={aboutData.contact.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Follow Us
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
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

export default AboutUsPage;