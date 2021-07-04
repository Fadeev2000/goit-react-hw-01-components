import PropTypes from 'prop-types';
import css from './StatisticsItem.module.css';

function StatisticsItem({
    label,
    percentage,
}) {
    return (
        <>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </>
    )
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsItem;