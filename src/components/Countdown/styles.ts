import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  color: ${({ theme: { colors } }) => colors.title};
  display: flex;
  font-family: Rajdhani;
  font-weight: 600;

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const MinutesCount = styled.div`
  align-items: center;
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  display: flex;
  flex: 1;
  font-size: 8.5rem;
  justify-content: space-evenly;
  text-align: center;

  span {
    flex: 1;

    &:first-child {
      border-right: 1px solid #f0f1f3;
    }

    &:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }
`;

export const SecondsCount = styled(MinutesCount)``;

interface CountdownButtonProps {
  isActive?: boolean;
}

export const CountdownButton = styled.button.attrs({
  type: 'button',
})<CountdownButtonProps>`
  align-items: center;
  background: ${({ theme: { colors } }) => colors.blue};
  border: 0;
  border-radius: 5px;
  color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  font-size: 1.25rem;
  font-weight: 600;
  height: 5rem;
  justify-content: center;
  margin-top: 2rem;
  transition: color, background-color 0.2s;
  width: 100%;

  &:not(:disabled):hover {
    background: ${({ theme: { colors } }) => colors.blueDark};
  }

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme: { colors } }) => colors.white};
    border-bottom: 5px solid ${({ theme: { colors } }) => colors.green};
    color: ${({ theme: { colors } }) => colors.text};
  }

  img {
    margin-left: 0.5rem;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ theme: { colors } }) => colors.white};
      color: ${({ theme: { colors } }) => colors.title};

      &:hover {
        background: ${({ theme: { colors } }) => colors.red};
        color ${({ theme: { colors } }) => colors.white};
      }
    `}
`;
