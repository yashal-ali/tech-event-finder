import React from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | boolean | undefined;
}

const Input: React.FC<IProps> = ({
  placeholder,
  onChange,
  error,
  type,
  style,
  className,
  value,
  name,
  readOnly,
}) => {
  return (
    <div className="mb-4">
      <input
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        readOnly={readOnly}
        id={name}
        type={type}
        value={value}
        className={`focus:outline-none border p-2 rounded w-full mb-2  h-[50px] ${className}`}
        style={style}
      />
      {error && (
        <p className="text-sm mb-2 font-helvetica text-red-700">{error}</p>
      )}
    </div>
  );
};

export default Input;