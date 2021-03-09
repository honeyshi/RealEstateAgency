import { ValidationError } from 'yup';

export const parseError = (error: any): string | string[] => {
  if (error == null) return 'Network error';
  if (error instanceof ValidationError) return error.errors;
  if (error.response.status === 401) return 'Введен неправильный Email или Пароль';
  if (error.response.status === 500) return 'Server error';
  if (error instanceof Error) return error.message;
  return 'Unknown error';
};
