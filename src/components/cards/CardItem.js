import React from "react";

const CardItem = ({ icon, title, desc, color }) => {
  return (
    <div
      className="space-y-4 text-center flex flex-col items-center text-black p-4 rounded-lg"
      style={{
        backgroundColor: color,
      }}
    >
      {icon && <img src={icon} alt="icon" className="h-10 w-10" />}

      <div className="space-y-2">
        <p className="font-semibold text-xl">{title}</p>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default CardItem;
