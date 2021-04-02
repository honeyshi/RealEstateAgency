import { Flexbox, TextField } from 'shared/base';
import { NextStep, PreviousStep } from '../stepsSwitcher';

import { FilesUploader } from './filesUploader';
import React from 'react';
import { SectionHeader } from '../base';

export const PropertyPhotosPage: React.FC = () => {
  return (
    <>
      <SectionHeader>Фотографии</SectionHeader>
      <TextField mb="4">
        Загрузите фотографии, чтобы получить больше откликов на объявление. Допустимый формат изображений JPEG, JPG и
        PNG. Максимальный размер файлов 10 Мб.
      </TextField>
      <FilesUploader />
      <Flexbox justifyContent="between" mb="5">
        <PreviousStep />
        <NextStep />
      </Flexbox>
    </>
  );
};
