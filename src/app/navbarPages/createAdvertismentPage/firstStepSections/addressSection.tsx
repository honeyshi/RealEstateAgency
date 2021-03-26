import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { AddressSuggestions, DaDataAddress, DaDataSuggestion } from 'react-dadata';

import { Column, Flexbox, Row, TextField } from 'shared/base';
import { Select } from 'shared/composite/select';

import 'react-dadata/dist/react-dadata.css';

import config from 'core/configFiles/appSettings.json';

const defaultGeo = {
  lat: 55.75,
  lon: 37.57,
};

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
      <YMaps>
        <Map
          state={{
            center: [
              address == null ? defaultGeo.lat : Number(address?.data.geo_lat),
              address == null ? defaultGeo.lon : Number(address?.data.geo_lon),
            ],
            zoom: 12,
            controls: ['zoomControl'],
          }}
          modules={['control.ZoomControl']}
          style={{ height: '20rem' }}
          className="mt-3 w-100">
          <Placemark geometry={[Number(address?.data.geo_lat), Number(address?.data.geo_lon)]} />
        </Map>
      </YMaps>
    </>
  );
};
