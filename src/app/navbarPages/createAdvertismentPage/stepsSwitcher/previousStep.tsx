import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreType } from 'core/store';
import { setActiveStep, setWrongSteps } from 'data/actions';
import { Button, Icon } from 'shared/base';

export const PreviousStep: React.FC = () => {
  const dispatch = useDispatch();
  const newAdvertismentProps = useSelector((state: StoreType) => state.newAdvertisment);
  return (
    <Button
      fontLight
      text="accent"
      onClick={() => {
        dispatch(setActiveStep(newAdvertismentProps.activeStep - 1));
        dispatch(
          setWrongSteps(newAdvertismentProps.wrongSteps.filter((step) => step < newAdvertismentProps.activeStep - 1))
        );
      }}>
      <Icon name="arrow-left" mr="3" /> Предыдущий шаг
    </Button>
  );
};
