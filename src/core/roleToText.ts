import { UserRoles } from 'data/values';

export const mapRoleToText = (role: string) => {
  switch (role) {
    case UserRoles.Admin:
      return 'Администратор';
    case UserRoles.Manager:
      return 'Менеджер';
    case UserRoles.User:
      return 'Пользователь';
    default:
      return '';
  }
};
