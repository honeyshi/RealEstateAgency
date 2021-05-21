import React, { useEffect, useMemo, useState } from 'react';

import { Claim } from './claim';
import { ClaimModel } from 'core/claim/claimModel';
import { DefaultListBlock } from 'shared/layout/defaultListBlock';
import { Loading } from 'shared/base';
import { NoResultsPage } from 'shared/layout/noResultsPage';
import { performGetClaimRequest } from 'core/claim/getClaims';

export const AdminClaimListPage: React.FC = () => {
  const [claims, setClaims] = useState<ClaimModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = false;
    const fetchData = async () => {
      setLoading(true);
      const result = await performGetClaimRequest();
      if (!mounted) setClaims(result);
      setLoading(false);
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
    <DefaultListBlock>
      {loading ? (
        <Loading loading />
      ) : (
        <>
          {claimItemComponents.length !== 0 ? (
            <>{claimItemComponents}</>
          ) : (
            <NoResultsPage>В настоящее время нет активных жалоб.</NoResultsPage>
          )}
        </>
      )}
    </DefaultListBlock>
  );
};
