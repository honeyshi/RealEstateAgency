import './subscription.scss';

import { Button, Flexbox, RemixIcon, TextField } from 'shared/base';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { districts, facilityOptions, propertyTypes } from 'data/values';

import { DateTime } from 'luxon';
import { PropertyType } from 'pageParts/propertyType';
import { SubsciptionGetModel } from 'core/subscription/subscription';
import { SubscriptionMenu } from './subscriptionMenu';

const Label: React.FC<{ label: string }> = ({ label, children }) => {
  return (
    <Flexbox>
      <TextField bold>{label}:&nbsp;</TextField>
      <TextField>{children}</TextField>
    </Flexbox>
  );
};

export const SubscriptionItem: React.FC<{ props: SubsciptionGetModel }> = ({ props }) => {
  const propertyTypeCast = String(props.type);
  const districtsArray = JSON.parse(props.district) as Array<number>;
  const furnitureArray = JSON.parse(props.furniture) as Array<string>;
  const roomsArray = JSON.parse(props.rooms) as Array<string>;

  const [showMenu, setShowMenu] = useState(false);

  const subscriptionMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!subscriptionMenuRef.current || subscriptionMenuRef.current.contains(e.target as Node)) return;
      setShowMenu(false);
    },
    [subscriptionMenuRef]
  );

  useEffect(() => {
    if (showMenu) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu, handleClickOutside]);

  return (
    <div className="d-flex flex-column py-4 px-5 mb-5 subscription-container" ref={subscriptionMenuRef}>
      <Flexbox justifyContent="between" alignItems="center" mb="3">
        <Flexbox w="50">
          <PropertyType
            text={propertyTypes.find((propertyType) => propertyType.value === propertyTypeCast)?.text ?? ''}
            active={true}
            onClick={() => void 0}
            key={propertyTypes.find((propertyType) => propertyType.value === propertyTypeCast)?.id ?? ''}>
            <RemixIcon
              name={propertyTypes.find((propertyType) => propertyType.value === propertyTypeCast)?.iconName ?? ''}
            />
          </PropertyType>
        </Flexbox>
        <Button className="shadow menu" px="2" pt="2" pb="0" onClick={() => setShowMenu(!showMenu)}>
          <RemixIcon name="menu" size="sm" />
        </Button>
      </Flexbox>
      <Flexbox justifyContent="end">
        <SubscriptionMenu show={showMenu} subscriptionId={props.id} />
      </Flexbox>
      <Label label="Район">
        {districtsArray.length !== 0
          ? districtsArray.map((districtId) => districts[districtId]).join(', ')
          : 'Не указано'}
      </Label>
      <Label label="Удобства">
        {furnitureArray.length !== 0
          ? furnitureArray
              .map((furniture) => facilityOptions.find((facility) => facility.value === furniture)?.text)
              .join(', ')
          : 'Не указано'}
      </Label>
      <Label label="Цена">{`от ${props.min_price} до ${props.max_price} ₽/месяц`}</Label>
      <Label label="Площадь">{`от ${props.min_area} до ${props.max_area} м²`}</Label>
      <Label label="Количество комнат">
        {roomsArray.length !== 0
          ? roomsArray.map((room) => (room === '0' ? 'Студия' : room === '4' ? '4+' : room)).join(', ')
          : 'Не указано'}
      </Label>
      <Label label="Только оплата аренды">{props.only_rent === 1 ? 'Да' : 'Нет'}</Label>
      <Label label="Заселение с животными">{props.with_animals === 1 ? 'Да' : 'Нет'}</Label>
      <Label label="Заселение с детьми">{props.with_kids === 1 ? 'Да' : 'Нет'}</Label>
      <Label label="Без залога">{props.without_deposit === 1 ? 'Да' : 'Нет'}</Label>
      <Label label="Дата создания">
        {DateTime.fromSQL(props.created_at).setLocale('ru').toLocaleString(DateTime.DATE_FULL)}
      </Label>
    </div>
  );
};
