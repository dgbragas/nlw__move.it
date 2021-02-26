import Head from 'next/head';

import { GetServerSideProps } from 'next';

import { AppProvider } from '../contexts';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { GridContainer } from '../components/GridContainer';
import { Profile } from '../components/Profile';

import * as S from './styles';

interface HomeProps {
  level: number;
  currentExperience: number;
  completedChallenges: number;
}

export default function Home(props: HomeProps): JSX.Element {
  const { level, currentExperience, completedChallenges } = props;

  return (
    <AppProvider
      level={level}
      currentExperience={currentExperience}
      completedChallenges={completedChallenges}
    >
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
    </AppProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, completedChallenges } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      completedChallenges: Number(completedChallenges),
    },
  };
};
