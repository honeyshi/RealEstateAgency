import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { AddressSuggestions, DaDataAddress, DaDataSuggestion } from 'react-dadata';
import { useDispatch, useSelector } from 'react-redux';

import { Column, Flexbox, Row, TextField } from 'shared/base';
import { Select } from 'shared/composite/select';
import { districts, metroValues } from 'data/values';
import { StoreType } from 'core/store';
import {
  setCreateAdDistrict,
  setCreateAdGeo,
  setCreateAdHouseNumber,
  setCreateAdMetro,
  setCreateAdStreet,
} from 'data/actions';
import { ErrorMessage } from '../base';

import 'react-dadata/dist/react-dadata.css';

import config from 'core/configFiles/appSettings.json';

const defaultGeo = {
  lat: 55.75,
  lon: 37.57,
};

export const AddressSection: React.FC = () => {
  const dispatch = useDispatch();
  const houseDetails = useSelector((state: StoreType) => state.propertyDetails);
  const validated = useSelector((state: StoreType) => state.newAdvertisment.validated);
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
        value={address}
        defaultQuery="Нижний Новгород"
        onChange={(address) => {
          setAddress(address);
          dispatch(setCreateAdStreet(String(address?.data.street)));
          dispatch(setCreateAdHouseNumber(String(address?.data.house)));
          dispatch(setCreateAdGeo(String(`${address?.data.geo_lat}, ${address?.data.geo_lon}`)));
        }}
      />
      <ErrorMessage validated={validated} fieldValue={houseDetails.geoLocation}>
        Введите адрес объекта
      </ErrorMessage>
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
