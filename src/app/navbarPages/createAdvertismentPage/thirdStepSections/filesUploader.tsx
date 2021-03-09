import React, { useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';

export const FilesUploader: React.FC = () => {
  const [files, setFiles] = useState<any[]>([]);
  const { fileRejections, getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    maxFiles: 2,
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} alt={file.preview} />
      </div>
    </div>
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
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(2 files are the maximum number of files you can drop here)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
        {thumbs}
      </aside>
    </section>
  );
};
