import styled, { css } from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1.5rem 2rem;
  text-align: center;
`;

export const ChallengeActive = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  header {
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.grayLine};
    color: ${({ theme: { colors } }) => colors.blue};
    font-size: 1.25rem;
    font-weight: 600;
    padding: 0 2rem 1.5rem;
  }

  main {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    strong {
      color: ${({ theme: { colors } }) => colors.title};
      font-size: 2rem;
      font-weight: 600;
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }
  }

  footer {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
`;

interface ChallengeActiveButtonProps {
  btnType: 'failed' | 'succeeded';
}

export const ChallengeActiveButton = styled.button.attrs({
  type: 'button',
})<ChallengeActiveButtonProps>`
  align-items: center;
  border: 0;
  border-radius: 5px;
  color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  height: 3rem;
  justify-content: center;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  ${({ btnType }) =>
    btnType === 'failed'
      ? css`
          background: ${({ theme: { colors } }) => colors.red};
        `
      : css`
          background: ${({ theme: { colors } }) => colors.green};
        `}
`;

export const ChallengeNotActive = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 75%;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  p {
    align-items: center;
    display: flex;
    line-height: 1.4;
    margin-top: 3rem;
    text-align: left;

    img {
      margin-right: 1.5rem;
      height: 3rem;
    }
  }
`;
