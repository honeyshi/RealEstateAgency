import { Button, Flexbox, RemixIcon, TextField } from 'shared/base';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { StoreType } from 'core/store';
import { setActiveStep } from 'data/actions';

export const NextStep: React.FC = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector((state: StoreType) => state.newAdvertisment.activeStep);
  return (
    <Button fontLight text="accent" onClick={() => dispatch(setActiveStep(activeStep + 1))}>
      <Flexbox>
        <TextField tag="span" mr="3">
          Следующий шаг
        </TextField>
        <RemixIcon name="arrow-right" />
      </Flexbox>
    </Button>
  );
};
