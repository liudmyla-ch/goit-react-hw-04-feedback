import { useState } from 'react';
import Section from './Section';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const options = ['good', 'neutral', 'bad'];

  const onClick = evt => {
    const { name } = evt.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  const countPositiveFeedbackPercentage = () => {
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  return (
    <Section
      title="Please leave feedback"
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positivePercentage={countPositiveFeedbackPercentage()}
      options={options}
      onLeaveFeedback={onClick}
    />
  );
};
export default App;

