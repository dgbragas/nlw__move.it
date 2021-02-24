import styled from 'styled-components';

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

export const CountdownButton = styled.button`
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
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background: ${({ theme: { colors } }) => colors.blueDark};
  }
`;
