import { Button, Flexbox, RemixIcon, TextField } from 'shared/base';
import { setActiveStep, setWrongSteps } from 'data/actions';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { StoreType } from 'core/store';

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
      <Flexbox>
        <RemixIcon name="arrow-left" />
        <TextField tag="span" ml="3">
          Предыдущий шаг
        </TextField>
      </Flexbox>
    </Button>
  );
};
