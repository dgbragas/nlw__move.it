import { ExperienceBar } from '../components/ExperienceBar';
import { GridContainer } from '../components/GridContainer';
import { Profile } from '../components/Profile';

import * as S from './styles';

export default function Home(): JSX.Element {
  return (
    <GridContainer>
      <ExperienceBar currentProgress={50} />

      <S.HomeSection>
        <S.ProfileContainer>
          <Profile />
        </S.ProfileContainer>
      </S.HomeSection>
    </GridContainer>
  );
}
