import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 5.5rem;
  width: 5.5rem;
`;

export const ProfileInfos = styled.div`
  margin-left: 1.5rem;

  strong {
    color: ${({ theme: { colors } }) => colors.title};
    font-size: 1.5rem;
    font-weight: 600;
  }

  p {
    align-items: center;
    display: flex;
    font-size: 1rem;

    img {
      margin-right: 0.5rem;
    }
  }
`;
