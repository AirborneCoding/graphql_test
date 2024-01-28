
import { Controller } from "react-hook-form";

const Input = ({ name, label, control, rules, type, errors }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            type={type || "text"}
            {...field}
            id={name}
            value={field.value || ""}
            className="input input-bordered w-full"
          />
        )}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  );
};

export default Input;