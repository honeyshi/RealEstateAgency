import React from 'react';
import { useSelector } from 'react-redux';

import { StoreType } from 'core/store';
import { setVideoLink } from 'data/actions';
import { Flexbox, TextField } from 'shared/base';
import { DetailsInput, SectionHeader } from '../base';
import { PreviousStep, NextStep } from '../stepsSwitcher';

export const PropertyPhotosPage: React.FC = () => {
  const videoLink = useSelector((state: StoreType) => state.propertyPhotos.videoLink);
  return (
    <>
      <SectionHeader>Фотографии</SectionHeader>
      <TextField mb="4">
        Загрузите фотографии, чтобы получить больше откликов на объявление. Допустимый формат изображений JPEG, JPG и
        PNG. Максимальный размер файлов 10 Мб.
      </TextField>
      <SectionHeader>Видео</SectionHeader>
      <TextField mb="4">
        Укажите ссылку на видео вашей недвижимости. Объявление с видео привлечет больше внимания и звонков.
      </TextField>
      <DetailsInput placeholder="Введите ссылку на YouTube" value={videoLink} setMethod={setVideoLink} mb="4" />
      <Flexbox justifyContent="between">
        <PreviousStep />
        <NextStep />
      </Flexbox>
    </>
  );
};
