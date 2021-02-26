import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flexbox } from 'shared/base';
import { Step } from './step';
import { setActiveStep, setWrongSteps } from 'data/actions/newAdvertismentActions';
import { StoreType } from 'core/store';

const stepNames = ['Описание объекта', 'Условия проживания', 'Фотографии', 'Контакты'];

export const StepSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const newAdvertismentProps = useSelector((state: StoreType) => state.newAdvertisment);
  const stepItemComponents = useMemo(() => {
    const stepItems = stepNames.map((stepName, index) => {
      return (
        <Step
          stepName={stepName}
          number={index + 1}
          active={index + 1 === newAdvertismentProps.activeStep}
          visited={index < newAdvertismentProps.activeStep - 1}
          invalid={newAdvertismentProps.wrongSteps.includes(index + 1)}
          last={index + 1 === stepNames.length}
          onClick={() => {
            dispatch(setActiveStep(index + 1));
            dispatch(setWrongSteps(newAdvertismentProps.wrongSteps.filter((step) => step < index + 1)));
          }}
          key={stepName}
        />
      );
    });
    return stepItems;
  }, [dispatch, newAdvertismentProps]);
  return (
    <Flexbox justifyContent="center" px="3" py="3">
      {stepItemComponents}
    </Flexbox>
  );
};
