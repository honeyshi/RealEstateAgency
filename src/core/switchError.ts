import { history } from 'core/history';

export const switchError = (status: any) => {
  switch (status) {
    case 401:
      history.push('/unauthorized');
      break;
    case 403:
      history.push('/access-denied');
      break;
    default:
      history.push('/error');
  }
};
