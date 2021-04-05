import React from 'react';
import { Column, Container, Flexbox, Image, Row, TextField } from 'shared/base';

interface IFormPageProps {
  header: string;
  helperText: string;
  image: string;
}

export const FormPage: React.FC<IFormPageProps> = ({ header, helperText, image, children }) => {
  return (
    <Container nonFluid>
      <Row>
        <Column size={5}>
          <Flexbox justifyContent="center" alignItems="center" vertical vh>
            <Image src={image} />
          </Flexbox>
        </Column>
        <Column size={7}>
          <Flexbox justifyContent="center" alignItems="center" vertical vh>
            <TextField tag="h2" mb="3">
              {header}
            </TextField>
            <TextField center mb="3" px="2">
              {helperText}
            </TextField>
            {children}
          </Flexbox>
        </Column>
      </Row>
    </Container>
  );
};
