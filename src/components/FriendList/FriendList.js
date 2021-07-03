import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
    return (
        <ul class="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li class="item" key={id}>
                    <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
                </li>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired
};

export default FriendList;
