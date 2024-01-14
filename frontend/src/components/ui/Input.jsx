const Input = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="bg-slate-600 text-white p-2 rounded-md border-2 border-transparent hover:border-blue-400 w-full text-center"
    />
  );
};

export default Input;
