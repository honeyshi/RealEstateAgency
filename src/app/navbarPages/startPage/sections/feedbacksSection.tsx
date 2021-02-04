import React, { useMemo, useState } from 'react';
import { Container, Flexbox, Section, TextField } from 'shared/base';
import { LinePagination } from 'shared/pagination';
import { Feedback } from 'pageParts/feedback';
import { decrementIndex, incrementIndex } from 'core/paginationHandler';

export const FeedbacksSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const amountItems = 8;
  const feedbackItemComponents = useMemo(() => {
    const feedbackItems = [];
    for (var i = 0; i < amountItems; i++)
      feedbackItems.push(
        <Feedback
          name="Виктория Иванова"
          date="июль 2020"
          feedbackText={`${activeIndex} Integer pulvinar arcu vitae lacinia bibendum. Pellentesque iaculis ipsum odio, sed condimentum elit congue nec. In faucibus feugiat convallis. Vestibulum tellus metus, egestas in luctus quis, placerat at eros. Nam non volutpat lectus. Vestibulum aliquam elementum mollis. Nulla ac erat a massa interdum pharetra. Sed non orci efficitur, egestas justo vel, tempor quam. Donec porttitor ligula nec erat pharetra, at vehicula eros gravida. Nam ligula mi, cursus nec metus ut, scelerisque fermentum est. Nullam laoreet odio massa, sit amet interdum odio consectetur a.`}
          display={i === activeIndex}
          key={`feedback-item-${i}`}
        />
      );
    return feedbackItems;
  }, [activeIndex, amountItems]);
  return (
    <Section bottom>
      <Container nonFluid>
        <TextField center tag="h1" mb="5">
          Почитайте отзывы наших клиентов
        </TextField>
        <Flexbox justifyContent="center" mb="5">
          {feedbackItemComponents}
        </Flexbox>
        <Flexbox justifyContent="center">
          <LinePagination
            amountItems={amountItems}
            onRightClick={() => setActiveIndex(incrementIndex(activeIndex, amountItems))}
            onLeftClick={() => setActiveIndex(decrementIndex(activeIndex, amountItems))}
          />
        </Flexbox>
      </Container>
    </Section>
  );
};
