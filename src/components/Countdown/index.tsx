import React from 'react';

import * as S from './styles';

export function Countdown(): JSX.Element {
  return (
    <div>
      <S.Container>
        <S.MinutesCount>
          <span>2</span>
          <span>5</span>
        </S.MinutesCount>

        <span>:</span>

        <S.SecondsCount>
          <span>0</span>
          <span>0</span>
        </S.SecondsCount>
      </S.Container>

      <S.CountdownButton>Iniciar novo ciclo</S.CountdownButton>
    </div>
  );
}
