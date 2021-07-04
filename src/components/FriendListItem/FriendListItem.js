import PropTypes from 'prop-types';
import css from './FriendListItem.module.css'
import defaultImg from '../../user.png';

function FriendListItem({
    avatar = defaultImg,
    name,
    isOnline
}) {
    
    return (
        <>
            <span className={css.status} style={{backgroundColor: isOnline ? 'green' : 'red'}}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;
