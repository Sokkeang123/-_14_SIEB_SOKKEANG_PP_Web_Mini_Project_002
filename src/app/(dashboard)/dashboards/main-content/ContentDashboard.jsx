import CardComponent from "@/components/card";
import React from "react";
import FooterComponent from "./FooterComponent";

export default function ContentDashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">HRD Design</h1>
        <div className="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-star-icon lucide-star"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="pe-4">
          <CardComponent />
        </div>
        <div className="pe-4">
          <CardComponent />
        </div>
        <div className="pe-4">
          <CardComponent />
        </div>
      </div>
      <div className="absolute bottom-[-60px] right-16">
        <FooterComponent />
      </div>
    </div>
  );
}

// {/* Task Board */}
// <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//   {/* Not Started Column */}
//   <div>
//     <h2 className="text-lg font-semibold text-red-700 mb-2">Not Started</h2>
//     <div className="w-full h-0.5 bg-red-500 mb-4"></div>
//     {/* Task Card 1 */}
//     <div className="bg-white p-4 rounded-lg shadow-md mb-4">
//       <h3 className="text-sm font-semibold text-gray-800">Slack Integration</h3>
//       <p className="text-xs text-gray-500 mt-1">Add a field in the portal to let the user connect their Slack account</p>
//       <div className="flex items-center mt-3">
//         <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-2 py-1 mr-2">Web</span>
//         <span className="w-3 h-3 bg-red-500 rounded-full"></span>
//       </div>
//       <div className="flex justify-between items-center mt-3">
//         <button className="text-gray-500">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M12 5v14" />
//             <path d="M5 12h14" />
//           </svg>
//         </button>
//         <span className="text-xs text-gray-500">Tomorrow</span>
//       </div>
//     </div>
//     {/* Task Card 2 */}
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h2 className="text-sm font-semibold text-gray-800">Mini Project 001</h2>
//       <p className="text-xs text-gray-500 mt-1">Add a field in the portal to let the user connect their Slack account</p>
//       <div className="flex items-center mt-3">
//         <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-2 py-1 mr-2">UI/UX Design</span>
//         <span className="w-3 h-3 bg-red-500 rounded-full"></span>
//       </div>
//       <div className="flex justify-between items-center mt-3">
//         <button className="text-gray-500">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M12 5v14" />
//             <path d="M5 12h14" />
//           </svg>
//         </button>
//         <span className="text-xs text-gray-500">Mar 03, 2025</span>
//       </div>
//     </div>
//   </div>

//   {/* In Progress Column */}
//   <div>
//     <h2 className="text-lg font-semibold text-blue-700 mb-2">In Progress</h2>
//     <div className="w-full h-0.5 bg-blue-500 mb-4"></div>
//     {/* Task Card */}
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h3 className="text-sm font-semibold text-gray-800">ReactJS Homework 003</h3>
//       <p className="text-xs text-gray-500 mt-1">Add a field in the portal to let the user connect their Slack account</p>
//       <div className="flex items-center mt-3">
//         <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-2 py-1 mr-2">Web</span>
//         <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
//       </div>
//       <div className="flex justify-between items-center mt-3">
//         <button className="text-gray-500">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M5 12h14" />
//           </svg>
//         </button>
//         <span className="text-xs text-gray-500">Mar 04, 2025</span>
//       </div>
//     </div>
//   </div>

//   {/* Finished Column */}
//   <div>
//     <h2 className="text-lg font-semibold text-green-700 mb-2">Finished</h2>
//     <div className="w-full h-0.5 bg-green-500 mb-4"></div>
//     {/* Task Card */}
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h3 className="text-sm font-semibold text-gray-800">Data Fetching</h3>
//       <p className="text-xs text-gray-500 mt-1">Add a field in the portal to let the user connect their Slack account</p>
//       <div className="flex items-center mt-3">
//         <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-2 py-1 mr-2">Web</span>
//         <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//       </div>
//       <div className="flex justify-between items-center mt-3">
//         <button className="text-gray-500">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M20 6L9 17l-5-5" />
//           </svg>
//         </button>
//         <span className="text-xs text-gray-500">Mar 03, 2025</span>
//       </div>
//     </div>
//   </div>
// </div>
