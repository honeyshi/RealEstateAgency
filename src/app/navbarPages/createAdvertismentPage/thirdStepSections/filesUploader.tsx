import React, { useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { Block, Button, Flexbox, Icon, Image, TextField } from 'shared/base';

import './filesUploader.scss';

const maxFiles = 5;

export const FilesUploader: React.FC = () => {
  const [files, setFiles] = useState<any[]>([]);
  const { fileRejections, getRootProps, getInputProps } = useDropzone({
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
      <Image src={file.preview} alt={file.preview} className="shadow" />
    </Block>
  ));

  const acceptedFileItems = files.map((file) => {
    const fileWithPath = file as FileWithPath;
    return (
      <li key={fileWithPath.path}>
        {fileWithPath.path} - {file.size} bytes
      </li>
    );
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    const fileWithPath = file as FileWithPath;
    return (
      <li key={fileWithPath.path}>
        {fileWithPath.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });

  return (
    <Block border mb="4" pt="5" px="4" className="files-uploader-container" borderColor="secondary" rounded="50">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Flexbox wrap justifyContent="around" mb="4">
          {filePreviews}
        </Flexbox>
        <Flexbox vertical alignItems="center" mb="4">
          {files.length === 0 && <Icon name="home" my="4" />}
          {files.length < maxFiles ? (
            <Button fontLight className="rounded-link" text="accent" mb="4">
              Добавить фото и планировку
            </Button>
          ) : (
            <TextField text="accent">
              Вы можете загрузить не более 10 изображений. Удалите старые фото, чтобы добавить новые.
            </TextField>
          )}
        </Flexbox>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
    </Block>
  );
};
