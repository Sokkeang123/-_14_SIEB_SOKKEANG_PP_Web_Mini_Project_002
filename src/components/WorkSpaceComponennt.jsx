import { getAllWorkSpace } from "@/services/workSpaceService";
import React from "react";

export default async function WorkSpaceComponent() {
  const workSpaceList = await getAllWorkSpace();

  return (
    <div className="grid grid-cols-5 space-y-8 my-12 container mx-auto">
      {workSpaceList?.payload?.map((workspace) => (
        <div
          key={workspace?.workspaceId}
          className="bg-pink-200 m-5 p-5 rounded-xl drop-shadow-xl space-y-2"
        >
          <p className="text-2xl">
            {workspace?.id}. {workspace?.workspaceName}
          </p>
          {/* <p>{workspace?.description}</p> */}
        </div>
      ))}
    </div>
  );
}
