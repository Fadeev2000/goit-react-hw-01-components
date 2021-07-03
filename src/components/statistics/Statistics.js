import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';

function Statistics({
    title,
    stats,
}) {
    return (
        <section class="statistics">
            {title && <h2 class="title">{title}</h2>}

            <ul class="stat-list">
                {stats.map(({id, label, percentage}) => (
                    <li key={id} class="item">
                        <StatisticsItem label={label} percentage={percentage}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired, })
    ).isRequired,
}

export default Statistics;