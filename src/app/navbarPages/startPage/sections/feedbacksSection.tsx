import { Container, Flexbox, Section, TextField } from 'shared/base';
import React, { useMemo, useState } from 'react';
import { decrementIndex, incrementIndex } from 'core/paginationHandler';

import { Feedback } from 'pageParts/feedback';
import { LinePagination } from 'shared/pagination';

const feedbacks = [
  {
    name: 'Василий Терёхин',
    text:
      'Спасибо! Нашли квартиру за один вечер, от хозяина и без комиссии, в нужном районе. Не ожидал, что так повезет! Оформлял подписку на 5 дней, но понадобилось буквально несколько часов! Сразу же созвонились с хозяином, посмотрели квартиру и заключили договор. Все честно, объявления и номера телефонов реальные!',
    date: 'Апрель 2021',
  },
  {
    name: 'Инга Тимергалиева',
    text:
      'Все круто! Купили подписку в обед, а вечером уже получилось снять квартиру от хозяина. Все, кому звонили — собственники, без посредников. Выбор есть «на любой вкус и цвет», мы нашли именно то, что хотели и где хотели. Так что всем удачи, сайту огромная благодарность!',
    date: 'Февраль 2021',
  },
  {
    name: 'Наталья Барабанова',
    text:
      'Спасибо огромное вашему сервису за то что вы есть! Получилось снять квартиру не в 1-й день, а где то на 3-й, но потому нам нужен был определенный район и определенные требования, но всё же мы нашли и уже заселились в нашу уютную квартирку и очень счастливы. И самое главное - без посредников и комиссии агентам! Спасибо вам огромное ещё раз! Буду вас советовать всем знакомым.',
    date: 'Ноябрь 2020',
  },
  {
    name: 'Максим Михайлов',
    text:
      'Долго не мог найти квартиру в аренду от собственника. Знакомый посоветовал данный сервис. За короткий срок удалось найти квартиру, подходящую по потребностям.',
    date: 'Май 2020',
  },
  {
    name: 'Константин Алексеев',
    text:
      'Давняя проблема с недвижиомстью была решена! Удалось легко найти квартиру для заселения с животными без посредников.',
    date: 'Апрель 2020',
  },
  {
    name: 'Ангелина Карлова',
    text:
      'Не ожидала, что так быстро найду квартиру без комиссии на этом сайте! Искала с риэлторами подходящий вариант почти два месяца. А на этом сайте нашла квартиру на второй день! Я в шоке, причём в приятном. Идеальная квартира, без посредников! Спасибо вам большое!',
    date: 'Сентябрь 2020',
  },
  {
    name: 'Дмитрий Маслов',
    text:
      'Спасибо вам! Благодаря подписке, в первый же день нашли нужный вариант, через пару дней заселились. Хотя первоначально тратили своё время и на агентов и агенств (готовы были заплатить), но результата ни какого. А тут так просто и без комиссии! Теперь всем советую ваш сайт, а не знакомого агента!',
    date: 'Август 2020',
  },
];

export const FeedbacksSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const amountItems = 7;
  const feedbackItemComponents = useMemo(() => {
    const feedbackItems = feedbacks.map((feedback, index) => {
      return (
        <Feedback
          name={feedback.name}
          date={feedback.date}
          feedbackText={feedback.text}
          display={index === activeIndex}
          key={`feedback-item-${index}`}
        />
      );
    });
    return feedbackItems;
  }, [activeIndex]);
  return (
    <Section bottom>
      <Container nonFluid>
        <TextField center tag="h1" mb="5">
          Почитайте отзывы наших клиентов
        </TextField>
        <Flexbox justifyContent="center" mb="5">
          {feedbackItemComponents}
        </Flexbox>
        <Flexbox justifyContent="center">
          <LinePagination
            amountItems={amountItems}
            onRightClick={() => setActiveIndex(incrementIndex(activeIndex, amountItems))}
            onLeftClick={() => setActiveIndex(decrementIndex(activeIndex, amountItems))}
          />
        </Flexbox>
      </Container>
    </Section>
  );
};
