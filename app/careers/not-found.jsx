
import NavigationBar from "@/components/NavigationBar";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      <div>
        <div className="flex flex-col items-center justify-center text-2xl h-screen">
            404 - Page Not Found
        </div>
      </div>
    </div>
  );
};

export default NotFound;
