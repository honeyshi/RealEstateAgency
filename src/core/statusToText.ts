import { Statuses } from 'data/values';

export const mapStatusToText = (status?: number) => {
  switch (status) {
    case Statuses.unpublished:
      return 'Не опубликовано';
    case Statuses.published:
      return 'Опубликовано';
    case Statuses.moderation:
      return 'На модерации';
    case Statuses.declined:
      return 'Отклонено';
    case Statuses.blocked:
      return 'Заблокировано';
    default:
      return '';
  }
};
