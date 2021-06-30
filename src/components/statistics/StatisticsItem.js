import PropTypes from 'prop-types';

function StatisticsItem({
    label,
    percentage,
}) {
    return (
        <>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
        </>
    )
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticsItem;