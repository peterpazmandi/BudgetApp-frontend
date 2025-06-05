import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface InputFieldProps {
  id: string;
  value: string;
  setValue: (value: string) => void;
  onActionClick?: () => void;
  type: string;
  label: string;
  icon?: React.ReactNode;
  isValueValid?: boolean;
}

const InputField = (props: InputFieldProps) => {
  
  return (
    <div
      className="relative rounded-full color-input-primary mt-4 mb-4
                    w-full
                    sm:w-80
                    lg:w-100"
    >
      {/* Left Icon */}
      <div className="absolute w-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:invert dark:brightness-0">
        {props.icon}
      </div>

      {/* Right Icon */}
      <div
        id={`${props.id}_rightIcon`} className={`absolute w-5 right-3 top-1/2 transform -translate-y-1/2 ${props.isValueValid ? "text-white hover:text-emerald-600 hover:scale-125 hover:cursor-pointer" : "text-gray-500"}`}>
        {props.onActionClick && <ArrowRightIcon />}
      </div>

      {/* Input Field */}
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className="peer color-input-primary color-text-secondary-invert border border-gray-300 rounded-full px-10 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  w-full
                  sm:w-80
                  lg:w-100"
        placeholder="" /* Keep placeholder empty to prevent overlap */
      />

      {/* Floating Label */}
      <label
        htmlFor={props.id}
        className="absolute left-10 top-1 text-gray-500 text-sm transition-all 
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
