import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.wrap}>
      {options.map((name, i) => {
        return (
          <button
            key={name}
            className={css[name]}
            // При кліку виклик функції яка передає назву відгуку як аргумент
            onClick={() => {
              switch (name) {
                case 'good':
                  onLeaveFeedback('good');
                  break;
                case 'neutral':
                  onLeaveFeedback('neutral');
                  break;
                case 'bad':
                  onLeaveFeedback('bad');
                  break;
                default:
                  break;
              }
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeavefeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
