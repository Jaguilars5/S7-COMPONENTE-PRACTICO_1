import { useCallback, useState } from "react";
import type {
  FormErrors,
  FormValues,
  ValidationRules,
} from "../types/form";

export function useForm(
  initialValues: FormValues,
  validationRules: ValidationRules,
) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback(
    (name: keyof FormValues, value: string): string | undefined => {
      const rules = validationRules[name];
      if (!rules) return undefined;

      if (rules.required && !value.trim()) {
        return "Este campo es obligatorio";
      }

      if (rules.minLength && value.trim().length < rules.minLength) {
        return `Debe tener al menos ${rules.minLength} caracteres`;
      }

      if (rules.maxLength && value.trim().length > rules.maxLength) {
        return `Debe tener maximo ${rules.maxLength} caracteres`;
      }

      if (rules.pattern && !rules.pattern.test(value.trim())) {
        return "El formato no es valido";
      }

      if (rules.custom) {
        return rules.custom(value);
      }

      return undefined;
    },
    [validationRules],
  );

  const handleChange = useCallback(
    (name: keyof FormValues, value: string) => {
      setValues((prev: FormValues) => ({ ...prev, [name]: value }));
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prev: FormErrors) => ({ ...prev, [name]: error }));
      }
    },
    [touched, validateField],
  );

  const handleBlur = useCallback(
    (name: keyof FormValues) => {
      setTouched((prev: Record<string, boolean>) => ({
        ...prev,
        [name]: true,
      }));
      const error = validateField(name, values[name]);
      setErrors((prev: FormErrors) => ({ ...prev, [name]: error }));
    },
    [values, validateField],
  );

  const validateAll = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    for (const field of Object.keys(validationRules) as (keyof FormValues)[]) {
      const error = validateField(field, values[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    }

    setErrors(newErrors);
    setTouched(
      Object.keys(validationRules).reduce(
        (acc: Record<string, boolean>, field: string) => ({
          ...acc,
          [field]: true,
        }),
        {},
      ),
    );

    return isValid;
  }, [values, validationRules, validateField]);

  const handleSubmit = useCallback(
    (onSubmit: (values: FormValues) => void) => {
      return (e: React.FormEvent) => {
        e.preventDefault();
        if (validateAll()) {
          setIsSubmitting(true);
          onSubmit(values);
        }
      };
    },
    [values, validateAll],
  );

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setErrors,
    setValues,
  };
}
