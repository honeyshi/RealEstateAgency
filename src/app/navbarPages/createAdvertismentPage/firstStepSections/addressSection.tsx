import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AddressSuggestions, DaDataAddress, DaDataSuggestion } from 'react-dadata';
import { Column, Flexbox, Row, TextField } from 'shared/base';
import { Select } from 'shared/composite/select';
import { AddressSuggestionConfig } from 'core/configFiles/appSettings';

import 'react-dadata/dist/react-dadata.css';

const config: AddressSuggestionConfig = require('core/configFiles/appSettings.json');

export const AddressSection: React.FC = () => {
  const [address, setAddress] = useState<DaDataSuggestion<DaDataAddress>>();
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
      <AddressSuggestions
        token={config.addressSuggestToken}
        containerClassName="pt-3 position-relative"
        currentSuggestionClassName="font-weight-light text-accent"
        value={address}
        defaultQuery="Нижний Новгород"
        onChange={(address) => setAddress(address)}
      />
    </>
  );
};
