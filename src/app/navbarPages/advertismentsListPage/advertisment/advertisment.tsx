import React from 'react';
import { Link } from 'react-router-dom';
import { Column, Flexbox, RemixIcon, TextField } from 'shared/base';

interface IAdvertismentProps {
  header: string;
  address: string;
  metro: string;
  additionalInformation: string;
  payment: string;
  link: string;
}

export const Advertisment: React.FC<IAdvertismentProps> = ({
  header,
  address,
  metro,
  additionalInformation,
  payment,
  link,
}) => {
  return (
    <Flexbox rounded="50" className="shadow" mb="5">
      <Column size={4}></Column>
      <Column flex vertical size={8} p="4" pr="5">
        <TextField bold tag="h5" mb="4">
          {header}
        </TextField>
        <TextField tag="span" mb="2">
          {address}
        </TextField>
        <Flexbox alignItems="center" mb="2">
          <RemixIcon size="xl" name="train" className="text-danger" mr="3" />
          <TextField tag="span">{metro}</TextField>
        </Flexbox>
        <TextField tag="span" mb="4">
          {additionalInformation}
        </TextField>
        <Flexbox justifyContent="between">
          <TextField bold tag="h5">
            {`${payment} ₽/месяц`}
          </TextField>
          <Link to={link} className="text-accent stretched-link">
            <Flexbox>
              <TextField tag="span" mr="3">
                Подробнее
              </TextField>
              <RemixIcon name="arrow-right" />
            </Flexbox>
          </Link>
        </Flexbox>
      </Column>
    </Flexbox>
  );
};
