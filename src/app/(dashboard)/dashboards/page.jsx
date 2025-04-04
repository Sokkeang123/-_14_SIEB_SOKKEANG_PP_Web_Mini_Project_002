import React from "react";
import SidebarComponent from "./sidebar/SidebarComponent";
import AccountDashboard from "./main-content/AccountDashboard";
import ContentDashboard from "./main-content/ContentDashboard";

export default function DashboardPage() {
  return (
    <>
      <div className="grid grid-cols-12">
        <aside className="col-span-3">
          {/* <SidebarComponent/> */}
          <SidebarComponent />
          {/* <div className="py-3 text-2xl mt-18 uppercase text-center tracking-widest mb-8">
            <h1 className="font-bold text-3xl text-center">
              Plan<span className="text-watermelon-red">I</span>t
            </h1>
          </div> */}

          {/* <WorkSpaceComponent/> */}
        </aside>
        <section className="col-span-9">
          <AccountDashboard />
          <ContentDashboard />
        </section>
      </div>
    </>
  );
}
