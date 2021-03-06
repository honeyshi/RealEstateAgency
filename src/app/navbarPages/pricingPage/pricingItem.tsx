import './pricingItemStyle.scss';

import { Badge, Block, Button, Column, ExternalLink, Flexbox, RemixIcon, TextField } from 'shared/base';

import React from 'react';
import classNames from 'classnames';
import { history } from 'core/history';

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
      {primary && <Badge>Рекомендуем</Badge>}
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
            <TextField tag="span"> / {validity}</TextField>
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
        {link === 'link for register page' || link === 'email not verified' ? (
          <Button
            py="2"
            px="5"
            mb="4"
            className={classNames({ primary: primary }, 'pricing-choose-button')}
            onClick={() => history.push(link === 'link for register page' ? `/unauthorized` : '/access-denied')}>
            Выбрать
          </Button>
        ) : (
          <ExternalLink
            to={link}
            py="2"
            px="5"
            mb="4"
            className={classNames({ primary: primary }, 'pricing-choose-button')}>
            Выбрать
          </ExternalLink>
        )}
      </Flexbox>
    </Column>
  );
};
