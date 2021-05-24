import './advertismentDescriptionPage.scss';

import { Button, Column, Container, Flexbox, Image, Loading, RemixIcon, Row, Section, TextField } from 'shared/base';
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
import { DateTime } from 'luxon';
import { DefaultPage } from 'shared/layout/defaultPage';
import { FavouriteButton } from 'pageParts/advertisment';
import { InformationMainContainer } from 'pageParts/infoParts';
import { InformationRow } from 'pageParts/infoParts/informationRow';
import { ModalInput } from './modalInput';
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
  const [loading, setLoading] = useState(true);

  const { id } = useParams<{ id: string }>();

  const [showInputModal, setShowInputModal] = useState(false);

  const handleInputModalClose = () => {
    setShowInputModal(false);
  };

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
        setLoading(true);
        const result = await performGetOneAdvertismentRequest(id);
        setCurrentAdvertisment(result as OneAdvertismentModel);
        setLoading(false);
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
          {loading ? (
            <Loading loading />
          ) : (
            <>
              {currentAdvertisment !== undefined && (
                <>
                  <ModalInput advertismentId={id} show={showInputModal} handleClose={handleInputModalClose} />
                  <Row className="advertisment-doodle-container">
                    <Image src={doodle1} className="doodle top left" />
                    <Image src={doodle2} className="doodle middle right" />
                    <Image src={doodle3} className="doodle bottom left" />
                  </Row>
                  <InformationMainContainer
                    withAuthor
                    authorName={currentAdvertisment.author.name}
                    phone={currentAdvertisment.contact_phone}
                    imageUrls={currentAdvertisment.images.map((image) => image.url)}
                    className="advertisment-main-description-container">
                    <Flexbox justifyContent="between" alignItems="baseline" mb="3">
                      <TextField tag="h5" mb="0">
                        {`${currentAdvertisment.price} ₽/месяц`}
                      </TextField>
                      <Flexbox>
                        <Button danger mr="3" onClick={() => setShowInputModal(true)}>
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
                  </InformationMainContainer>

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
                        <TextField bold mt="3">
                          Дата размещения
                        </TextField>
                        <TextField>
                          {DateTime.fromSQL(currentAdvertisment.created_at)
                            .setLocale('ru')
                            .toLocaleString(DateTime.DATE_FULL)}
                        </TextField>
                      </Column>
                      <Column
                        size={5}
                        rounded="50"
                        bg="white"
                        className="advertisment-secondary-description-container"
                        p="5">
                        <InformationRow header="Тип недвижимости">
                          {buildPropertyTypeString(String(currentAdvertisment.type))}
                        </InformationRow>
                        <InformationRow header="Условия оплаты">
                          {buildPaymentConditionString(currentAdvertisment.payment_condition)}
                        </InformationRow>
                        <InformationRow header="Заселение с животными">
                          {buildAnimalsString(currentAdvertisment.with_animals)}
                        </InformationRow>
                        <InformationRow header="Заселение с детьми">
                          {buildKidsString(currentAdvertisment.with_kids)}
                        </InformationRow>
                        <InformationRow header="Залог">
                          {buildDepositString(currentAdvertisment.deposit)}
                        </InformationRow>
                        <InformationRow header="Ремонт">
                          {buildRenovationString(currentAdvertisment.renovation)}
                        </InformationRow>
                        <InformationRow header="Удобства">
                          {buildFurnitureString(currentAdvertisment.furniture)}
                        </InformationRow>
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
            </>
          )}
        </Container>
      </Section>
    </DefaultPage>
  );
};
