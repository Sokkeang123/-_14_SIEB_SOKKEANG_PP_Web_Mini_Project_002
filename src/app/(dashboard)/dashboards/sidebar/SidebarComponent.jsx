import { getAllWorkSpace } from "@/services/workSpaceService";
import { Link } from "lucide-react";
import React from "react";
import WorkspaceForm from "./popUpComponent";

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
        <div className="ms-16 cursor-pointer">
          <WorkspaceForm />
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
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-star-icon lucide-star"
          >
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
          </svg>
        </div>
      </div>
      <ul>
        <li className="flex items-center justify-between px-4 pt-4 py-2 hover:bg-blue-200 hover:rounded-2xl  uppercase text-1xl tracking-wider text-gray-500 font-bold">
          <span>Mobile</span>
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
        <li className="flex items-center justify-between px-4 pt-4 py-2 hover:bg-blue-200 hover:rounded-2xl  uppercase text-1xl tracking-wider text-gray-500 font-bold">
          <span>PHP</span>
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
    </aside>
  );
}
