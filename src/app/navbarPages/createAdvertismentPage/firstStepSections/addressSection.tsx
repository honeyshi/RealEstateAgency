import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Column, Flexbox, Input, Row, TextField } from 'shared/base';
import { Select } from 'shared/composite/select';

export const AddressSection: React.FC = () => {
  const [address, setAddress] = useState('');
  return (
    <>
      <Flexbox alignItems="baseline" mt="5" mb="4">
        <TextField bold tag="h5">
          Адрес
        </TextField>
        <Link to="#" className="text-accent ml-3">
          Нижний Новгород
        </Link>
      </Flexbox>
      <Row>
        <Column size={3}>
          <Select
            selectOptions={[
              'Автозаводский',
              'Ленинский',
              'Сормовский',
              'Канавинский',
              'Московский',
              'Нижегородский',
              'Приокский',
              'Советский',
              'поселок Новинки',
            ]}
            selectText="Автозаводский"
            onSelectValue={() => void 0}
          />
        </Column>
      </Row>
      <Input
        borderBottom
        light
        form
        placeholder="Введите адрес"
        value={address}
        onChange={(address) => setAddress(address)}
        onEnterPress={() => void 0}
        p="0"
      />
    </>
  );
};
