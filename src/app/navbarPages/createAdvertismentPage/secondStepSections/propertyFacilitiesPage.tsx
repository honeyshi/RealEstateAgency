import { CheckboxOption, Column, Flexbox, Row, TextField, Textarea } from 'shared/base';
import { ErrorMessage, SectionHeader } from '../base';
import { NextStep, PreviousStep } from '../stepsSwitcher';
import React, { useMemo } from 'react';
import { facilityOptions, livingRules } from './data';
import { setDescription, setFacilities, setLivingRules } from 'data/actions';
import { useDispatch, useSelector } from 'react-redux';

import { RemixIcon } from 'shared/base/remixIcon';
import { StoreType } from 'core/store';
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
            selected={propertyFacilities.facilities.includes(facilityOption.value)}
            onClick={() => {
              const propertyFacilitiesItems = [...propertyFacilities.facilities];
              propertyFacilitiesItems.includes(facilityOption.value)
                ? propertyFacilitiesItems.splice(propertyFacilitiesItems.indexOf(facilityOption.value), 1)
                : propertyFacilitiesItems.push(facilityOption.value);
              dispatch(setFacilities(propertyFacilitiesItems));
            }}>
            <Flexbox alignItems="center">
              <RemixIcon name={facilityOption.iconName} size="lg" />
              <TextField left tag="span" ml="3">
                {facilityOption.text}
              </TextField>
            </Flexbox>
          </CheckboxOption>
        </Column>
      );
    });
    return facilityItems;
  }, [dispatch, propertyFacilities.facilities]);

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
      <SectionHeader>Условия проживания</SectionHeader>
      <Flexbox wrap justifyContent="between">
        {livingRuleComponents}
      </Flexbox>
      <ErrorMessage validated={validated} fieldValue={propertyFacilities.livingRules}>
        Выберите условия проживания
      </ErrorMessage>
      <SectionHeader>Подробности</SectionHeader>
      <TextField mb="4">Вы можете указать дополнительную информацию об объявлении</TextField>
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
