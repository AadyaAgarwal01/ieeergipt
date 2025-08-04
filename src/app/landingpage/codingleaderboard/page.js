// IN this we write the code to go on the leaderboard of the leetcode codeforces and codechef and other events  and showing the members events organised , workshop happens and prize pools
"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";

const poppins=Poppins({
  weight: ['400'],
   subsets: ['latin']
})

const CodingLeaderboard = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const router=useRouter()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="w-full min-h-screen mx-auto "
    >
      <div className=" bg-gradient-to-br from-slate-900 via-purple-900  shadow-xl overflow-hidden">
        <div className="p-8 md:p-12">
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white  text-center"
          >
            Join the Coding Leaderboard
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-blue-100 m-8 text-center max-w-3xl mx-auto"
          >
            Submit your LeetCode, CodeForces, and CodeChef IDs after signing up to rank yourself among all students at <strong>RGIPT</strong> . Showcase your coding skills and compete with peers!
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => setActiveTab("signup")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === "signup" ? "bg-white text-blue-600 shadow-lg" : "bg-blue-500 text-white hover:bg-blue-400"}`}
            >
              Sign Up Now
            </button>
            <button
              onClick={() => router.push('/leaderboard')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === "leaderboard" ? "bg-white text-blue-600 shadow-lg" : "bg-blue-500 text-white hover:bg-blue-400"}`}
            >
              View Leaderboard →
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-12 flex-wrap"
          >
            <PlatformIcon name="LeetCode" />
            <PlatformIcon name="CodeForces" />
            <PlatformIcon name="CodeChef" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4  gap-4 mt-8"
          >
            <StatCard number="150+" label="Active Members" delay={0.1} />
            <StatCard number="50+" label="Events Organized" delay={0.2} />
            <StatCard number="20+" label="Workshops" delay={0.3} />
            <StatCard number="25+" label="Internship provided" delay={0.4} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const PlatformIcon = ({ name }) => {
  const logoMap = {
    LeetCode: "/leetcode-logo.png", // Replace with your actual image paths
    CodeForces: "/codeforces-logo.png",
    CodeChef: "/codechef-logo.png",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all"
    >
      <div className={`text-white ${poppins.className} font-medium`}>{name}</div>
      {/* If you have logos:
      <img 
        src={logoMap[name]} 
        alt={name} 
        className="h-10 w-auto object-contain" 
      />
      */}
    </motion.div>
  );
};

const StatCard = ({ number, label, delay }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            type: "spring",
            stiffness: 100,
          },
        },
      }}
      className="bg-white/10 backdrop-blur-sm p-4 rounded-xl text-center"
    >
      <div className="text-3xl font-bold text-white mb-1">{number}</div>
      <div className="text-blue-100 text-sm">{label}</div>
    </motion.div>
  );
};

export default CodingLeaderboard;


