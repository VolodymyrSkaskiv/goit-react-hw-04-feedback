import PropTypes from 'prop-types';
import css from './Statistics.module.css';

// Компонент відображення статистики
export const Statistics = ({
  options, // масив назв елементів статистики
  statistic, // об'єкт зі значеннями статистики для кожного елементу
  total, // загальна кількість відгуків
  positivePercentage, // функція, яка обчислює відсоток позитивних відгуків
}) => {
  return (
    <>
      {options.map((name, i) => {
        return (
          // назва елемента статистики
          <p key={i} className={css[name]}>
            {name}:{/* значення з statistic */}
            <span className={css.numbers}>{statistic[name]}</span>
          </p>
        );
      })}
      <p>
        Total: <span className={css.numbers}>{total}</span>
      </p>
      <p className={css.good}>
        Positive feedback:{' '}
        <span className={css.numbers}>{positivePercentage()}</span> <b>%</b>
      </p>
    </>
  );
};

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
