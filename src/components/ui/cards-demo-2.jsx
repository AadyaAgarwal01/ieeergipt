"use client";
import { cn } from "@/lib/utils";

export default function CardDemo({ member }) {
  // Extract LinkedIn username from URL for profile picture
  const getLinkedInProfilePic = (linkedinUrl) => {
    try {
      // Extract username from LinkedIn URL
      const match = linkedinUrl.match(/linkedin\.com\/in\/([^\/]+)/);
      if (match) {
        const username = match[1];
        // LinkedIn profile pictures are not directly accessible via public API
        // Using a placeholder service or fallback to member image
        return member.image || `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg`;
      }
      return member.image || `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg`;
    } catch (error) {
      return member.image || `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg`;
    }
  };

  const handleLinkedInClick = () => {
    if (member.linkedin) {
      window.open(member.linkedin, '_blank');
    }
  };

  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "bg-gradient-to-br from-slate-800 via-purple-800 to-slate-800 bg-cover"
        )}
        onClick={handleLinkedInClick}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <img
            height="100"
            width="100"
            alt="Avatar"
            src={getLinkedInProfilePic(member.linkedin)}
            className="h-10 w-10 rounded-full border-2 object-cover border-white"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {member.name}
            </p>
            <p className="text-sm text-blue-300 hover:text-blue-200 transition-colors">
              LinkedIn Profile
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {member.post}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4 line-clamp-4">
            {member.message}
          </p>
        </div>
      </div>
    </div>
  );
}