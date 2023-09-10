
interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  error?: string | undefined;
}


const InputField = ({ id, label, type, error }: InputFieldProps) => {
  return (
    <div className="mb-7 pb-7">
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="w-full border py-2 px-3 border-black outline-none"
      />
      {error && (
        <p className="text-red-500">{error}</p>
      )}
    </div>
  );
};

export default InputField;
