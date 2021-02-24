import React from 'react';
import { useSelector } from 'react-redux';

import { StepSwitcher } from './stepsSwitcher';
import { Container, Section, TextField } from 'shared/base';
import { DefaultPage } from 'shared/layout/defaultPage';
import { StoreType } from 'core/store';
import { PropertyDescriptionPage } from './firstStepSections';
import { PropertyFacilitiesPage } from './secondStepSections';
import { PropertyPhotosPage } from './thirdStepSections';
import { OwnerContactsPage } from './fourthStepSections';

export const CreateAdvertismentPage: React.FC = () => {
  const activeStep = useSelector((state: StoreType) => state.newAdvertisment.activeStep);

  const renderSwitch = (activeStep: number) => {
    switch (activeStep) {
      case 1:
        return <PropertyDescriptionPage />;
      case 2:
        return <PropertyFacilitiesPage />;
      case 3:
        return <PropertyPhotosPage />;
      case 4:
        return <OwnerContactsPage />;
    }
  };

  return (
    <DefaultPage>
      <Section bottom>
        <Container nonFluid small>
          <TextField center tag="h2" mb="5">
            Новое объявление
          </TextField>
          <StepSwitcher />
          {renderSwitch(activeStep)}
        </Container>
      </Section>
    </DefaultPage>
  );
};
