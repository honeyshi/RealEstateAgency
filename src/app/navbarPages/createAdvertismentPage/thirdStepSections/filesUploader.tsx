import classNames from 'classnames';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Block, Button, Flexbox, Image, TextField } from 'shared/base';
import { RemixIcon } from 'shared/base/remixIcon';

import './filesUploader.scss';

const maxFiles = 5;

export const FilesUploader: React.FC = () => {
  const [files, setFiles] = useState<any[]>([]);
  const [primaryImage, setPrimaryImage] = useState('');
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    maxFiles: maxFiles,
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.slice(0, maxFiles - files.length).map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  const filePreviews = files.map((file) => (
    <Block className="property-image-container" key={file.name} mx="4" mb="4">
      <Button
        fontLight
        className={classNames('primary-image', { selected: primaryImage === file.name })}
        onClick={(event) => {
          event.stopPropagation();
          setPrimaryImage(file.name);
        }}>
        <RemixIcon name="check" className="mr-2" />
        Главное
      </Button>
      <Button
        className="delete-image"
        bg="danger"
        onClick={(event) => {
          event.stopPropagation();
          setFiles(files.filter((selectedFile) => selectedFile.name !== file.name));
          primaryImage === file.name && setPrimaryImage('');
        }}>
        <RemixIcon name="close" className="delete-image-icon" />
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
          {files.length === 0 && <RemixIcon className="files-uploader-icon my-4" name="image" size="3x" />}
          {files.length < maxFiles ? (
            <Button fontLight className="rounded-link" text="accent" mb="4">
              Добавить фото и планировку
            </Button>
          ) : (
            <TextField text="accent">
              Вы не можете загрузить более 10 изображений. Удалите старые фото, чтобы добавить новые.
            </TextField>
          )}
        </Flexbox>
      </div>
    </Block>
  );
};
