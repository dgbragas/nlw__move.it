import Head from 'next/head';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { GridContainer } from '../components/GridContainer';
import { Profile } from '../components/Profile';

import * as S from './styles';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <GridContainer>
        <ExperienceBar currentProgress={50} />
      </GridContainer>

      <GridContainer>
        <S.HomeSection>
          <S.ProfileContainer>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </S.ProfileContainer>
        </S.HomeSection>
      </GridContainer>
    </>
  );
}
