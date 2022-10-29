import React from "react";

const Heading = ({ children, className, ...props }) => {
  return (
    <h2
      className={`font-bold text-[30px] md:text-[40px] mb-[25px] md:mb-[40px] uppercase ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

export default Heading;
