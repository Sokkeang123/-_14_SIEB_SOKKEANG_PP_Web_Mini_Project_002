import React from "react";
import SidebarComponent from "./sidebar/SidebarComponent";
import AccountDashboard from "./main-content/AccountDashboard";
import ContentDashboard from "./main-content/ContentDashboard";

export default function DashboardPage() {
  return <>
    <div className="grid grid-cols-12">

      <aside className="col-span-3">
          <SidebarComponent/>
      </aside>
      <section className="col-span-9">
        <AccountDashboard/>
        <ContentDashboard/>

      </section>

    </div>
  </>;
}
