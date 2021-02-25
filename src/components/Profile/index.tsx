import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengeContext';

import * as S from './styles';

export function Profile(): JSX.Element {
  const { level } = useContext(ChallengesContext);

  return (
    <S.Container>
      <S.Avatar src="https://github.com/diego3g.png" alt="Diego Fernandes" />

      <S.ProfileInfos>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </S.ProfileInfos>
    </S.Container>
  );
}
