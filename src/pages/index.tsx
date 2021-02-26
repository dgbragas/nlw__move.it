import Head from 'next/head';
import styled from 'styled-components';

import { GetServerSideProps } from 'next';

import { AppProvider } from '../contexts';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { GridContainer } from '../components/GridContainer';
import { Profile } from '../components/Profile';

interface HomeProps {
  level: number;
  currentExperience: number;
  completedChallenges: number;
}

const HomeSection = styled.section`
  align-content: center;
  display: grid;
  flex: 1;
  grid-gap: 6.25rem;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;
`;

const ProfileContainer = styled.div``;

const ChallengeBoxContainer = styled.div``;

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
        <HomeSection>
          <ProfileContainer>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </ProfileContainer>

          <ChallengeBoxContainer>
            <ChallengeBox />
          </ChallengeBoxContainer>
        </HomeSection>
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
