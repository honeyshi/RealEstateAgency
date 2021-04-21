export const districts = [
  'Нижегородский',
  'Приокский',
  'Советский',
  'Автозаводский',
  'Канавинский',
  'Ленинский',
  'Московский',
  'Сормовский',
];

export const metroValues = [
  'Не указано',
  'Горьковская',
  'Московская',
  'Чкаловская',
  'Ленинская',
  'Заречная',
  'Двигатель Революции',
  'Пролетарская',
  'Автозаводская',
  'Комсомольская',
  'Кировская',
  'Парк Культуры',
  'Стрелка',
  'Канавинская',
  'Бурнаковская',
  'Буревестник',
];

export const propertyTypes = [
  { iconName: 'building', id: 'flat-type', text: 'Квартира', value: '1' },
  { iconName: 'collage', id: 'room-type', text: 'Комната', value: '2' },
  { iconName: 'home-4', id: 'house-type', text: 'Дом', value: '0' },
];

export const roomsAmount = [
  { id: 'one-room', circle: true, text: '1', value: '1' },
  { id: 'two-rooms', circle: true, text: '2', value: '2' },
  { id: 'three-rooms', circle: true, text: '3', value: '3' },
  { id: 'four-rooms', circle: true, text: '4+', value: '4' },
  { id: 'studio-room', circle: false, text: 'Студия', value: '0' },
];

export const amountAdvertismentOnPage = 10;

export enum Statuses {
  unpublished = 0,
  published = 1,
  moderation = 2,
  declined = 3,
  blocked = 4,
}

export interface ModalProps {
  valid: boolean;
  show: boolean;
  text: string;
}

export const invalidModalState: ModalProps = {
  valid: false,
  show: true,
  text: 'Что-то пошло не так. Повторите попытку позже.',
};

export enum Sex {
  initial = -1,
  unselected = 0,
  male = 1,
  female = 2,
}
