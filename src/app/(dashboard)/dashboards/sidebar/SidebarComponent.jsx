import { getAllWorkSpace } from "@/services/workSpaceService";
import { Link } from "lucide-react";
import React from "react";

export default async function SidebarComponent() {
  const { payload: workspace } = await getAllWorkSpace();
  console.log(workspace);

  return (
    <aside className="hidden w-64 md:block min-h-screen">
      <div className="py-3 text-2xl mt-18 uppercase text-center tracking-widest mb-8">
        <h1 className="font-bold text-3xl text-center">
          Plan<span className="text-watermelon-red">I</span>t
        </h1>
      </div>
      {workspace.map((item) => (
        <nav className="text-sm" key={item.workspaceId}>
          <ul className="flex flex-col">
            <li className="px-4 cursor-pointer">
              <h1>Workspace</h1>
              <Link className="py-3 flex items-center gap-2" href="/">
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
                  className="lucide lucide-square-plus-icon lucide-square-plus"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </Link>
            </li>
            <li className="flex items-center justify-between px-4 pt-8 py-2  uppercase text-lg tracking-wider text-gray-500 font-bold">
              <span>{item.workspaceName}</span>
              <div>
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
                  className="lucide lucide-square-plus-icon lucide-square-plus"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
            </li>
          </ul>
        </nav>
      ))}
      {/* <nav className="text-sm">
      <ul className="flex flex-col">
        <li className="px-4 cursor-pointer">
          <Link className="py-3 flex items-center gap-2" href="/">
            <h1>Workspace</h1>
            <svg href=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-plus-icon lucide-square-plus"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
            <div>
              
            </div>
          </Link>
        </li>
        <li className="flex items-center justify-between px-4 pt-8 py-2  uppercase text-lg tracking-wider text-gray-500 font-bold">
          <span>Workspace</span>
          <div>
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
              className="lucide lucide-square-plus-icon lucide-square-plus"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
          </div>
        </li>

        <li className="px-4 py-2 text-xs uppercase tracking-wider hover:bg-gray-200 hover:rounded-xl  font-bold flex items-center">
          <div className="mr-2">
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
              className="lucide lucide-dot-icon lucide-dot"
            >
              <circle cx="12.1" cy="12.1" r="1" className="text-red-500" />
            </svg>
          </div>
          <div className="flex items-center justify-between flex-grow">
            <span>HRD Design</span>
            <div className="flex items-center">
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
                className="lucide lucide-ellipsis-icon lucide-ellipsis"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
          </div>
        </li>

        <li className="px-4 py-2 text-xs uppercase tracking-wider hover:bg-gray-200 hover:rounded-xl  font-bold flex items-center">
          <div className="mr-2">
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
              className="lucide lucide-dot-icon lucide-dot"
            >
              <circle cx="12.1" cy="12.1" r="1" className="text-red-500" />
            </svg>
          </div>
          <div className="flex items-center justify-between flex-grow">
            <span>Website Design</span>
            <div className="flex items-center">
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
                className="lucide lucide-ellipsis-icon lucide-ellipsis"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
          </div>
        </li>

        <li className="px-4 py-2 text-xs uppercase tracking-wider hover:bg-gray-200 hover:rounded-xl  font-bold flex items-center">
          <div className="mr-2">
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
              className="lucide lucide-dot-icon lucide-dot"
            >
              <circle cx="12.1" cy="12.1" r="1" className="text-red-500" />
            </svg>
          </div>
          <div className="flex items-center justify-between flex-grow">
            <span>Mobile Design</span>
            <div className="flex items-center">
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
                className="lucide lucide-ellipsis-icon lucide-ellipsis"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
          </div>
        </li>

        <li className="px-4 py-2 text-xs uppercase tracking-wider hover:bg-gray-200 hover:rounded-xl  font-bold flex items-center">
          <div className="mr-2">
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
              className="lucide lucide-dot-icon lucide-dot"
            >
              <circle cx="12.1" cy="12.1" r="1" className="text-red-500" />
            </svg>
          </div>
          <div className="flex items-center justify-between flex-grow">
            <span>Spring Boot</span>
            <div className="flex items-center">
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
                className="lucide lucide-ellipsis-icon lucide-ellipsis"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
          </div>
        </li>

        <li className="flex items-center justify-between px-4 pt-8 py-2  uppercase text-lg tracking-wider text-gray-500 font-bold">
          <span>Favorite</span>
          <div>
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
        </li>

        <li className="px-4 py-2 text-xs uppercase tracking-wider hover:bg-gray-200 hover:rounded-xl font-bold flex items-center">
          <div className="mr-2">
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
              className="lucide lucide-dot-icon lucide-dot"
            >
              <circle cx="12.1" cy="12.1" r="1" className="text-red-500" />
            </svg>
          </div>
          <div className="flex items-center justify-between flex-grow">
            <span>HRD Design</span>
            <div className="flex items-center">
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
                className="lucide lucide-ellipsis-icon lucide-ellipsis"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
          </div>
        </li>

        <li className="px-4 py-2 text-xs uppercase tracking-wider hover:bg-gray-200 hover:rounded-xl font-bold flex items-center">
          <div className="mr-2">
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
              className="lucide lucide-dot-icon lucide-dot"
            >
              <circle cx="12.1" cy="12.1" r="1" className="text-red-500" />
            </svg>
          </div>
          <div className="flex items-center justify-between flex-grow">
            <span>Website Design</span>
            <div className="flex items-center">
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
                className="lucide lucide-ellipsis-icon lucide-ellipsis"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </nav> */}

      {/* <div className="flex items-center ps-14 gap-2 pt-56">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="green"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-log-out-icon lucide-log-out"
        >
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
        <h2 className="text-green-600">Logout</h2>
      </div> */}
    </aside>
  );
}
