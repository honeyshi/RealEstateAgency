import { Container, Section, TextField } from 'shared/base';

import { FeedbackSwitch } from 'pageParts/feedback';
import React from 'react';

export const FeedbacksSection: React.FC = () => {
  return (
    <Section bottom>
      <Container nonFluid>
        <TextField center tag="h1" mb="5">
          Почитайте отзывы наших клиентов
        </TextField>
        <FeedbackSwitch />
      </Container>
    </Section>
  );
};
