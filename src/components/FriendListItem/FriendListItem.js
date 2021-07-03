import PropTypes from 'prop-types';
import defaultImg from '../../user.png';

function FriendListItem({
    avatar = defaultImg,
    name,
    isOnline
}) {
    
    return (
        <>
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt={name} width="48" />
            <p class="name">{name}</p>
        </>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;
