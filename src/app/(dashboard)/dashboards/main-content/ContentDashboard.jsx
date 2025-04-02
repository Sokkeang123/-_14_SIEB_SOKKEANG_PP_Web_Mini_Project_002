import React from "react";

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
            className="inline-block mr-2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>
      </div>

      {/* Task Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Not Started Column */}
        <div>
          <h2 className="text-lg font-semibold text-red-700 mb-2">Not Started</h2>
          <div className="w-full h-0.5 bg-red-500 mb-4"></div>
          {/* Task Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-sm font-semibold text-gray-800">Slack Integration</h3>
            <p className="text-xs text-gray-500 mt-1">Add a field in the portal to let the user connect their Slack account</p>
            <div className="flex items-center mt-3">
              <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-2 py-1 mr-2">Web</span>
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center mt-3">
              <button className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </button>
              <span className="text-xs text-gray-500">Tomorrow</span>
            </div>
          </div>
          {/* Task Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-sm font-semibold text-gray-800">Mini Project 001</h2>
            <p className="text-xs text-gray-500 mt-1">Add a field in the portal to let the user connect their Slack account</p>
            <div className="flex items-center mt-3">
              <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-2 py-1 mr-2">UI/UX Design</span>
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center mt-3">
              <button className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </button>
              <span className="text-xs text-gray-500">Mar 03, 2025</span>
            </div>
          </div>
        </div>

        {/* In Progress Column */}
        <div>
          <h2 className="text-lg font-semibold text-blue-700 mb-2">In Progress</h2>
          <div className="w-full h-0.5 bg-blue-500 mb-4"></div>
          {/* Task Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-semibold text-gray-800">ReactJS Homework 003</h3>
            <p className="text-xs text-gray-500 mt-1">Add a field in the portal to let the user connect their Slack account</p>
            <div className="flex items-center mt-3">
              <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-2 py-1 mr-2">Web</span>
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center mt-3">
              <button className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </button>
              <span className="text-xs text-gray-500">Mar 04, 2025</span>
            </div>
          </div>
        </div>

        {/* Finished Column */}
        <div>
          <h2 className="text-lg font-semibold text-green-700 mb-2">Finished</h2>
          <div className="w-full h-0.5 bg-green-500 mb-4"></div>
          {/* Task Card */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-semibold text-gray-800">Data Fetching</h3>
            <p className="text-xs text-gray-500 mt-1">Add a field in the portal to let the user connect their Slack account</p>
            <div className="flex items-center mt-3">
              <span className="text-xs text-gray-500 bg-gray-200 rounded-full px-2 py-1 mr-2">Web</span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="flex justify-between items-center mt-3">
              <button className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </button>
              <span className="text-xs text-gray-500">Mar 03, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}