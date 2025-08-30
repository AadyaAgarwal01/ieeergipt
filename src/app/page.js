import CodingLeaderboard from "./landingpage/codingleaderboard/page";
import { BackgroundBeamsDemo } from "./landingpage/page";
import { TimelineDemo } from "./Timeline/page";
import UpcomingHighlights from "./Upcomingevents/page";
import WhatWeDo from "./whatwedo/page";





export default function Home() {
  return (
    <div className=" bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900">
      <BackgroundBeamsDemo></BackgroundBeamsDemo>
      <CodingLeaderboard></CodingLeaderboard>
      <WhatWeDo></WhatWeDo>
      <UpcomingHighlights></UpcomingHighlights>
      <TimelineDemo></TimelineDemo>


      {/* bg-gradient-to-r from-[#404371] to-[#780831] */}
      

      
   
    </div>
  );
}
