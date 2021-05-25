export const mapRoleToText = (role: string) => {
  switch (role) {
    case '0':
      return 'Админ';
    case '1':
      return 'Менеджер';
    case '2':
      return 'Пользователь';
    default:
      return '';
  }
};
