import type { SelectHTMLAttributes } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  touched?: boolean;
}

export function FormSelect({
  label,
  options,
  placeholder = "Seleccione una opcion",
  error,
  touched,
  id,
  className = "",
  ...props
}: FormSelectProps) {
  const selectId = id || `field-${props.name}`;
  const showError = touched && error;

  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={selectId}>
        {label}
      </label>
      <select
        id={selectId}
        className={`input-field select-field ${showError ? "input-field-error" : ""} ${className}`.trim()}
        aria-invalid={showError ? "true" : "false"}
        aria-describedby={showError ? `${selectId}-error` : undefined}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {showError && (
        <span className="input-error" id={`${selectId}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
