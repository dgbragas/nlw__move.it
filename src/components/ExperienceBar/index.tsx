import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengeContext';
import * as S from './styles';

export function ExperienceBar(): JSX.Element {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );

  const percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel,
  );

  return (
    <S.Container>
      <S.Percentage>0 exp</S.Percentage>
      <S.ProgressBar>
        <S.Bar width={percentToNextLevel} />

        <S.CurrentExperience leftPosition={percentToNextLevel}>
          {currentExperience} exp
        </S.CurrentExperience>
      </S.ProgressBar>
      <S.Percentage>{experienceToNextLevel} exp</S.Percentage>
    </S.Container>
  );
}
