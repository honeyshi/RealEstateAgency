import React, { useEffect, useMemo, useState } from 'react';

import { Block } from 'shared/base';
import { Claim } from './claim';
import { ClaimModel } from 'core/claim/claimModel';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { performGetClaimRequest } from 'core/claim/getClaims';

export const AdminClaimListPage: React.FC = () => {
  const [claims, setClaims] = useState<ClaimModel[]>([]);

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      const result = await performGetClaimRequest();
      if (!mounted) {
        setClaims(result);
      }
    };
    fetchData();
    return () => {
      mounted = true;
    };
  }, []);

  const claimItemComponents = useMemo(() => {
    const claimItems = claims.map((claim) => {
      return (
        <Claim
          advertismentId={claim.apartment_id}
          userId={claim.user_id}
          claimText={claim.text}
          claimId={claim.id}
          key={`claim-${claim.id}`}
        />
      );
    });
    return claimItems;
  }, [claims]);

  return (
    <Block mr="5" mt="3" mb="5">
      {claimItemComponents.length !== 0 ? (
        <>{claimItemComponents}</>
      ) : (
        <NoResultsPage>В настоящее время нет активных жалоб.</NoResultsPage>
      )}
    </Block>
  );
};
