import { Button, Column, Container, Flexbox, Image, Section, TextField } from 'shared/base';

import { DefaultPage } from 'shared/layout/defaultPage';
import React from 'react';
import { history } from 'core/history';
import image from 'icons/publishad.svg';

export const SuccessfulCreationPage: React.FC = () => {
  return (
    <DefaultPage>
      <Section bottom>
        <Container nonFluid>
          <Flexbox vertical alignItems="center">
            <Column size={5}>
              <Image src={image} />
            </Column>
            <Flexbox justifyContent="center" alignItems="center" vertical w="75">
              <TextField tag="h2" mb="3">
                Ваше объявление было отправлено на проверку
              </TextField>
              <TextField center mb="3" px="2">
                Это займет некоторое время. После окончания проверки, если объявление соответствует правилам сервиса,
                оно будет опубликовано
              </TextField>
              <Button primary onClick={() => history.push('/')} py="3">
                Вернуться на главную
              </Button>
            </Flexbox>
          </Flexbox>
        </Container>
      </Section>
    </DefaultPage>
  );
};
