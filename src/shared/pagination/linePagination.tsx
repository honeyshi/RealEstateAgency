import React, { useMemo, useState } from 'react';
import { Column, Flexbox, Icon } from 'shared/base';
import { LinePaginationItem } from 'shared/pagination';
import { decrementIndex, incrementIndex } from 'core/paginationHandler';

import './paginationStyle.scss';

interface ILinePaginationProps {
  amountItems: number;
  onLeftClick: () => void;
  onRightClick: () => void;
}

export const LinePagination: React.FC<ILinePaginationProps> = ({ amountItems, onLeftClick, onRightClick }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const paginationItemComponents = useMemo(() => {
    const paginationItems = [];
    for (var i = 0; i < amountItems; i++)
      paginationItems.push(<LinePaginationItem active={i === activeIndex} key={`pagination-item-${i}`} />);
    return paginationItems;
  }, [activeIndex, amountItems]);

  return (
    <Column size={7} className="align-items-center pagination">
      <Flexbox w="100" className="line-pagination">
        {paginationItemComponents}
      </Flexbox>
      <Icon
        name="arrow-left"
        mr="1"
        ml="4"
        onClick={() => {
          setActiveIndex(decrementIndex(activeIndex, amountItems));
          onLeftClick();
        }}
      />
      <Icon
        name="arrow-right"
        ml="1"
        onClick={() => {
          setActiveIndex(incrementIndex(activeIndex, amountItems));
          onRightClick();
        }}
      />
    </Column>
  );
};
