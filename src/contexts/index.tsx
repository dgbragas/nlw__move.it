import { ReactNode } from 'react';
import { ChallengesProvider } from './ChallengeContext';
import { CountdownProvider } from './CountdownContext';

interface AppProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  completedChallenges: number;
}

export function AppProvider({
  children,
  ...rest
}: AppProviderProps): JSX.Element {
  return (
    <ChallengesProvider {...rest}>
      <CountdownProvider>{children}</CountdownProvider>
    </ChallengesProvider>
  );
}
