import classNames from 'classnames';
import React from 'react';
import { Block, Flexbox, TextField } from 'shared/base';

import './step.scss';

interface IStepProps {
  active?: boolean;
  invalid?: boolean;
  number: number;
  visited?: boolean;
  last?: boolean;
  stepName: string;
  onClick: (e: React.MouseEvent) => void;
}

export const Step: React.FC<IStepProps> = ({ active, invalid, number, visited, last, stepName, onClick }) => {
  const classes = classNames({ active: active }, { invalid: invalid }, { visited: visited });
  return (
    <Flexbox onClick={onClick}>
      <Flexbox vertical alignItems="center" className={classNames('step-container', classes)}>
        <Block rounded="circle" className="step-circle">
          <TextField tag="span" classes="step-number">
            {number}
          </TextField>
        </Block>
        <TextField center tag="span" classes="step-name" pt="3">
          {stepName}
        </TextField>
      </Flexbox>
      {!last && <Flexbox className={classNames('step-line', classes)} my="4" />}
    </Flexbox>
  );
};
