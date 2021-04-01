const AuthInput = (props) => {
  const { labelName, ...inputProps } = props;

  return (
    <div className="mt-4">
      <label htmlFor={props.name} className="text-sm capitalize">
        {props && props.labelName ? props.labelName : props.name}
      </label>
      <input
        {...inputProps}
        className="outline-none border border-gray-300 rounded p-2 mt-2
            w-full focus:shadow-input focus:border-pink-400"
      />
    </div>
  );
};

export default AuthInput;
