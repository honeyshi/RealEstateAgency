import 'react-dadata/dist/react-dadata.css';

import { Column, Flexbox, Row, TextField } from 'shared/base';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { districts, metroValues } from 'data/values';
import {
  setCreateAdAddress,
  setCreateAdDistrict,
  setCreateAdGeo,
  setCreateAdHouseNumber,
  setCreateAdMetro,
  setCreateAdStreet,
} from 'data/actions';
import { useDispatch, useSelector } from 'react-redux';

import { AddressSuggestions } from 'react-dadata';
import { ErrorMessage } from '../base';
import { Link } from 'react-router-dom';
import React from 'react';
import { Select } from 'shared/composite/select';
import { StoreType } from 'core/store';
import config from 'core/configFiles/appSettings.json';

const defaultGeo = {
  lat: 55.75,
  lon: 37.57,
};

export const AddressSection: React.FC = () => {
  const dispatch = useDispatch();

  const houseDetails = useSelector((state: StoreType) => state.propertyDetails);
  const validated = useSelector((state: StoreType) => state.newAdvertisment.validated);

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
            selectOptions={districts}
            selectText="Район"
            onSelectValue={(district) => dispatch(setCreateAdDistrict(districts.indexOf(district)))}
          />
        </Column>
        <Column size={3}>
          <Select
            selectOptions={metroValues}
            selectText="Метро"
            onSelectValue={(metro) => dispatch(setCreateAdMetro(metroValues.indexOf(metro)))}
          />
        </Column>
      </Row>
      <ErrorMessage
        validated={validated}
        fieldValue={houseDetails.district === -1 ? '' : String(houseDetails.district)}>
        Выберите район
      </ErrorMessage>
      <AddressSuggestions
        token={config.addressSuggestToken}
        containerClassName="pt-3 position-relative"
        currentSuggestionClassName="font-weight-light"
        value={houseDetails.address}
        defaultQuery={houseDetails.address == null ? 'Нижний Новгород' : houseDetails.address.value}
        onChange={(selectedAddress) => {
          dispatch(setCreateAdAddress(selectedAddress));
          dispatch(setCreateAdStreet(String(selectedAddress?.data.street_with_type)));
          dispatch(setCreateAdHouseNumber(String(selectedAddress?.data.house)));
          dispatch(setCreateAdGeo(`${selectedAddress?.data.geo_lat}, ${selectedAddress?.data.geo_lon}`));
        }}
      />
      <ErrorMessage validated={validated} fieldValue={houseDetails.geoLocation}>
        Введите адрес объекта
      </ErrorMessage>
      <YMaps>
        <Map
          state={{
            center: [
              houseDetails.address == null ? defaultGeo.lat : Number(houseDetails.address?.data.geo_lat),
              houseDetails.address == null ? defaultGeo.lon : Number(houseDetails.address?.data.geo_lon),
            ],
            zoom: 12,
            controls: ['zoomControl'],
          }}
          modules={['control.ZoomControl']}
          style={{ height: '20rem' }}
          className="mt-3 w-100">
          <Placemark
            geometry={[Number(houseDetails.address?.data.geo_lat), Number(houseDetails.address?.data.geo_lon)]}
          />
        </Map>
      </YMaps>
    </>
  );
};
