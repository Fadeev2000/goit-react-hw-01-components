import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import css from './Statistics.module.css'

function Statistics({
    title,
    stats,
}) {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul class={css.statList}>
                {stats.map(({id, label, percentage}) => (
                    <li key={id} className={css.item} style={{ backgroundColor: rndColor() }}>
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
        const rnd = Math.random() * 256;
        const rgb = rnd > 200 ? Math.round(rnd - 56).toString(16) : Math.round(rnd).toString(16);

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