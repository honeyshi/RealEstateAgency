import './advertismentDescriptionPage.scss';

import { Button, Column, Container, Flexbox, RemixIcon, Row, Section, TextField } from 'shared/base';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import React, { useEffect, useState } from 'react';
import {
  buildAnimalsString,
  buildDepositString,
  buildFurnitureString,
  buildKidsString,
  buildPaymentConditionString,
  buildRenovationString,
} from 'core/advertismentPropsIdToValues';

import { AdvertismentDescriptionColumn } from './advertismentDescriptionColumn';
import { AdvertismentDescriptionRow } from './advertismentDescriptionRow';
import { DefaultPage } from 'shared/layout/defaultPage';
import { ImagesCarousel } from 'pageParts/imagesCarousel';
import { OneAdvertismentModel } from 'core/getAdvertisment/advertismentModel';
import { buildAdditionalInformationString } from 'core/buildAdditionalInformationString';
import { history } from 'core/history';
import { performGetOneAdvertismentRequest } from 'core/getAdvertisment/getOneAdvertisment';
import { useParams } from 'react-router-dom';

export const AdvertismentDescriptionPage: React.FC = () => {
  const [currentAdvertisment, setCurrentAdvertisment] = useState<OneAdvertismentModel>();
  const [favourite, setFavourite] = useState(false);
  const [hover, setHover] = useState(false);

  const { id } = useParams<{ id: string }>();

  const getAdvertismentRooms = () => {
    // type flat and no rooms
    if (currentAdvertisment?.type === 1 && currentAdvertisment?.rooms === null) return 'Студия';
    // type room
    if (currentAdvertisment?.type === 2) return '1';
    // type house and no rooms
    if (currentAdvertisment?.type === 0 && currentAdvertisment?.rooms === null) return 'Не указано';
    return String(currentAdvertisment?.rooms);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await performGetOneAdvertismentRequest(id);
        setCurrentAdvertisment(result as OneAdvertismentModel);
      } catch (error) {
        error.response.status === 404 ? history.push('/not-found-advertisment') : history.push('/error');
      }
    };
    fetchData();
  }, [id]);

  return (
    <DefaultPage>
      <Section bottom>
        <Container nonFluid>
          {currentAdvertisment !== undefined && (
            <>
              <Row alignItems="center">
                <Flexbox rounded="50" className="advertisment-main-description-container" w="100" mb="5">
                  <Column size={6} className="images-carousel">
                    <ImagesCarousel imageUrls={currentAdvertisment.images.map((image) => image.url)} />
                  </Column>
                  <Column flex vertical justifyContent="center" size={6} p="4" pr="5">
                    <Flexbox justifyContent="between" alignItems="baseline" mb="3">
                      <TextField tag="h5" mb="0">
                        {`${currentAdvertisment.price} ₽/месяц`}
                      </TextField>
                      <Flexbox>
                        <Button danger mr="3">
                          Пожаловаться
                        </Button>
                        <Button
                          className="shadow add-favourite"
                          onClick={() => setFavourite(!favourite)}
                          onMouseEnter={() => setHover(true)}
                          onMouseLeave={() => setHover(false)}>
                          {!favourite && !hover && <RemixIcon name="heart-3" />}
                          {(favourite || hover) && (
                            <RemixIcon name="heart-3" styleType="fill" className="text-danger" />
                          )}
                        </Button>
                      </Flexbox>
                    </Flexbox>
                    <TextField tag="span" mb="3">
                      {`Нижегородская область, Нижний Новгород, р-н ${currentAdvertisment.district}, ${currentAdvertisment.address}`}
                    </TextField>
                    {currentAdvertisment.metro !== '' && currentAdvertisment.metro !== 'Не указано' && (
                      <Flexbox alignItems="center">
                        <RemixIcon size="xl" name="train" className="text-danger" mr="3" />
                        <TextField tag="span">{currentAdvertisment.metro}</TextField>
                      </Flexbox>
                    )}
                    <Flexbox justifyContent="between" my="5">
                      <AdvertismentDescriptionColumn
                        header="Комнаты"
                        iconName="hotel-bed"
                        text={getAdvertismentRooms()}
                      />
                      {currentAdvertisment.type === 0 ? (
                        <AdvertismentDescriptionColumn
                          header="Этажность"
                          iconName="building-4"
                          text={String(currentAdvertisment.house_floors)}
                        />
                      ) : (
                        <AdvertismentDescriptionColumn
                          header="Этаж"
                          iconName="building-4"
                          text={`${currentAdvertisment.apartment_floor}/${currentAdvertisment.house_floors}`}
                        />
                      )}
                      <AdvertismentDescriptionColumn
                        header="Площадь"
                        iconName="layout-masonry"
                        text={`${currentAdvertisment.apartment_area} м²`}
                      />
                    </Flexbox>
                    <TextField bold>Условия проживания</TextField>
                    <TextField tag="span">
                      {buildAdditionalInformationString(
                        currentAdvertisment.deposit === null ? null : String(currentAdvertisment.deposit),
                        currentAdvertisment.payment_condition,
                        currentAdvertisment.with_animals,
                        currentAdvertisment.with_kids
                      )}
                    </TextField>
                  </Column>
                </Flexbox>
              </Row>
              <Row alignItems="center">
                <Flexbox rounded="50" w="100" justifyContent="between" mb="5">
                  <Column size={6} rounded="50" className="advertisment-secondary-description-container" p="5">
                    <TextField bold>Описание объявления</TextField>
                    <TextField tag="span">{currentAdvertisment.description}</TextField>
                  </Column>
                  <Column size={5} rounded="50" className="advertisment-secondary-description-container" p="5">
                    <AdvertismentDescriptionRow
                      header="Условия оплаты"
                      text={buildPaymentConditionString(currentAdvertisment.payment_condition)}
                    />
                    <AdvertismentDescriptionRow
                      header="Заселение с животными"
                      text={buildAnimalsString(currentAdvertisment.with_animals)}
                    />
                    <AdvertismentDescriptionRow
                      header="Заселение с детьми"
                      text={buildKidsString(currentAdvertisment.with_kids)}
                    />
                    <AdvertismentDescriptionRow header="Залог" text={buildDepositString(currentAdvertisment.deposit)} />
                    <AdvertismentDescriptionRow
                      header="Ремонт"
                      text={buildRenovationString(currentAdvertisment.renovation)}
                    />
                    <AdvertismentDescriptionRow
                      header="Удобства"
                      text={buildFurnitureString(currentAdvertisment.furniture)}
                    />
                  </Column>
                </Flexbox>
              </Row>
              <Row alignItems="center">
                <YMaps>
                  <Map
                    state={{
                      center: [
                        Number(currentAdvertisment.gps_point.split(', ')[0]),
                        Number(currentAdvertisment.gps_point.split(', ')[1]),
                      ],
                      zoom: 14,
                      controls: ['zoomControl'],
                    }}
                    modules={['control.ZoomControl']}
                    style={{ height: '30rem' }}
                    className="mt-3 w-100">
                    <Placemark
                      geometry={[
                        Number(currentAdvertisment.gps_point.split(', ')[0]),
                        Number(currentAdvertisment.gps_point.split(', ')[1]),
                      ]}
                    />
                  </Map>
                </YMaps>
              </Row>
            </>
          )}
        </Container>
      </Section>
    </DefaultPage>
  );
};
