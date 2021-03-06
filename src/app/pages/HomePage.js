import { BaseLayout } from '../layouts';
import Button from '../components/button/Button';
import LogButtonClicks from '../components/button/LogButtonClicks';
import Stopwatch from '../components/stopwatch/Stopwatch';

const HomePage = () => {
  return (
    <BaseLayout>
      <LogButtonClicks />
      <Stopwatch/>
      <Button/>
    </BaseLayout>
  );
};

export default HomePage;