import { ExperienceBar } from '../components/ExperienceBar';
import { GridContainer } from '../components/GridContainer';

export default function Home(): JSX.Element {
  return (
    <GridContainer>
      <ExperienceBar currentProgress={50} />
    </GridContainer>
  );
}