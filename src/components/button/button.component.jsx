const Button = ({ children, additionalStyles, ...otherProps }) => {
  return (
    <button className={`min-w-40 w-auto h-12 
tracking-wide text-lg py-3 px-9 bg-white 
text-black uppercase border-none 
cursor-pointer hover:bg-black hover:text-white 
border border-black flex justify-center ${additionalStyles}` } {...otherProps} >
      {children}
    </button>
  );
};

export default Button;
