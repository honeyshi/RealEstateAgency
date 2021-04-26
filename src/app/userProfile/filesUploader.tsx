import './filesUploader.scss';

import { Block, Button, Flexbox, Image } from 'shared/base';
import React, { useState } from 'react';

import { RemixIcon } from 'shared/base/remixIcon';
import { useDispatch } from 'react-redux';
import { useDropzone } from 'react-dropzone';

interface FileWithPreview extends File {
  preview: string;
}

interface IFilesUploaderProps {
  fileUrl: string;
  setImage: (value: FormData) => void;
}

export const FilesUploader: React.FC<IFilesUploaderProps> = ({ fileUrl, setImage }) => {
  const dispatch = useDispatch();

  const [file, setFile] = useState<FileWithPreview>();

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length) {
        setFile(
          Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0]),
          })
        );
        const formData = new FormData();
        formData.append('image', acceptedFiles[0]);
        dispatch(setImage(formData));
      }
    },
  });

  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      <input {...getInputProps()} />
      {file !== undefined && (
        <Flexbox wrap justifyContent="around" mb="4">
          <Block className="avatar-image-container" mx="4">
            <Image src={file.preview} alt={file.preview} className="shadow" />
          </Block>
        </Flexbox>
      )}
      {fileUrl !== '' && file === undefined && (
        <Flexbox wrap justifyContent="around" mb="4">
          <Block className="avatar-image-container" mx="4">
            <Image src={fileUrl} alt={fileUrl} className="shadow" />
          </Block>
        </Flexbox>
      )}
      <Flexbox vertical alignItems="center">
        {file === undefined && fileUrl === '' && (
          <RemixIcon className="files-uploader-icon" my="4" name="image" size="2x" />
        )}
        <Button fontLight className="rounded-link" text="accent">
          Добавить фото
        </Button>
      </Flexbox>
    </div>
  );
};
