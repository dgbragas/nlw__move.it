import { ReactNode } from 'react';

import * as S from './styles';

interface GridContainerProps {
  children: ReactNode;
}

export function GridContainer({ children }: GridContainerProps): JSX.Element {
  return <S.Container>{children}</S.Container>;
}

export default GridContainer;
