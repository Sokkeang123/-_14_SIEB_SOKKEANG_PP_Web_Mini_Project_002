import "../globals.css";
import SidebarComponent from "./sidebar/SidebarComponent";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
       
        {children}
      </body>
    </html>
  );
}
