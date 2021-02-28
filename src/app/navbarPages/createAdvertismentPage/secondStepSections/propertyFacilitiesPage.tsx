import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StoreType } from 'core/store';
import { CheckboxOption, Column, Flexbox, Icon, Row, Textarea, TextField } from 'shared/base';
import { ImportedIcon } from 'shared/base/icon';
import { DetailsInput, ErrorMessage, SectionHeader } from '../base';
import { setDescription, setFacilities, setFurnitureType, setHeader, setLivingRules } from 'data/actions';
import { facilityOptions, furnitureTypes, livingRules } from './data';
import { PreviousStep, NextStep } from '../stepsSwitcher';
import { checkAdvertismentField } from 'core/checkInvalidNewAdvertismentField';

export const PropertyFacilitiesPage: React.FC = () => {
  const dispatch = useDispatch();
  const propertyFacilities = useSelector((state: StoreType) => state.propertyFacilities);
  const validated = useSelector((state: StoreType) => state.newAdvertisment.validated);

  const facilityOptionsComponents = useMemo(() => {
    const facilityItems = facilityOptions.map((facilityOption) => {
      return (
        <Column size={3} key={facilityOption.id} mb="4">
          <CheckboxOption
            big
            selected={propertyFacilities.facilities.includes(facilityOption.text)}
            onClick={() => {
              const propertyFacilitiesItems = [...propertyFacilities.facilities];
              propertyFacilitiesItems.includes(facilityOption.text)
                ? propertyFacilitiesItems.splice(propertyFacilitiesItems.indexOf(facilityOption.text), 1)
                : propertyFacilitiesItems.push(facilityOption.text);
              dispatch(setFacilities(propertyFacilitiesItems));
            }}>
            <Flexbox alignItems="center">
              <Icon name={facilityOption.iconName as ImportedIcon} style={{ height: '2rem', width: '2rem' }} mr="3" />
              <TextField left tag="span">
                {facilityOption.text}
              </TextField>
            </Flexbox>
          </CheckboxOption>
        </Column>
      );
    });
    return facilityItems;
  }, [dispatch, propertyFacilities.facilities]);

  const furnitureTypeComponents = useMemo(() => {
    const furnitureItems = furnitureTypes.map((furnitureType) => {
      return (
        <CheckboxOption
          selected={propertyFacilities.furnitureType === furnitureType.text}
          onClick={() => dispatch(setFurnitureType(furnitureType.text))}
          key={furnitureType.id}
          mr="4"
          mb="4">
          {furnitureType.text}
        </CheckboxOption>
      );
    });
    return furnitureItems;
  }, [dispatch, propertyFacilities.furnitureType]);

  const livingRuleComponents = useMemo(() => {
    const livingRuleItems = livingRules.map((livingRule) => {
      return (
        <CheckboxOption
          selected={propertyFacilities.livingRules.includes(livingRule.text)}
          notSelected={propertyFacilities.livingRules.includes(livingRule.opposite)}
          onClick={() => {
            const rulesItems = [...propertyFacilities.livingRules];
            if (rulesItems.includes(livingRule.text)) rulesItems.splice(rulesItems.indexOf(livingRule.text), 1);
            else {
              rulesItems.push(livingRule.text);
              rulesItems.indexOf(livingRule.opposite) > -1 &&
                rulesItems.splice(rulesItems.indexOf(livingRule.opposite), 1);
            }
            dispatch(setLivingRules(rulesItems));
          }}
          key={livingRule.id}
          mb="4">
          {livingRule.text}
        </CheckboxOption>
      );
    });
    return livingRuleItems;
  }, [dispatch, propertyFacilities.livingRules]);

  return (
    <>
      <SectionHeader>Удобства</SectionHeader>
      <Row alignItems="center">{facilityOptionsComponents}</Row>
      <ErrorMessage validated={validated} fieldValue={propertyFacilities.facilities}>
        Выберите удобства
      </ErrorMessage>
      <SectionHeader>Меблировка</SectionHeader>
      <Flexbox>{furnitureTypeComponents}</Flexbox>
      <ErrorMessage validated={validated} fieldValue={propertyFacilities.furnitureType}>
        Выберите меблировку
      </ErrorMessage>
      <SectionHeader>Условия проживания</SectionHeader>
      <Flexbox wrap justifyContent="between">
        {livingRuleComponents}
      </Flexbox>
      <ErrorMessage validated={validated} fieldValue={propertyFacilities.livingRules}>
        Выберите условия проживания
      </ErrorMessage>
      <SectionHeader>Подробности</SectionHeader>
      <TextField mb="4">Вы можете указать дополнительную информацию об объявлении</TextField>
      <DetailsInput
        placeholder="Введите заголовок объявления"
        invalid={checkAdvertismentField(validated, propertyFacilities.header)}
        value={propertyFacilities.header}
        setMethod={setHeader}
        mb="4"
      />
      <Textarea
        placeholder="Введите описание"
        invalid={checkAdvertismentField(validated, propertyFacilities.description)}
        value={propertyFacilities.description}
        onChange={(desciption) => dispatch(setDescription(desciption))}
        onEnterPress={() => void 0}
        mb="4"
      />
      <Flexbox justifyContent="between">
        <PreviousStep />
        <NextStep />
      </Flexbox>
    </>
  );
};
