export const buildPropertyTypeString = (propertyType: string) => {
  switch (propertyType) {
    case '0':
      return 'Дом';
    case '1':
      return 'Квартира';
    case '2':
      return 'Комната';
    default:
      return '';
  }
};

export const buildPaymentConditionString = (paymentCondition: string) => {
  switch (paymentCondition) {
    case '0':
      return 'Только оплата аренды';
    case '1':
      return 'Оплата счетчиков';
    case '2':
      return 'Оплата коммунальных услуг';
    default:
      return '';
  }
};

const furnitureIdToValue = (id: number) => {
  switch (id) {
    case 0:
      return 'Кондиционер';
    case 1:
      return 'Холодильник';
    case 2:
      return 'Телевизор';
    case 3:
      return 'Микроволновка';
    case 4:
      return 'Посудомоечная машина';
    case 5:
      return 'Стиральная машина';
    case 6:
      return 'Интернет';
    case 7:
      return 'Без мебели';
  }
};

export const buildFurnitureString = (furniture: string) => {
  const furnitureList = JSON.parse(furniture) as Array<number>;
  return furnitureList.map((id) => furnitureIdToValue(id)).join(', ');
};

export const buildDepositString = (deposit: number) => {
  return deposit != null ? `${deposit} ₽` : 'Без залога';
};

export const buildAnimalsString = (withAnimals?: number) => {
  return withAnimals === 1 ? 'Разрешено' : 'Запрещено';
};

export const buildKidsString = (withKids?: number) => {
  return withKids === 1 ? 'Разрешено' : 'Запрещено';
};

export const buildRenovationString = (renovationType: number) => {
  switch (renovationType) {
    case 0:
      return 'Требуется';
    case 1:
      return 'Косметический';
    case 2:
      return 'Евро';
    case 3:
      return 'Дизайнерский';
    default:
      return '';
  }
};
