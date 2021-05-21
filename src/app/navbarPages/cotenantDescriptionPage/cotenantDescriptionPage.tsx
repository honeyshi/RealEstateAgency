import { Column, Container, Flexbox, Loading, Section, TextField } from 'shared/base';
import { InformationMainContainer, InformationRow } from 'pageParts/infoParts';
import React, { useEffect, useState } from 'react';

import { CotenantDescription } from 'core/cotenant/cotenantModel';
import { DefaultPage } from 'shared/layout/defaultPage';
import { history } from 'core/history';
import { performGetCotenantDescriptionRequest } from 'core/cotenant/getCotenantDescription';
import { useParams } from 'react-router-dom';

export const CotenantDescriptionPage: React.FC = () => {
  const [currentCotenant, setCurrentCotenant] = useState<CotenantDescription>();
  const [loading, setLoading] = useState(true);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await performGetCotenantDescriptionRequest(id);
        setCurrentCotenant(result as CotenantDescription);
        setLoading(false);
      } catch (error) {
        switch (error.response.status) {
          case 404:
            history.push('/not-found-request');
            break;
          case 401:
            history.push('/unauthorized');
            break;
          default:
            history.push('/error');
        }
      }
    };
    fetchData();
  }, [id]);

  return (
    <DefaultPage>
      <Section bottom>
        <Container nonFluid>
          {loading ? (
            <Loading loading />
          ) : (
            <>
              {currentCotenant !== undefined && (
                <InformationMainContainer image={currentCotenant.image} phone={currentCotenant.phone}>
                  <TextField center tag="h5" mb="3">
                    {currentCotenant.author.name}
                  </TextField>
                  <InformationRow header="Пол">{currentCotenant.author_sex}</InformationRow>
                  <InformationRow header="Возраст">{currentCotenant.author_age}</InformationRow>
                  <InformationRow header="Район">{currentCotenant.district.name}</InformationRow>
                  <InformationRow header="Пол соарендатора">{currentCotenant.desired_sex}</InformationRow>
                  <InformationRow header="Возраст соарендатора">{`от ${currentCotenant.desired_min_age} до ${currentCotenant.desired_max_age}`}</InformationRow>
                  <Flexbox my="3">
                    <Column>
                      <TextField tag="span">{currentCotenant.text}</TextField>
                    </Column>
                  </Flexbox>
                </InformationMainContainer>
              )}
            </>
          )}
        </Container>
      </Section>
    </DefaultPage>
  );
};
