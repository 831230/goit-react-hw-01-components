import statisticsStyles from './Statistics.module.css';
import PropTypes from 'prop-types';

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const Statistics = ({ statistics }) => {
  return (
    <section className={statisticsStyles.statistics}>
      <h2 className={statisticsStyles.title}>Upload stats</h2>
      <ul className={statisticsStyles.list}>
        {statistics.map(statistic => (
          <li
            key={statistic.id}
            className={statisticsStyles.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={statisticsStyles.label}>{statistic.label}</span>
            <span className={statisticsStyles.percentage}>
              {statistic.percentage}&#37;
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.array.isRequired,
};

export default Statistics;
