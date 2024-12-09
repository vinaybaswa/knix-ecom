const Button = ({ text }) => {
  return (
    <button className="min-w-40 w-auto h-12 
tracking-wide text-lg py-0 px-9 bg-white 
text-black uppercase font-bold border-none 
cursor-pointer hover:bg-black hover:text-white 
border border-black">
      {text}
    </button>
  );
};

export default Button;
