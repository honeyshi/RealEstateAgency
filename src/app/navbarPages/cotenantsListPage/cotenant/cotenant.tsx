import './cotenant.scss';

import { Flexbox, Image, RemixIcon, Td, TextField, Tr } from 'shared/base';

import { Link } from 'react-router-dom';
import React from 'react';

interface ICotenantProps {
  id: string;
  image: string;
  sex: string;
  district: string;
  age: string;
}

export const Cotenant: React.FC<ICotenantProps> = ({ id, image, sex, district, age }) => {
  return (
    <Tr className="cotenant-container">
      <Td>
        <Image
          className="cotenant-image rounded-circle"
          src="https://images.unsplash.com/photo-1618678900888-da259539f5ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
        />
      </Td>
      <Td>{sex}</Td>
      <Td>{district}</Td>
      <Td>{age}</Td>
      <Td>
        <Link to={`cotenant-description-${id}`} className="text-accent">
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
