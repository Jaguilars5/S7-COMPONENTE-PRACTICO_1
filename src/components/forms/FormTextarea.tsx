import type { TextareaHTMLAttributes } from "react";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  touched?: boolean;
}

export function FormTextarea({
  label,
  error,
  touched,
  id,
  className = "",
  ...props
}: FormTextareaProps) {
  const textareaId = id || `field-${props.name}`;
  const showError = touched && error;

  return (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={textareaId}>
        {label}
      </label>
      <textarea
        id={textareaId}
        className={`input-field textarea-field ${showError ? "input-field-error" : ""} ${className}`.trim()}
        aria-invalid={showError ? "true" : "false"}
        aria-describedby={showError ? `${textareaId}-error` : undefined}
        {...props}
      />
      {showError && (
        <span className="input-error" id={`${textareaId}-error`} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
