import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Title = ({ title }) => {
  const { showCompleted, setShowCompleted } = useContext(DataContext);
  return (
    <div className="border-b w-full border-gray-100 mb-4 pb-2 flex items-center justify-between">
      <h1 className="font-semibold text-2xl">{title}</h1>
      <button
        className="text-2xl w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded mr-2 transition-all duration-100"
        onClick={() => setShowCompleted(!showCompleted)}
      >
        <ion-icon name="file-tray-full-outline"></ion-icon>
      </button>
    </div>
  );
};

export default Title;
