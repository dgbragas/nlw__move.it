import * as S from './styles';

export function Profile(): JSX.Element {
  return (
    <S.Container>
      <S.Avatar src="https://github.com/diego3g.png" alt="Diego Fernandes" />

      <S.ProfileInfos>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </S.ProfileInfos>
    </S.Container>
  );
}
