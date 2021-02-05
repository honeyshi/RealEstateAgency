import React, { useMemo } from 'react';
import { Container, Flexbox, Row, Section, TextField } from 'shared/base';
import { Suggestion } from 'pageParts/advertisment';
import { Link } from 'react-router-dom';

export const SuggestionsSection: React.FC = () => {
  const suggestionItemComponents = useMemo(() => {
    const suggestionItems = [];
    for (var i = 0; i < 3; i++)
      suggestionItems.push(
        <Suggestion
          header="3-комнатная квартира 88 м²"
          address="ул. Большая Покровская д.8 эт. 4/7"
          price="15 000 Р/месяц"
          link="/suggestion"
          key={`suggestion-${i}`}
        />
      );
    return suggestionItems;
  }, []);
  return (
    <Section>
      <Container nonFluid>
        <TextField center tag="h1" mb="5">
          Последние предложения
        </TextField>
        <TextField center>Мы предлагаем обширный выбор недвижимости от собственников.</TextField>
        <Row>{suggestionItemComponents}</Row>
        <Row>{suggestionItemComponents}</Row>
        <Flexbox justifyContent="center" pb="5" pt="0" breakpoint="md" space="pt" className="pt-5">
          <Link to="advert" className="rounded-link text-body">
            Показать ещё
          </Link>
        </Flexbox>
      </Container>
    </Section>
  );
};
