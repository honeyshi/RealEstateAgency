import { Container, Flexbox, Row, Section, TextField } from 'shared/base';
import React, { useEffect, useState } from 'react';

import { IAdvertisment } from 'core/getAdvertisment/advertismentModel';
import { Link } from 'react-router-dom';
import { Suggestion } from 'pageParts/advertisment';
import { performGetAdvertismentRequest } from 'core/getAdvertisment/getAdvertisment';

export const SuggestionsSection: React.FC = () => {
  const [advertisments, setAdvertisments] = useState<IAdvertisment[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await performGetAdvertismentRequest(1, '');
        setAdvertisments(result.apartments);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <Section>
      <Container nonFluid>
        <TextField center tag="h1" mb="5">
          Последние предложения
        </TextField>
        <TextField center>Мы предлагаем обширный выбор недвижимости от собственников.</TextField>
        <Row>
          {advertisments?.slice(0, 3).map((advertisment) => {
            return (
              <Suggestion
                header={advertisment.header}
                image={advertisment.images[0].url}
                address={`Нижний Новгород, р-н ${advertisment.district}, ${advertisment.address}`}
                price={`${advertisment.price} ₽/месяц`}
                link={`/advertisment-description/${advertisment.id}`}
                key={`suggestion-${advertisment.id}`}
              />
            );
          })}
        </Row>
        <Row>
          {advertisments?.slice(3, 6).map((advertisment) => {
            return (
              <Suggestion
                header={advertisment.header}
                image={advertisment.images[0].url}
                address={`Нижний Новгород, р-н ${advertisment.district}, ${advertisment.address}`}
                price={`${advertisment.price} ₽/месяц`}
                link={`/advertisment-description/${advertisment.id}`}
                key={`suggestion-${advertisment.id}`}
              />
            );
          })}
        </Row>
        <Flexbox justifyContent="center" pb="5" pt="0" breakpoint="md" space="pt" className="pt-5">
          <Link to="/flats" className="rounded-link text-body">
            Показать ещё
          </Link>
        </Flexbox>
      </Container>
    </Section>
  );
};
