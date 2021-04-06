import { CommonDetails, FlatDetails, HouseDetails } from './detailsSection';

import { AddressSection } from './addressSection';
import { Flexbox } from 'shared/base';
import { NextStep } from '../stepsSwitcher';
import React from 'react';
import { SectionHeader } from '../base';
import { StoreType } from 'core/store';
import { useSelector } from 'react-redux';

export const PropertyDescriptionPage: React.FC = () => {
  const activePropertyType = useSelector((state: StoreType) => state.newAdvertisment.propertyType);

  const renderSwitch = (propertyType: string) => {
    switch (propertyType) {
      case '0':
        return <HouseDetails />;
      case '1':
        return <FlatDetails />;
      case '2':
        return <CommonDetails />;
    }
  };
  return (
    <>
      <AddressSection />
      <SectionHeader>Информация об объекте</SectionHeader>
      {renderSwitch(activePropertyType)}
      <Flexbox justifyContent="end" mb="5">
        <NextStep />
      </Flexbox>
    </>
  );
};
