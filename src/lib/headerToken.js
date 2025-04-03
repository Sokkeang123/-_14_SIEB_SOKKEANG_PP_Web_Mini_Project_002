const { auth } = require("@/auth");

const headerToken = async () => {
  const session = await auth();
  console.log("Header token session: ", session);

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session.user?.payload?.token}`,
  };
};

export default headerToken;
