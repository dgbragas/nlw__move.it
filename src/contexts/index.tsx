import { ReactNode } from 'react';
import { ChallengesProvider } from './ChallengeContext';
import { CountdownProvider } from './CountdownContext';

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return (
    <ChallengesProvider>
      <CountdownProvider>{children}</CountdownProvider>
    </ChallengesProvider>
  );
}
