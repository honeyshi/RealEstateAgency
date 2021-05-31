import { ValidationError } from 'yup';

export const parseError = (error: any, isAuth = false): string | string[] => {
  if (error == null) return 'Ошибка сети';
  if (error instanceof ValidationError) return error.errors;
  if (error.response) {
    if (error.response.status === 401)
      return isAuth ? 'Введен неправильный Email или Пароль' : 'Для выполнения этого действия необходима авторизация';
    if (error.response.status === 403) return 'Для выполнения этого действия необходимо подтверждение почты';
  } else if (error instanceof Error)
    return error.message === 'Network Error' ? 'Произошла ошибка. Попробуйте позже.' : error.message;
  return 'Произошла ошибка. Попробуйте позже.';
};
