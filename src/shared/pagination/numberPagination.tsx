import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import { Flexbox, RemixIcon } from 'shared/base';

const showPages = 5;
const bias = 2; // in order to include current page and previous

export const NumberPagination: React.FC<{ amountPages: number }> = ({ amountPages }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const lastPage = activeIndex + showPages - bias > amountPages ? amountPages : activeIndex + showPages - bias;
  const visiblePagesNumbers =
    lastPage - activeIndex + bias === showPages
      ? Array(showPages)
          .fill(0)
          .map((_, idx) => {
            return activeIndex === 1 ? activeIndex + idx : activeIndex - 1 + idx;
          })
      : Array(showPages)
          .fill(0)
          .map((_, idx) => lastPage - showPages + 1 + idx);
  const visiblePagesItemComponents = useMemo(() => {
    const visiblePagesItems = visiblePagesNumbers.map((visiblePageNumber) => {
      return (
        <Link
          to="#"
          className={classNames('pagination-item', { active: visiblePageNumber === activeIndex })}
          onClick={() => setActiveIndex(visiblePageNumber)}
          key={`pagination-link-${visiblePageNumber}`}>
          {visiblePageNumber}
        </Link>
      );
    });
    return visiblePagesItems;
  }, [activeIndex, visiblePagesNumbers]);

  return (
    <Flexbox alignItems="center" justifyContent="center" className="pagination">
      {activeIndex !== 1 && <RemixIcon name="arrow-left" mr="4" onClick={() => setActiveIndex(activeIndex - 1)} />}
      <Flexbox justifyContent="between" w="25" className="number-pagination">
        {visiblePagesItemComponents}
      </Flexbox>
      {lastPage !== amountPages && (
        <RemixIcon name="arrow-right" ml="4" onClick={() => setActiveIndex(activeIndex + 1)} />
      )}
    </Flexbox>
  );
};
