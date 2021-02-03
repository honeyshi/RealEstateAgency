import { Feedback } from 'pageParts/feedback';
import React from 'react';
import { Container, Row, Section, TextField } from 'shared/base';

export const FeedbacksSection: React.FC = () => {
  return (
    <Section>
      <Container nonFluid>
        <TextField center tag="h1" mb="5">
          Почитайте отзывы наших клиентов
        </TextField>
        <Row justifyContent="center">
          <Feedback
            name="Виктория Иванова"
            date="июль 2020"
            feedbackText="Integer pulvinar arcu vitae lacinia bibendum. Pellentesque iaculis ipsum odio, sed condimentum elit congue nec. In faucibus feugiat convallis. Vestibulum tellus metus, egestas in luctus quis, placerat at eros. Nam non volutpat lectus. Vestibulum aliquam elementum mollis. Nulla ac erat a massa interdum pharetra. Sed non orci efficitur, egestas justo vel, tempor quam. Donec porttitor ligula nec erat pharetra, at vehicula eros gravida. Nam ligula mi, cursus nec metus ut, scelerisque fermentum est. Nullam laoreet odio massa, sit amet interdum odio consectetur a. Donec accumsan eros non mauris gravida, condimentum maximus nisi iaculis. Sed vehicula maximus urna vel luctus. "
          />
        </Row>
      </Container>
    </Section>
  );
};
