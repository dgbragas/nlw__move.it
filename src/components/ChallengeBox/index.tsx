import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import * as S from './styles';

export function ChallengeBox(): JSX.Element {
  const { activeChallenge } = useContext(ChallengesContext);

  return (
    <S.Container>
      {activeChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <S.ChallengeActiveButton btnType="failed">
              Falhei
            </S.ChallengeActiveButton>
            <S.ChallengeActiveButton btnType="succeeded">
              Completei
            </S.ChallengeActiveButton>
          </footer>
        </S.ChallengeActive>
      ) : (
        <S.ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </S.ChallengeNotActive>
      )}
    </S.Container>
  );
}
