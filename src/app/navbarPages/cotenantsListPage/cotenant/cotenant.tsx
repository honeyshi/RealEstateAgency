import './cotenant.scss';

import { Flexbox, Image, RemixIcon, Td, TextField, Tr } from 'shared/base';

import { Link } from 'react-router-dom';
import React from 'react';

interface ICotenantProps {
  id: string;
  image: string;
  sex: string;
  desiredMaxAge: string;
  desiredMinAge: string;
  desiredSex: string;
  district: string;
  age: string;
}

export const Cotenant: React.FC<ICotenantProps> = ({
  id,
  image,
  sex,
  desiredMinAge,
  desiredMaxAge,
  desiredSex,
  district,
  age,
}) => {
  return (
    <Tr className="cotenant-container">
      <Td>
        <Image className="cotenant-image rounded-circle" src={image} />
      </Td>
      <Td>{sex}</Td>
      <Td>{age}</Td>
      <Td>{district}</Td>
      <Td>{desiredSex}</Td>
      <Td>{`от ${desiredMinAge} до ${desiredMaxAge}`}</Td>
      <Td>
        <Link to={`/cotenant-description/${id}`} className="text-accent">
          <Flexbox>
            <TextField tag="span" mr="3">
              Подробнее
            </TextField>
            <RemixIcon name="arrow-right" />
          </Flexbox>
        </Link>
      </Td>
    </Tr>
  );
};
