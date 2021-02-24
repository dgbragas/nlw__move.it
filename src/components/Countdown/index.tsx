import { useState, useEffect } from 'react';

import * as S from './styles';

let countdownTimeout: NodeJS.Timeout;

export function Countdown(): JSX.Element {
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function handleCountdownStart() {
    setIsActive(true);
  }

  function handleCountdownReset() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }

    if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

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
            </S.CountdownButton>
          )}
        </>
      )}
    </div>
  );
}
