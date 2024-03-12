import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-lg shadow-lg px-5 py-3 bg-grey-alwhite">
      {children}
    </div>
  );
};

export default Card;
