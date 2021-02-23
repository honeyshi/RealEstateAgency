import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreType } from 'core/store';
import { setActiveStep } from 'data/actions';
import { Button, Icon } from 'shared/base';

export const NextStep: React.FC = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector((state: StoreType) => state.newAdvertisment.activeStep);
  return (
    <Button fontLight text="accent" onClick={() => dispatch(setActiveStep(activeStep + 1))}>
      Следующий шаг <Icon name="arrow-right" ml="3" />
    </Button>
  );
};
