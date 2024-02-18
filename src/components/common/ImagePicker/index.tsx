import { useToast } from 'hooks/useToast';
import { useDropzone } from 'react-dropzone';
import { memo, useState, useEffect } from 'react';
import { Card, CardActionArea, CardMedia } from '@mui/material';
import {
  ImagePickerContainer,
  ClosedIcon,
  DropZoneContainer,
  MediaContainer,
  DropzoneSectionHeading,
} from './styled';

type Props = {
  limit: number;
  ImagesUrls: string[];
  error?: string | string[];
  getFiles: (files: File[]) => void;
  deleteFile?: (idx: number) => void;
};

const ImagepickerComponent = ({
  error,
  limit,
  getFiles,
  ImagesUrls,
  deleteFile,
}: Props) => {
  const { Toast, handleClick } = useToast();

  const [files, setFiles] = useState<File[] | string[]>([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const deleteImage = (index: number) => {
    if (deleteFile) deleteFile(index);
    const updatedFiles = acceptedFiles.filter((item, idx) => index !== idx);
    setFiles(updatedFiles);
  };

  useEffect(() => {
    setFiles(ImagesUrls);
  }, [ImagesUrls]);

  useEffect(() => {
    function toggleShow() {
      if (acceptedFiles && acceptedFiles.length > limit) {
        handleClick({
          level: 'error',
          message: `Cannot add more than ${limit} image${limit > 1 ? 's' : ''}`,
        });
      } else {
        setFiles(acceptedFiles);
        getFiles(acceptedFiles);
      }
    }

    toggleShow();

    return () => {};
  }, [acceptedFiles]);

  return (
    <ImagePickerContainer>
      <DropZoneContainer>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag and drop files or click to select</p>
        </div>
      </DropZoneContainer>
      <aside>
        {!files.length ? (
          <></>
        ) : (
          <>
            <DropzoneSectionHeading>Files</DropzoneSectionHeading>
            <MediaContainer maxWidth="sm">
              {files.map((item, index) => (
                <Card key={index} style={{ width: '6rem' }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="item"
                      src={
                        typeof item === 'string'
                          ? item
                          : URL.createObjectURL(item)
                      }
                      sx={{ mx: 2 }}
                    />
                    <span onClick={() => deleteImage(index)}>
                      <ClosedIcon />
                    </span>
                  </CardActionArea>
                </Card>
              ))}
            </MediaContainer>
          </>
        )}
      </aside>
      {error && (
        <label style={{ color: 'red', textAlign: 'center' }}>{error}</label>
      )}
      <Toast />
    </ImagePickerContainer>
  );
};

export const ImagePicker = memo(ImagepickerComponent);
