import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import * as S from './styles';

export function ChallengeBox(): JSX.Element {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext,
  );
  const { handleCountdownReset } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    handleCountdownReset();
  }

  function handleChallengeFailed() {
    resetChallenge();
    handleCountdownReset();
  }

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
            <S.ChallengeActiveButton
              btnType="failed"
              onClick={handleChallengeFailed}
            >
              Falhei
            </S.ChallengeActiveButton>
            <S.ChallengeActiveButton
              btnType="succeeded"
              onClick={handleChallengeSucceeded}
            >
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
