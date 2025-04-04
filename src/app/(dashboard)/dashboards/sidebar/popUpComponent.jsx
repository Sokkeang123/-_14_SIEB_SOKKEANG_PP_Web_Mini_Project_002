"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import { createWorkspaceAction } from "@/action/createWorkSpaceService";
const WorkspaceForm = ({ onWorkspaceCreated }) => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!workspaceName.trim()) {
      alert("Please enter a workspace name.");
      return;
    }
    try {
      const response = await createWorkspaceAction({ workspaceName });
      setWorkspaceName("");
      setIsOpen(false);
      if (onWorkspaceCreated) {
        onWorkspaceCreated();
      }
    } catch (error) {
      console.error("Error creating workspace:", error);
    }
  };
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        <PlusCircle size={20} className="mr-2" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-semibold">Create New Workspace</h2>

              <Input
                id="workspaceName"
                type="text"
                placeholder="Please Enter Workspace Name"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
              <div className="flex justify-end cursor-pointer gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-amber-50 bg-red-700 border rounded-md "
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md "
                >
                  Ok
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default WorkspaceForm;
