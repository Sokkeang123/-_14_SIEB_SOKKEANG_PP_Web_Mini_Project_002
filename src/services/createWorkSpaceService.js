import headerToken from "@/lib/headerToken";

export const createWorkspace = async (formData) => {
  const headers = await headerToken();

  const res = await fetch("http://96.9.81.187:8080/api/v1/workspace", {
    method: "POST",
    headers,
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    console.error("Error:", res.status, res.statusText);
    throw new Error(`Failed to create workspace: ${res.statusText}`);
  }

  const responseData = await res.json();

  return responseData;
};
