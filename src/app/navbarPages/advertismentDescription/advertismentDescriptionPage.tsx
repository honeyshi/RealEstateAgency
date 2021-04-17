import './advertismentDescriptionPage.scss';

import { Button, Column, Container, Flexbox, Image, RemixIcon, Row, Section, TextField } from 'shared/base';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import React, { useEffect, useState } from 'react';
import {
  buildAnimalsString,
  buildDepositString,
  buildFurnitureString,
  buildKidsString,
  buildPaymentConditionString,
  buildPropertyTypeString,
  buildRenovationString,
} from 'core/advertismentPropsIdToValues';

import { AdvertismentDescriptionColumn } from './advertismentDescriptionColumn';
import { AdvertismentDescriptionRow } from './advertismentDescriptionRow';
import { DefaultPage } from 'shared/layout/defaultPage';
import { FavouriteButton } from 'pageParts/advertisment';
import { ImagesCarousel } from 'pageParts/imagesCarousel';
import { OneAdvertismentModel } from 'core/getAdvertisment/advertismentModel';
import { buildAdditionalInformationString } from 'core/buildAdditionalInformationString';
import doodle1 from 'icons/doodle1.svg';
import doodle2 from 'icons/doodle2.svg';
import doodle3 from 'icons/doodle3.svg';
import { history } from 'core/history';
import { performGetOneAdvertismentRequest } from 'core/getAdvertisment/getOneAdvertisment';
import { useParams } from 'react-router-dom';

export const AdvertismentDescriptionPage: React.FC = () => {
  const [currentAdvertisment, setCurrentAdvertisment] = useState<OneAdvertismentModel>();
  const [showPhone, setShowPhone] = useState(false);

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
        switch (error.response.status) {
          case 404:
            history.push('/not-found-advertisment');
            break;
          case 401:
            history.push('/unauthorized');
            break;
          default:
            history.push('/error');
        }
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
              <Row className="advertisment-doodle-container">
                <Image src={doodle1} className="doodle top left" />
                <Image src={doodle2} className="doodle middle right" />
                <Image src={doodle3} className="doodle bottom left" />
              </Row>
              <Row alignItems="center">
                <Flexbox rounded="50" bg="white" className="advertisment-main-description-container" w="100" mb="5">
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
                        <FavouriteButton isFavourite={currentAdvertisment.favorite_apartments.length !== 0} id={id} />
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
                    <Flexbox justifyContent="between" my="3">
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
                    <TextField tag="span" mb="5">
                      {buildAdditionalInformationString(
                        currentAdvertisment.deposit === null ? null : String(currentAdvertisment.deposit),
                        currentAdvertisment.payment_condition,
                        currentAdvertisment.with_animals,
                        currentAdvertisment.with_kids
                      )}
                    </TextField>
                    {showPhone ? (
                      <Flexbox>
                        <TextField bold tag="span" mr="5">
                          {currentAdvertisment.author.name}
                        </TextField>
                        <TextField tag="span">{currentAdvertisment.contact_phone}</TextField>
                      </Flexbox>
                    ) : (
                      <Button primary onClick={() => setShowPhone(true)}>
                        Показать телефон
                      </Button>
                    )}
                  </Column>
                </Flexbox>
              </Row>

              <Row alignItems="center">
                <Flexbox rounded="50" w="100" justifyContent="between" mb="5">
                  <Column
                    size={6}
                    rounded="50"
                    bg="white"
                    className="advertisment-secondary-description-container"
                    p="5">
                    <TextField bold>Описание объявления</TextField>
                    <TextField tag="span">{currentAdvertisment.description}</TextField>
                  </Column>
                  <Column
                    size={5}
                    rounded="50"
                    bg="white"
                    className="advertisment-secondary-description-container"
                    p="5">
                    <AdvertismentDescriptionRow
                      header="Тип недвижимости"
                      text={buildPropertyTypeString(String(currentAdvertisment.type))}
                    />
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
