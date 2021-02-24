import styled from 'styled-components';

interface BarProps {
  width: number;
}

interface CurrentExperienceProps {
  leftPosition: number;
}

export const Container = styled.header`
  align-items: center;
  display: flex;
`;

export const Percentage = styled.span`
  font-size: 1rem;
`;

export const ProgressBar = styled.div`
  background-color: ${({ theme: { colors } }) => colors.grayLine};
  border-radius: 4px;
  flex: 1;
  height: 4px;
  margin: 0 1.5rem;
  position: relative;
`;

export const Bar = styled.div<BarProps>`
  background-color: ${({ theme: { colors } }) => colors.green};
  border-radius: 4px;
  height: 100%;
  transition: width 0.2s;
  width: ${({ width }) => `${width}%`};
`;

export const CurrentExperience = styled.span<CurrentExperienceProps>`
  left: ${({ leftPosition }) => `${leftPosition}%`};
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
`;
