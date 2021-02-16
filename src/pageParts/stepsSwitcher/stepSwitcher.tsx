import React, { useMemo, useState } from 'react';
import { Flexbox } from 'shared/base';
import { Step } from './step';

const stepNames = ['Описание объекта', 'Условия проживания', 'Фотографии', 'Контакты'];

export const StepSwitcher: React.FC = () => {
  const [active, setActive] = useState(1);
  const stepItemComponents = useMemo(() => {
    const stepItems = stepNames.map((stepName, index) => {
      return (
        <Step
          stepName={stepName}
          number={index + 1}
          active={index + 1 === active}
          visited={index < active - 1}
          last={index + 1 === stepNames.length}
          onClick={() => setActive(index + 1)}
          key={stepName}
        />
      );
    });
    return stepItems;
  }, [active]);
  return (
    <Flexbox justifyContent="center" px="3">
      {stepItemComponents}
    </Flexbox>
  );
};
