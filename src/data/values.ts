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
  'Парк Культуры',
  'Кировская',
  'Комсомольская',
  'Автозаводская',
  'Пролетарская',
  'Двигатель Революции',
  'Заречная',
  'Ленинская',
  'Чкаловская',
  'Московская',
  'Горьковская',
  'Канавинская',
  'Бурнаковская',
  'Буревестник',
  'Стрелка',
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