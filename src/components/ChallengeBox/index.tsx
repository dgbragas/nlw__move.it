import React from 'react';

import * as S from './styles';

export function ChallengeBox(): JSX.Element {
  const hasActiveChallenge = true;

  return (
    <S.Container>
      {hasActiveChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
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
