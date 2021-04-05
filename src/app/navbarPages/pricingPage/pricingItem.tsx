import './pricingItemStyle.scss';

import { Block, Column, ExternalLink, Flexbox, RemixIcon, TextField } from 'shared/base';

import React from 'react';
import classNames from 'classnames';

interface IPricingItemProps {
  type: string;
  description: string[];
  link: string;
  iconName: string;
  validity: string;
  price: string;
  additionalPlan?: string;
  primary?: boolean;
}

export const PricingItem: React.FC<IPricingItemProps> = ({
  type,
  description,
  link,
  iconName,
  validity,
  price,
  additionalPlan,
  primary,
}) => {
  return (
    <Column
      pt="5"
      pl="4"
      className={classNames({ primary: primary }, 'pricing-item-container rounded-50 align-items-center')}>
      {primary && (
        <Flexbox vertical alignItems="center">
          <TextField uppercase tag="span" p="2" classes="badge">
            Рекомендуем
          </TextField>
        </Flexbox>
      )}
      <Flexbox vertical alignItems="center" className="pricing-item">
        <Flexbox vertical alignItems="center" w="100" className="border-bottom">
          <TextField uppercase tag="h4" mb="5" classes="pricing-header">
            {type}
          </TextField>
          <Block rounded="circle" mb="4" className="text-center pricing-icon-container">
            <RemixIcon name={iconName} styleType="fill" className="pricing-icon" />
          </Block>
          <Flexbox mb="4">
            <TextField tag="h5">{price} ₽ </TextField>
            <TextField tag="span"> / {validity} дней</TextField>
          </Flexbox>
        </Flexbox>
        <ul className="pricing-description-container mt-4 pb-5 mb-5 w-100">
          {description.map((item) => (
            <li className="pricing-description-item-container mb-1" key={item}>
              <Flexbox>
                <RemixIcon name="check" className="pricing-desciption-icon" mr="2" />
                <TextField tag="span">{item}</TextField>
              </Flexbox>
            </li>
          ))}
          {additionalPlan != null && (
            <li className="pricing-description-item-container mb-1">
              <Flexbox>
                <RemixIcon name="add" className="pricing-desciption-icon" mr="2" />
                <TextField tag="span">{additionalPlan} план</TextField>
              </Flexbox>
            </li>
          )}
        </ul>
        <ExternalLink
          to={link}
          py="2"
          px="5"
          mb="4"
          className={classNames({ primary: primary }, 'pricing-choose-button')}>
          Выбрать
        </ExternalLink>
      </Flexbox>
    </Column>
  );
};
