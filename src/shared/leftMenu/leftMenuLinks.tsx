import './leftMenuStyle.scss';

import React, { useMemo } from 'react';

import { ILeftMenuItemLink } from './leftMenuItemProps';
import { LeftMenuItemLink } from './leftMenuItemLink';

export const LeftMenuLinks: React.FC<{ leftMenuItems: ILeftMenuItemLink[]; activeLink: string }> = ({
  leftMenuItems,
  activeLink,
}) => {
  const leftItemComponents = useMemo(() => {
    const items = leftMenuItems.map((leftMenuItem) => {
      return (
        <LeftMenuItemLink
          to={leftMenuItem.link}
          active={leftMenuItem.link === activeLink}
          header={leftMenuItem.header}
          iconName={leftMenuItem.iconName}
          key={leftMenuItem.header}
        />
      );
    });
    return items;
  }, [leftMenuItems, activeLink]);
  return <ul className="left-menu-container">{leftItemComponents}</ul>;
};
