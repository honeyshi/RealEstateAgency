import { Clusterer, Map, Placemark, YMaps } from 'react-yandex-maps';
import { Container, Row } from 'shared/base';
import React, { useEffect, useState } from 'react';

import { DefaultPage } from 'shared/layout/defaultPage';
import { Geo } from 'data/values';
import { performGetAdvertismentRequest } from 'core/getAdvertisment/getAdvertisment';

export const FlatsMapPage: React.FC = () => {
  const [locations, setLocations] = useState<Geo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await performGetAdvertismentRequest(1);
      setLocations(
        // @ts-ignore
        result.apartments.flatMap((advertisment) => {
          return { lat: advertisment.gps_point.split(', ')[0], lon: advertisment.gps_point.split(', ')[1] };
        })
      );
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <DefaultPage>
        <Row>
          <Container>
            <YMaps>
              <Map
                defaultState={{
                  center: [56.328169, 43.961003],
                  zoom: 11,
                }}
                modules={['control.ZoomControl']}
                style={{ height: '50rem' }}
                className="w-100">
                <Clusterer
                  options={{
                    preset: 'islands#invertedBlueClusterIcons',
                    groupByCoordinates: false,
                  }}>
                  {locations.map((location, index) => (
                    <Placemark
                      key={index}
                      geometry={[location.lat, location.lon]}
                      properties={{
                        balloonContentBody: [
                          `
                              <div class="baloon-content">
                                  <a href={link} class="baloon-content__title">{name}</a>
                                  <div class="baloon-content__body">{description}</div>
                                  <div class="baloon-content__link">
                                      <a href={link} class="baloon__link">Подробнее</a>
                                  </div>
                              </div>
                              `,
                        ].join(''),
                      }}
                      modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                    />
                  ))}
                </Clusterer>
              </Map>
            </YMaps>
          </Container>
        </Row>
      </DefaultPage>
    </>
  );
};
