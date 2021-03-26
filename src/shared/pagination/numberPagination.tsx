import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Flexbox, RemixIcon } from 'shared/base';

interface INumberPaginationProps {
  activePage: number;
  amountPages: number;
  setActivePage: (page: number) => void;
}

const showPages = 5;
const bias = 2; // in order to include current page and previous

export const NumberPagination: React.FC<INumberPaginationProps> = ({ activePage, amountPages, setActivePage }) => {
  const dispatch = useDispatch();

  const lastPage = activePage + showPages - bias > amountPages ? amountPages : activePage + showPages - bias;
  const visiblePagesNumbers =
    lastPage - activePage + bias === showPages
      ? Array(showPages)
          .fill(0)
          .map((_, idx) => {
            return activePage === 1 ? activePage + idx : activePage - 1 + idx;
          })
      : Array(showPages)
          .fill(0)
          .map((_, idx) => lastPage - showPages + 1 + idx);
  const visiblePagesItemComponents = useMemo(() => {
    const visiblePagesItems = visiblePagesNumbers.map((visiblePageNumber) => {
      return (
        <Link
          to="#"
          className={classNames('pagination-item', { active: visiblePageNumber === activePage })}
          onClick={() => dispatch(setActivePage(visiblePageNumber))}
          key={`pagination-link-${visiblePageNumber}`}>
          {visiblePageNumber}
        </Link>
      );
    });
    return visiblePagesItems;
  }, [activePage, dispatch, setActivePage, visiblePagesNumbers]);

  return (
    <Flexbox alignItems="center" justifyContent="center" className="pagination">
      {activePage !== 1 && (
        <RemixIcon name="arrow-left" mr="4" onClick={() => dispatch(setActivePage(activePage - 1))} />
      )}
      <Flexbox justifyContent="between" w="25" className="number-pagination">
        {visiblePagesItemComponents}
      </Flexbox>
      {lastPage !== amountPages && (
        <RemixIcon name="arrow-right" ml="4" onClick={() => dispatch(setActivePage(activePage + 1))} />
      )}
    </Flexbox>
  );
};
