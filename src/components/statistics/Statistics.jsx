import PropTypes from 'prop-types';
import { Numbers, Category } from './Statistics.styled';

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
          <Category key={i + 1} categoryName={name}>
            {name}: <Numbers>{statistic[name]}</Numbers>
          </Category>
        );
      })}
      <p>
        Total: <Numbers>{total}</Numbers> {/* рендер загальної кількості */}
      </p>
      <Category categoryName={'good'}>
        Positive feedback: <Numbers>{positivePercentage()}</Numbers>%{' '}
        {/* рендер відсотка */}
      </Category>
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
