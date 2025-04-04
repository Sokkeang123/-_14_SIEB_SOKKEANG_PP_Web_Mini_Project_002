import headerToken from "@/lib/headerToken";

export const getAllWorkSpace = async () => {
  const headers = await headerToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/workspaces`,
    {
      headers,
    }
  );

  const workspaces = await response.json();
  console.log("Workspace list  : ", workspaces);

  return workspaces;
};
