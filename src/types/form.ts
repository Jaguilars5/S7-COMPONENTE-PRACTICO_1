export interface FormValues {
  fullName: string;
  email: string;
  peopleCount: string;
  visitDate: string;
  hotelId: string;
  contactMethod: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  peopleCount?: string;
  visitDate?: string;
  hotelId?: string;
  contactMethod?: string;
  message?: string;
}

export type FormFields = keyof FormValues;

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | undefined;
}

export type ValidationRules = Record<FormFields, ValidationRule>;
