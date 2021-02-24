import { ReactNode } from 'react';
import { ChallengesProvider } from './ChallengeContext';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return <ChallengesProvider>{children}</ChallengesProvider>;
}
