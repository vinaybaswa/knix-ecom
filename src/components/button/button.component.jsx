import { Fragment } from "react";

export const Button = ({ children, additionalStyles, ...otherProps }) => {
  return (
    <button
      className={`min-w-40 w-auto h-12 
tracking-wide text-lg py-3 px-9 bg-white 
text-black uppercase border-[1px] rounded-md
cursor-pointer hover:bg-black hover:text-white 
border-black flex justify-center ${additionalStyles}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export const ButtonInverted = ({
  children,
  additionalStyles,
  ...otherProps
}) => {
  return (
    <button
      className={`min-w-fit w-auto h-12 tracking-wide text-sm py-3 
px-4 bg-black text-white uppercase border-none rounded-md
cursor-pointer hover:opacity-70 border 
border-black flex justify-center 
${additionalStyles}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
