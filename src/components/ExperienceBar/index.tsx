import * as S from './styles';

interface ExperienceBarProps {
  currentProgress: number;
}

export function ExperienceBar({
  currentProgress,
}: ExperienceBarProps): JSX.Element {
  return (
    <S.Container>
      <S.Percentage>0 exp</S.Percentage>
      <S.ProgressBar>
        <S.Bar width={currentProgress} />

        <S.CurrentExperience leftPosition={currentProgress}>
          300 exp
        </S.CurrentExperience>
      </S.ProgressBar>
      <S.Percentage>600 exp</S.Percentage>
    </S.Container>
  );
}
