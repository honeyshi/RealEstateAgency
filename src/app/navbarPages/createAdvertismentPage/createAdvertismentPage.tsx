import { StepSwitcher } from './stepsSwitcher';
import React from 'react';
import { Container, Section, TextField } from 'shared/base';
import { DefaultPage } from 'shared/layout/defaultPage';
import { PropertyDescriptionPage } from './firstStepSections';

export const CreateAdvertismentPage: React.FC = () => {
  return (
    <DefaultPage>
      <Section bottom>
        <Container nonFluid small>
          <TextField center tag="h2" mb="5">
            Новое объявление
          </TextField>
          <StepSwitcher />
          <PropertyDescriptionPage />
        </Container>
      </Section>
    </DefaultPage>
  );
};
