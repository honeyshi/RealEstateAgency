import './claim.scss';

import { Button, Flexbox, RemixIcon, TextField } from 'shared/base';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { ClaimMenu } from './claimMenu';

interface IClaimProps {
  userId: string;
  claimText: string;
  advertismentId: string;
  claimId: string;
}

export const Claim: React.FC<IClaimProps> = ({ userId, claimId, claimText, advertismentId }) => {
  const [showMenu, setShowMenu] = useState(false);

  const claimMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!claimMenuRef.current || claimMenuRef.current.contains(e.target as Node)) return;
      setShowMenu(false);
    },
    [claimMenuRef]
  );

  useEffect(() => {
    if (showMenu) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu, handleClickOutside]);

  return (
    <div className="d-flex flex-column py-4 px-5 mb-5 claim-container" ref={claimMenuRef}>
      <Flexbox justifyContent="between">
        <TextField bold>Id пользователя: {userId}</TextField>
        <Button className="shadow menu" px="2" pt="2" pb="0" onClick={() => setShowMenu(!showMenu)}>
          <RemixIcon name="menu" size="sm" />
        </Button>
      </Flexbox>
      <Flexbox justifyContent="end">
        <ClaimMenu claimId={claimId} advertismentId={advertismentId} show={showMenu} />
      </Flexbox>
      <TextField tag="span">{claimText}</TextField>
    </div>
  );
};
