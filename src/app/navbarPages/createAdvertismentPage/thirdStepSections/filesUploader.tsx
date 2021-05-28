import './filesUploader.scss';

import { Block, Button, Flexbox, Image, TextField } from 'shared/base';
import React, { useState } from 'react';
import { setPrimaryImageName, setPropertyPhotos, setPropertyPrimaryImage, setUploadedFiles } from 'data/actions';
import { useDispatch, useSelector } from 'react-redux';

import { ErrorMessage } from '../base';
import { ErrorMessagesView } from 'shared/composite/errorMessagesView';
import { RemixIcon } from 'shared/base/remixIcon';
import { StoreType } from 'core/store';
import classNames from 'classnames';
import { parseError } from 'core/parseError';
import { performUploadImageRequest } from 'core/createAdvertisment/uploadFile';
import { useDropzone } from 'react-dropzone';

const maxFiles = 10;

export const FilesUploader: React.FC = () => {
  const dispatch = useDispatch();

  const propertyPhotosState = useSelector((state: StoreType) => state.propertyPhotos);
  const validated = useSelector((state: StoreType) => state.newAdvertisment.validated);

  const [errorMessage, setErrorMessage] = useState<string | string[]>('');

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    maxFiles: maxFiles,
    onDrop: async (acceptedFiles) => {
      dispatch(
        setUploadedFiles([
          ...propertyPhotosState.previews,
          ...acceptedFiles.slice(0, maxFiles - propertyPhotosState.previews.length).map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          ),
        ])
      );
      try {
        setErrorMessage('');
        const uploadedFilesId = await Promise.all(
          acceptedFiles
            .slice(0, maxFiles - propertyPhotosState.previews.length)
            .map((file) => performUploadImageRequest(file))
        );
        dispatch(setPropertyPhotos(propertyPhotosState.photos.concat(uploadedFilesId)));
      } catch (error) {
        setErrorMessage(parseError(error));
      }
    },
  });

  const filePreviews = propertyPhotosState.previews.map((file, index) => (
    <Block className="property-image-container" key={file.name} mx="4" mb="4">
      <Button
        fontLight
        className={classNames('primary-image', { selected: propertyPhotosState.primaryImageName === file.name })}
        onClick={(event) => {
          event.stopPropagation();
          dispatch(setPrimaryImageName(file.name));
          dispatch(setPropertyPrimaryImage(propertyPhotosState.photos[index]));
        }}>
        <Flexbox>
          <RemixIcon name="check" mr="2" />
          <TextField tag="span">Главное</TextField>
        </Flexbox>
      </Button>
      <Button
        className="delete-image"
        bg="danger"
        onClick={(event) => {
          event.stopPropagation();
          dispatch(
            setPropertyPhotos(propertyPhotosState.photos.filter((id) => id !== propertyPhotosState.photos[index]))
          );
          dispatch(
            setUploadedFiles(propertyPhotosState.previews.filter((selectedFile) => selectedFile.name !== file.name))
          );
          if (propertyPhotosState.primaryImageName === file.name) {
            dispatch(setPrimaryImageName(''));
            dispatch(setPropertyPrimaryImage(-1));
          }
        }}>
        <Flexbox>
          <RemixIcon name="close" className="delete-image-icon" />
        </Flexbox>
      </Button>
      <Image src={file.preview} alt={file.preview} className="shadow" />
    </Block>
  ));

  return (
    <Block border mb="4" pt="5" px="4" className="files-uploader-container" borderColor="secondary" rounded="50">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Flexbox wrap justifyContent="around" mb="4">
          {filePreviews}
        </Flexbox>
        <Flexbox vertical alignItems="center" mb="4">
          {propertyPhotosState.previews.length === 0 && (
            <RemixIcon className="files-uploader-icon" my="4" name="image" size="3x" />
          )}
          {propertyPhotosState.previews.length < maxFiles ? (
            <Button fontLight className="rounded-link" text="accent" mb="4">
              Добавить фото и планировку
            </Button>
          ) : (
            <TextField text="accent">
              Вы не можете загрузить более 10 изображений. Удалите старые фото, чтобы добавить новые.
            </TextField>
          )}
          <ErrorMessagesView messages={errorMessage} />
          <ErrorMessage validated={validated} fieldValue={propertyPhotosState.photos.map(String)}>
            Загрузите фотографии объекта
          </ErrorMessage>
        </Flexbox>
      </div>
    </Block>
  );
};
