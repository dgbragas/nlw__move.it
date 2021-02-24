import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengeContext';

import * as S from './styles';

export function CompletedChallenges(): JSX.Element {
  const { completedChallenges } = useContext(ChallengesContext);

  return (
    <S.Container>
      <span>Desafios completos</span>
      <span>{completedChallenges}</span>
    </S.Container>
  );
}
