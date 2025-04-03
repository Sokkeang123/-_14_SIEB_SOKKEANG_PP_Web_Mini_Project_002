import { getAllWorkSpace } from "@/services/workSpaceService";
import { Link } from "lucide-react";
import React from "react";

export default async function SidebarComponent() {
  const { payload: workspace } = await getAllWorkSpace();
  // console.log(workspace);

  return (
    <aside className="hidden w-64 md:block min-h-screen">
      <div className="py-3 text-2xl mt-18 uppercase text-center tracking-widest mb-8">
        <h1 className="font-bold text-3xl text-center">
          Plan<span className="text-watermelon-red">I</span>t
        </h1>
      </div>

      <div class="flex items-center justify-between">
        <div className="ms-4 text-2xl font-bold text-blue-600">
          <h1>Workspace</h1>
        </div>
        <div className="ms-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="blue"
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
      </div>
      <br />

      {workspace.map((item) => (
        <nav className="text-sm" key={item.workspaceId}>
          <ul className="flex flex-col">
            <li className="flex items-center justify-between px-4 pt-4 py-2 hover:bg-blue-200 hover:rounded-2xl  uppercase text-1xl tracking-wider text-gray-500 font-bold">
              <span>{item.workspaceName}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
                class="lucide lucide-ellipsis-icon lucide-ellipsis"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </li>
          </ul>
        </nav>
      ))}

      {/* Favourite section */}
      <div class="flex mt-4 items-center justify-between">
        <div className="ms-4 text-2xl font-bold text-blue-600">
          <h1>Favourite</h1>
        </div>
        <div className="ms-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="blue"
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
      </div>
    </aside>
  );
}
