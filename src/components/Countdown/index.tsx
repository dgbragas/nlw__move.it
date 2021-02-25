import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import * as S from './styles';

export function Countdown(): JSX.Element {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    handleCountdownReset,
    handleCountdownStart,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <S.Container>
        <S.MinutesCount>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </S.MinutesCount>

        <span>:</span>

        <S.SecondsCount>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </S.SecondsCount>
      </S.Container>

      {hasFinished ? (
        <S.CountdownButton disabled>
          Ciclo encerrado
          <img src="icons/checked.svg" alt="Concluído" />
        </S.CountdownButton>
      ) : (
        <>
          {isActive ? (
            <S.CountdownButton
              isActive={isActive}
              onClick={handleCountdownReset}
            >
              Abandonar ciclo
            </S.CountdownButton>
          ) : (
            <S.CountdownButton
              isActive={isActive}
              onClick={handleCountdownStart}
            >
              Iniciar novo ciclo
              <img src="icons/play.svg" alt="Play" />
            </S.CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
