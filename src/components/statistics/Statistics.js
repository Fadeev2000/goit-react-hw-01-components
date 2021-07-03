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
                    <li key={id} class="item" style={{ backgroundColor: rndColor() }}>
                        <StatisticsItem label={label} percentage={percentage}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}

function rndColor() {
    let bgColor = '#';

    for (let i = 1; i <= 3; i += 1) {
        const rgb = Math.round(70 + Math.random() * (256 - 70)).toString(16);

        bgColor += isTwoSimbols(rgb);
    }
    return bgColor;
}

function isTwoSimbols(simbols) {
    if (simbols.length !== 2) {
        simbols = '0' + simbols;
    }

    return simbols;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired, })
    ).isRequired,
}

export default Statistics;