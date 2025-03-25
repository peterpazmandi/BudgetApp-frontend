interface InputFieldProps {
  value: string;
  setValue: (value: string) => void;
  type: string;
  label: string;
}

const InputField = (props: InputFieldProps) => {
  return (
    <div className="relative w-100 rounded-full color-input-primary">
      <input
        id="input-field"
        type={props.type}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className="peer color-input-primary w-100 border border-gray-300 rounded-full px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="" /* Keep placeholder empty to prevent overlap */
      />
      <label
        htmlFor="input-field"
        className="absolute left-3 top-1 text-gray-500 text-sm transition-all 
              peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-500"
      >
        {props.label}
      </label>
    </div>
  );
};

export default InputField;
