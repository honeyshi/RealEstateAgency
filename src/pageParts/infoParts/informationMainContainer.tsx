import './informationMainContainer.scss';

import { Block, Button, Column, Flexbox, Row, TextField } from 'shared/base';
import React, { useState } from 'react';

import { ImagesCarousel } from 'pageParts/imagesCarousel';
import { InformationRow } from './informationRow';
import classNames from 'classnames';

interface InformationMainContainerProps {
  className?: string;
  imageUrls?: string[];
  image?: string;
  withAuthor?: boolean;
  authorName?: string;
  phone: string;
}

export const InformationMainContainer: React.FC<InformationMainContainerProps> = ({
  className,
  imageUrls,
  image,
  withAuthor,
  authorName,
  phone,
  children,
}) => {
  const [showPhone, setShowPhone] = useState(false);
  return (
    <Row alignItems="center">
      <Flexbox rounded="50" bg="white" className={classNames('main-description-container', className)} w="100" mb="5">
        <Column size={6} className="images-carousel">
          {imageUrls !== undefined && <ImagesCarousel imageUrls={imageUrls} />}
          {image !== undefined && <Block className="description-image" style={{ backgroundImage: `url(${image})` }} />}
        </Column>
        <Column flex vertical justifyContent="center" size={6} p="4" pr="5">
          {children}
          {showPhone ? (
            <>
              {withAuthor ? (
                <Flexbox>
                  <TextField bold tag="span" mr="5">
                    {authorName}
                  </TextField>
                  <TextField tag="span">{phone}</TextField>
                </Flexbox>
              ) : (
                <InformationRow header="Номер телефона">{phone}</InformationRow>
              )}
            </>
          ) : (
            <Button primary onClick={() => setShowPhone(true)}>
              Показать телефон
            </Button>
          )}
        </Column>
      </Flexbox>
    </Row>
  );
};
