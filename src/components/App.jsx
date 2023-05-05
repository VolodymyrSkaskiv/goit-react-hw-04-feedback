import { useState } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';
import { Statistics } from './statistics/Statistics';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') setGood(prev => prev + 1);
    if (option === 'neutral') setNeutral(prev => prev + 1);
    if (option === 'bad') setBad(prev => prev + 1);
  };

  // підрахунок загальної кількості відгуків
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // підрахунок відсотка позитивних відгуків
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / (good + neutral + bad)) * 100 || 0);
  };

  return (
    <div className={css.container}>
      <Section title="Please Leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {/* Рендер за умовою */}
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            options={Object.keys({ good, neutral, bad })}
            statistic={{ good, neutral, bad }}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
};
