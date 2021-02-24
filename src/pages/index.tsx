import Head from 'next/head';

import { ChallengeBox } from '../components/ChallengeBox';
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
        <ExperienceBar />
      </GridContainer>

      <GridContainer>
        <S.HomeSection>
          <S.ProfileContainer>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </S.ProfileContainer>

          <S.ChallengeBoxContainer>
            <ChallengeBox />
          </S.ChallengeBoxContainer>
        </S.HomeSection>
      </GridContainer>
    </>
  );
}
