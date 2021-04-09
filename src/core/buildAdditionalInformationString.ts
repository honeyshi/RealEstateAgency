export const buildAdditionalInformationString = (
  deposit: string,
  paymentCondition: string,
  withAnimals: number,
  withKids: number
) => {
  const depositString = deposit != null ? `Залог ${deposit} ₽.` : 'Без залога.';
  const paymentString = () => {
    switch (paymentCondition) {
      case '0':
        return 'Только оплата аренды.';
      case '1':
        return 'Оплата счетчиков.';
      case '2':
        return 'Оплата коммунальных услуг.';
      default:
        return '';
    }
  };
  const animalsString = withAnimals === 1 ? 'Разрешено заселение с животными.' : 'Заселение с животными запрещено.';
  const kidsString = withKids === 1 ? 'Разрешено заселение с детьми.' : 'Заселение с детьми запрещено.';
  return `${depositString} ${paymentString()} ${animalsString} ${kidsString}`;
};
