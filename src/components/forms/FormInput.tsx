import type { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  touched?: boolean;
}

export function FormInput({
  label,
  error,
  touched,
  id,
  className = "",
  ...props
}: FormInputProps) {
  const inputId = id || `field-${props.name}`;
  const showError = touched && error;

  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className={`input-field ${showError ? "input-field-error" : ""} ${className}`.trim()}
        aria-invalid={showError ? "true" : "false"}
        aria-describedby={showError ? `${inputId}-error` : undefined}
        {...props}
      />
      {showError && (
        <span className="input-error" id={`${inputId}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
