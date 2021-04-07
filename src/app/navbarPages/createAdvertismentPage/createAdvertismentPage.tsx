import { Flexbox, RemixIcon } from 'shared/base';
import React, { useEffect, useMemo } from 'react';
import {
  cleanNewAdvertisment,
  cleanPropertyDetails,
  setActiveStep,
  setPropertyType,
  setValidatedForm,
} from 'data/actions';
import { useDispatch, useSelector } from 'react-redux';

import { LeftMenu } from 'shared/leftMenu';
import { OwnerContactsPage } from './fourthStepSections';
import { PropertyDescriptionPage } from './firstStepSections';
import { PropertyFacilitiesPage } from './secondStepSections';
import { PropertyPhotosPage } from './thirdStepSections';
import { PropertyType } from 'pageParts/propertyType';
import { RightContainerPage } from 'shared/layout/rightContainerPage';
import { StoreType } from 'core/store';
import { propertyTypes } from 'data/values';

export const CreateAdvertismentPage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cleanNewAdvertisment());
  }, [dispatch]);

  const activeStep = useSelector((state: StoreType) => state.newAdvertisment.activeStep);
  const activePropertyType = useSelector((state: StoreType) => state.newAdvertisment.propertyType);

  const propertyTypeItemComponents = useMemo(() => {
    const propertyTypeItems = propertyTypes.map((propertyType) => {
      return (
        <PropertyType
          text={propertyType.text}
          active={propertyType.value === activePropertyType}
          onClick={() => {
            dispatch(setPropertyType(propertyType.value));
            dispatch(setValidatedForm(false));
            dispatch(cleanPropertyDetails());
          }}
          key={propertyType.id}>
          <RemixIcon name={propertyType.iconName} />
        </PropertyType>
      );
    });
    return propertyTypeItems;
  }, [dispatch, activePropertyType]);

  const renderSwitch = (activeStep: number) => {
    switch (activeStep) {
      case 1:
        return <PropertyDescriptionPage />;
      case 2:
        return <PropertyFacilitiesPage />;
      case 3:
        return <PropertyPhotosPage />;
      case 4:
        return <OwnerContactsPage />;
    }
  };

  return (
    <RightContainerPage
      header="Новое объявление"
      leftMenu={
        <>
          <Flexbox justifyContent="between" mx="3" mb="5">
            {propertyTypeItemComponents}
          </Flexbox>
          <LeftMenu
            withDispatch
            activeItemIndex={activeStep}
            leftMenuItems={[
              { iconName: 'draft', header: 'Описание объекта' },
              { iconName: 'passport', header: 'Условия проживания' },
              { iconName: 'image-edit', header: 'Фотографии' },
              { iconName: 'contacts-book', header: 'Контакты' },
            ]}
            setActiveMethod={setActiveStep}
          />
        </>
      }>
      {renderSwitch(activeStep)}
    </RightContainerPage>
  );
};
