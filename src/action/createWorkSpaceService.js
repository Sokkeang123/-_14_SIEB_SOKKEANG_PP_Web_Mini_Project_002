"use server";

// import { createWorkspace } from "@/services/createWorkspace";

export const createWorkspaceAction = async (formData) => {
  try {
    const workspaceData = Object.fromEntries(formData.entries());

    await createWorkspaceAction(workspaceData);
    // await createWorkspace(workspaceData);
  } catch (error) {
    console.error("Error creating workspace:", error);
    throw new Error("Failed to create workspace");
  }
};
