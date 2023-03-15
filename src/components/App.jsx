import { useState } from 'react';
import { Section } from './Section';
import { Feedback } from './Feedback';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    switch (e.target.id) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return +Math.round((good / countTotalFeedback()) * 100) + '%';
  };

  const total = countTotalFeedback();
  const statisticArray = [
    ['good', good],
    ['neutral', neutral],
    ['bad', bad],
    ['total', total],
    ['positive feedback', countPositiveFeedbackPercentage()],
  ];

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback
          type="button"
          names={['good', 'neutral', 'bad']}
          method={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!!total ? (
          <Statistics names={statisticArray} />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};
