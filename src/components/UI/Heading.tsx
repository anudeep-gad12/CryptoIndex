import React from "react";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-grey-dark text text-2xl font-medium mt-6 mb-4">
      {children}
    </h2>
  );
};

export default Heading;
