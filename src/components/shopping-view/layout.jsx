import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import Chatbot from "./Chatbot"; // Import the Chatbot component

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full">
        <Outlet />
        <Chatbot /> {/* Add Chatbot component here */}
      </main>
    </div>
  );
}

export default ShoppingLayout;