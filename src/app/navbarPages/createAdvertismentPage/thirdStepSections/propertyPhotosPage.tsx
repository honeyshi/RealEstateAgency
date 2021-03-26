import React from 'react';

import { Flexbox, TextField } from 'shared/base';
import { SectionHeader } from '../base';
import { PreviousStep, NextStep } from '../stepsSwitcher';
import { FilesUploader } from './filesUploader';

export const PropertyPhotosPage: React.FC = () => {
  return (
    <>
      <SectionHeader>Фотографии</SectionHeader>
      <TextField mb="4">
        Загрузите фотографии, чтобы получить больше откликов на объявление. Допустимый формат изображений JPEG, JPG и
        PNG. Максимальный размер файлов 10 Мб.
      </TextField>
      <FilesUploader />
      <Flexbox justifyContent="between">
        <PreviousStep />
        <NextStep />
      </Flexbox>
    </>
  );
};
