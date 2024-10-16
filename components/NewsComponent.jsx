import React from "react";
import SectionHeading from "./SectionHeading";
import mit from "../public/partnerlogos/mit_news.png"
import ragon from "../public/partnerlogos/ragon.png"
import graduate from "../public/partnerlogos/mit_graduate.png"
import science_boston from "../public/partnerlogos/science_boston.png"
import Image from "next/image";

const NewsComponent = () => {
  return (
    <div className="bg-primary w-full pt-12 flex flex-col items-center justify-center">
      <SectionHeading Title="In the News" Bg="dark" />
      <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray pb-8">
      Stay updated with the latest articles and features showcasing the impactful work of Future African Scientist (FAS). Explore how various institutions and websites highlight our projects, research, and contributions to advancing science and technology in Africa and beyond.
      </p>
      <div className="bg-secondary w-full py-12">
        {/* News articles section */}
        <div className="flex gap-8 xl:gap-12 px-8 pt-4 items-center justify-center flex-wrap">
          {/* Example news article cards */}
  
          <a href="https://news.mit.edu/2024/empowering-next-generation-scientists-in-africa-0802" className="w-64 h-64 flex items-center justify-center bg-white shadow-lg rounded-lg p-4" target="_blank" rel="noopener noreferrer">
            <Image src={mit} alt="MIT News" className="h-32 w-auto" />
          </a>
          <a href="https://ragoninstitute.org/latest-news/future-african-scientist-the-unlikely-friendship-teaching-the-next-generation-of-african-researchers/" className="w-64 h-64 flex items-center justify-center bg-white shadow-lg rounded-lg p-4" target="_blank" rel="noopener noreferrer">
            <Image src={ragon} alt="Ragon Institute" className="h-32 w-auto" />
          </a>
          <a href="https://oge.mit.edu/oge_news/empowering-the-next-generation-of-scientists-in-africa/" className="w-64 h-64 flex items-center justify-center bg-white shadow-lg rounded-lg p-4"target="_blank" rel="noopener noreferrer">
            <Image src={graduate} alt="MIT Graduate" className="h-32 w-auto" />
          </a>
          <a href="https://scienceinboston.com/2024/08/01/future-african-scientist-the-unlikely-friendship-teaching-the-next-generation-of-african-researchers/" className="w-64 h-64 flex items-center justify-center bg-white shadow-lg rounded-lg p-4"target="_blank" rel="noopener noreferrer">
            <Image src={science_boston} alt="Science In Boston" className="h-32 w-auto" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default NewsComponent;








// import React from "react";
// import SectionHeading from "./SectionHeading";

// const NewsComponent = () => {
//   return (
//     <div className="bg-primary w-full pt-12 flex flex-col items-center justify-center">
//       <SectionHeading Title="Latest News" Bg="dark" />
//       <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray pb-8">
//         Stay updated with the latest news and articles from around the globe, covering topics in politics, science, technology, and more.
//       </p>
//       <div className="bg-secondary w-full py-12">
//         {/* News articles section */}
//         <div className="flex gap-8 xl:gap-12 px-8 pt-4 items-center justify-center flex-wrap">
//           {/* Example news article cards */}
//           <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-4">
//             <h3 className="font-bold text-lg">Breaking News: Global Tech Summit 2024</h3>
//             <p className="mt-2 text-sm text-gray-700">
//               The Global Tech Summit brings together innovators to discuss the future of AI, blockchain, and more.
//             </p>
//           </div>
//           <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-4">
//             <h3 className="font-bold text-lg">Health: Advances in Vaccine Research</h3>
//             <p className="mt-2 text-sm text-gray-700">
//               Scientists have made significant progress in developing a new generation of vaccines.
//             </p>
//           </div>
//           <div className="w-64 h-64 bg-white shadow-lg rounded-lg p-4">
//             <h3 className="font-bold text-lg">Politics: Global Leaders Meet for Climate Change Summit</h3>
//             <p className="mt-2 text-sm text-gray-700">
//               Leaders from across the world gather to discuss policies for addressing climate change.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsComponent;



// import React from "react";
// import SectionHeading from "./SectionHeading";
// import agriclub from "../public/partnerlogos/agriclub.png";
// import emsa from "../public/partnerlogos/emsa.png";
// import gambia from "../public/partnerlogos/gambia.png";
// import mbarara from "../public/partnerlogos/mbarara.png";
// import nigeria from "../public/partnerlogos/nigeria.png";
// import tamsa from "../public/partnerlogos/tamsa.png";
// import uganda from "../public/partnerlogos/uganda.png";
// import Image from "next/image";

// const NewsComponent = () => {
//   return (
//     <div className="bg-primary w-full pt-12 flex flex-col items-center justify-center">
//       <SectionHeading Title="Our Partners" Bg="dark" />
//       <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray pb-8">
//         We are deeply committed to collaborating with partners within the
//         scientific community to cultivate a vibrant support ecosystem for young
//         scientists, offering them invaluable growth opportunities. Through
//         established relationships with global research organizations, consortia,
//         and professional associations, we create a dynamic network dedicated to
//         empowering the next generation of scientific innovators in Africa.
//       </p>
//       <div className="bg-secondary w-full py-12">
//         {/* logos */}
//         <div className="flex gap-8 xl:gap-12 px-8 pt-4 items-center justify-center flex-wrap lg:flex-nowrap">
//           <Image className="w-32 h-32" src={agriclub} alt="agriclub logo" />
//           <Image className="w-28 h-28" src={emsa} alt="emsa logo" />
//           <Image className="w-36 h-36" src={gambia} alt="gambia logo" />
//           {/* <Image className="w-36 h-36" src={mbarara} alt="mbarara logo" /> */}
//           {/* <Image className="w-36 h-36" src={nigeria} alt="nigeria logo" /> */}
//           <Image className="w-36 h-36" src={tamsa} alt="tamsa logo" />
//           <Image className="w-28 h-28" src={uganda} alt="uganda logo" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PartnersComponent;
