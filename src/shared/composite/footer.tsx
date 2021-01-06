import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ExternalLink, Flexbox, Icon, TextField } from 'shared/base';

import './footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light">
      <Container nonFluid pt="5">
        <Flexbox justifyContent="between" pb="4" className="border-bottom">
          <Flexbox vertical>
            <TextField tag="h3">Название</TextField>
            <TextField mb="0">
              Сервис для аренды
              <br /> недвижимости напрямую от
              <br /> собственников
            </TextField>
          </Flexbox>
          <Flexbox vertical>
            <TextField tag="h6" uppercase>
              Информация
            </TextField>
            <Link to="/rates" className="text-black-50">
              Тарифы
            </Link>
            <Link to="/about" className="text-black-50">
              О компании
            </Link>
            <Link to="/reviews" className="text-black-50">
              Отзывы
            </Link>
            <Link to="/faq" className="text-black-50">
              FAQ
            </Link>
          </Flexbox>
          <Flexbox vertical>
            <TextField tag="h6" uppercase>
              Недвижимость
            </TextField>
            <Link to="/advert" className="text-black-50">
              Объявления
            </Link>
            <Link to="/flats-map" className="text-black-50">
              На карте
            </Link>
            <Link to="/search-roommates" className="text-black-50">
              Поиск сожителей
            </Link>
          </Flexbox>
          <Flexbox vertical>
            <TextField tag="h6" uppercase>
              Мы на связи
            </TextField>
            <TextField mb="0">+7 (831) 212-34-56</TextField>
            <TextField mb="0">example@email.com</TextField>
          </Flexbox>
        </Flexbox>
        <Flexbox justifyContent="between" pt="4" pb="4">
          <TextField light small>
            © 2020 All Rights Reserved
          </TextField>
          <ExternalLink to="https://www.instagram.com/" text="black-50">
            <Icon name="instagram" prefix="fab" />
          </ExternalLink>
          <ExternalLink to="https://vk.com/" text="black-50">
            <Icon name="vk" prefix="fab" />
          </ExternalLink>
          <ExternalLink to="https://web.telegram.org/" text="black-50">
            <Icon name="telegram" prefix="fab" />
          </ExternalLink>
          <Link to="/user-agreement" className="font-weight-light small text-dark">
            Пользовательское соглашение
          </Link>
        </Flexbox>
      </Container>
    </footer>
  );
};
