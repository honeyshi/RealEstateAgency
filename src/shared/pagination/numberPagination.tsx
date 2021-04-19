import { Flexbox, RemixIcon } from 'shared/base';
import React, { useMemo } from 'react';

import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface INumberPaginationProps {
  activePage: number;
  amountPages: number;
  setActivePage: (page: number) => void;
}

const showPages = 5;
const bias = 2; // in order to include current page and previous

export const NumberPagination: React.FC<INumberPaginationProps> = ({ activePage, amountPages, setActivePage }) => {
  let lastPage = activePage + showPages - bias > amountPages ? amountPages : activePage + showPages - bias;
  let visiblePagesNumbers =
    lastPage - activePage + bias === showPages
      ? Array(showPages)
          .fill(0)
          .map((_, idx) => {
            return activePage === 1 ? activePage + idx : activePage - 1 + idx;
          })
      : Array(showPages)
          .fill(0)
          .map((_, idx) => lastPage - showPages + 1 + idx);
  if (amountPages < showPages) {
    lastPage = amountPages;
    visiblePagesNumbers = Array(amountPages)
      .fill(0)
      .map((_, idx) => idx + 1);
  }
  const visiblePagesItemComponents = useMemo(() => {
    const visiblePagesItems = visiblePagesNumbers.map((visiblePageNumber) => {
      return (
        <Link
          to="#"
          className={classNames('pagination-item', { active: visiblePageNumber === activePage })}
          onClick={() => setActivePage(visiblePageNumber)}
          key={`pagination-link-${visiblePageNumber}`}>
          {visiblePageNumber}
        </Link>
      );
    });
    return visiblePagesItems;
  }, [activePage, setActivePage, visiblePagesNumbers]);

  return (
    <Flexbox alignItems="center" justifyContent="center" className="pagination">
      {activePage !== 1 && <RemixIcon name="arrow-left" mr="4" onClick={() => setActivePage(activePage - 1)} />}
      <Flexbox justifyContent="between" w="25" className="number-pagination">
        {visiblePagesItemComponents}
      </Flexbox>
      {lastPage !== amountPages && (
        <RemixIcon name="arrow-right" ml="4" onClick={() => setActivePage(activePage + 1)} />
      )}
    </Flexbox>
  );
};
