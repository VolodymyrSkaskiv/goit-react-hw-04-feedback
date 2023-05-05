import { Component } from 'react';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';
import { Statistics } from './statistics/Statistics';
import css from './App.module.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = nameFeedback => {
    this.setState(preState => {
      let obj = { ...preState };
      obj[nameFeedback] = preState[nameFeedback] + 1;

      return obj;
    });
  };

  // підрахунок загальної кількості відгуків
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  // підрахунок відсотка позитивних відгуків
  countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  };

  render() {
    return (
      <div className={css.container}>
        <Section title="Please Leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeavefeedback={this.updateState}
          />
        </Section>

        <Section title="Statistics">
          {/* Рендер за умовою */}
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              options={Object.keys(this.state)}
              statistic={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
