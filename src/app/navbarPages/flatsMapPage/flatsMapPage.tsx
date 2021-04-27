import './baloon.scss';

import { Clusterer, Map, Placemark, YMaps } from 'react-yandex-maps';
import { Container, Row } from 'shared/base';
import React, { useEffect, useState } from 'react';

import { AdvertismentOnMap } from 'core/getAdvertisment/advertismentModel';
import { DefaultPage } from 'shared/layout/defaultPage';
import { performGetMapAdvertismentsRequest } from 'core/getAdvertisment/getMapAdvertisment';

export const FlatsMapPage: React.FC = () => {
  const [advertisments, setAdvertisments] = useState<AdvertismentOnMap[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await performGetMapAdvertismentsRequest();
      setAdvertisments(result.apartments);
    };
    fetchData();
  }, []);

  const createBaloonContent = (currentAdvertisment: AdvertismentOnMap) => {
    return `
    <div class="baloon-content d-flex flex-row">
      <div class="col-md-5">
        <img class="baloon-image" src=${currentAdvertisment.images[0].url}/>
      </div>
      <div class="col-md-7 d-flex flex-column justify-content-center">
        <h5 class="mb-3">${currentAdvertisment.header}</h5>
        <span class="mb-3">${currentAdvertisment.address}</span>
          <h6>${`${currentAdvertisment.price} ₽/месяц`}</h6>
          <a class="text-accent" href=${`/advertisment-description/${currentAdvertisment.id}`}>
            <div class="d-flex flex-row align-items-center">
              <span class="mr-3">Подробнее</span>
              <i class="ri-arrow-right-line"></i>
            </div>
          </a>
      </div>
    </div>
    `;
  };

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
                  {advertisments.map((advertisment, index) => (
                    <Placemark
                      key={index}
                      geometry={[
                        Number(advertisment.gps_point.split(', ')[0]),
                        Number(advertisment.gps_point.split(', ')[1]),
                      ]}
                      properties={{
                        balloonContentBody: [createBaloonContent(advertisment)].join(''),
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
