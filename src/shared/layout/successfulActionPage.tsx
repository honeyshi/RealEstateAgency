import { Button, Column, Container, Flexbox, Image, Section, TextField } from 'shared/base';

import { DefaultPage } from 'shared/layout/defaultPage';
import React from 'react';
import { history } from 'core/history';

interface ISuccessfulActionPageProps {
  auth?: boolean;
  description: string;
  header: string;
  image: string;
}

export const SuccessfulActionPage: React.FC<ISuccessfulActionPageProps> = ({ auth, description, header, image }) => {
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
                {header}
              </TextField>
              <TextField center mb="3" px="2">
                {description}
              </TextField>
              <Button primary onClick={() => history.push(auth ? '/login' : '/')} py="3">
                {auth ? 'Перейти к авторизации' : 'Вернуться на главную'}
              </Button>
            </Flexbox>
          </Flexbox>
        </Container>
      </Section>
    </DefaultPage>
  );
};
