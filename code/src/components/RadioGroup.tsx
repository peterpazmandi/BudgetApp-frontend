import React from 'react';

type RadioOption = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  className?: string;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  name,
  className = '',
}) => {
  return (
    <div className={`relative flex justify-center ${className}`}>
      <div className="border border-gray-400 dark:border-gray-600 rounded-md p-4 relative w-full">
        {/* Label in top-left corner */}
        <div className="absolute top-0 left-0 -translate-y-1/2 translate-x-4 color-container px-2 text-sm text-gray-600 dark:text-gray-300">
          {name}
        </div>

        {/* Radio buttons */}
        <div className="flex justify-center gap-6">
          {options.map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <span className="text-gray-900 dark:text-gray-100">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
