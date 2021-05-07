import './footer.scss';

import { Container, ExternalLink, Flexbox, Icon, RemixIcon, TextField } from 'shared/base';

import { Link } from 'react-router-dom';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer shadow">
      <Container nonFluid pt="5">
        <Flexbox justifyContent="between" directionSize="md" pb="4" className="border-bottom flex-column">
          <Flexbox vertical>
            <Link to="/" className="navbar-brand text-accent">
              <Flexbox>
                <RemixIcon name="home-heart" />
                <TextField tag="span" ml="2">
                  dwelly.
                </TextField>
              </Flexbox>
            </Link>
            <TextField mb="0" mt="3">
              Сервис для аренды
              <br /> недвижимости напрямую от
              <br /> собственников
            </TextField>
          </Flexbox>
          <Flexbox vertical>
            <TextField tag="h6" uppercase>
              Информация
            </TextField>
            <Link to="/pricing" className="footer-link">
              Тарифы
            </Link>
            <Link to="/about" className="footer-link">
              О компании
            </Link>
            <Link to="/reviews" className="footer-link">
              Отзывы
            </Link>
            <Link to="/faq" className="footer-link">
              FAQ
            </Link>
          </Flexbox>
          <Flexbox vertical>
            <TextField tag="h6" uppercase>
              Недвижимость
            </TextField>
            <Link to="/flats" className="footer-link">
              Объявления
            </Link>
            <Link to="/flats-map" className="footer-link">
              На карте
            </Link>
            <Link to="/search-roommates" className="footer-link">
              Поиск соарендаторов
            </Link>
          </Flexbox>
          <Flexbox vertical>
            <TextField tag="h6" uppercase>
              Мы на связи
            </TextField>
            <TextField mb="0">+7 (831) 212-34-56</TextField>
            <TextField mb="0">support@dwelly.com</TextField>
            <Link to="/contact" className="footer-link">
              Напишите нам
            </Link>
          </Flexbox>
        </Flexbox>
        <Flexbox justifyContent="between" directionSize="md" py="4" className="flex-column">
          <TextField light small center>
            © 2020-2021 All Rights Reserved
          </TextField>
          <div className="social-media">
            <ExternalLink to="https://www.instagram.com/" className="footer-link">
              <RemixIcon name="instagram" />
            </ExternalLink>
            <ExternalLink to="https://vk.com/" className="footer-link">
              <Icon name="vk" prefix="fab" />
            </ExternalLink>
            <ExternalLink to="https://web.telegram.org/" className="footer-link">
              <RemixIcon name="telegram" />
            </ExternalLink>
          </div>
          <Link to="/user-agreement" className="font-weight-light small text-dark text-center">
            Пользовательское соглашение
          </Link>
        </Flexbox>
      </Container>
    </footer>
  );
};
