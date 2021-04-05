import './leftMenuStyle.scss';

import React, { useMemo } from 'react';

import { ILeftMenuItem } from './leftMenuItemProps';
import { LeftMenuItem } from './leftMenuItem';

interface ILeftMenuProps {
  activeItemIndex: number;
  leftMenuItems: ILeftMenuItem[];
  setActiveMethod: (value: number) => void;
}

export const LeftMenu: React.FC<ILeftMenuProps> = ({ activeItemIndex, leftMenuItems, setActiveMethod }) => {
  const leftItemComponents = useMemo(() => {
    const items = leftMenuItems.map((leftMenuItem, index) => {
      return (
        <LeftMenuItem
          active={index + 1 === activeItemIndex}
          header={leftMenuItem.header}
          iconName={leftMenuItem.iconName}
          index={index}
          setActiveMethod={setActiveMethod}
          key={leftMenuItem.header}
        />
      );
    });
    return items;
  }, [activeItemIndex, leftMenuItems, setActiveMethod]);
  return <ul className="left-menu-container">{leftItemComponents}</ul>;
};
