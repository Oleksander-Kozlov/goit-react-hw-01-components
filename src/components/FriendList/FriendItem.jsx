import {
  FriendCard,
  Status,
  NameFriend,
  PictureFriend,
} from './FriendItem.styled';
import PropTypes from 'prop-types';

export const FriendItem = ({ friends }) =>
  friends.map(friend => {
    return (
      <FriendCard key={friend.id} className="item">
        <Status className="status" isOnline={friend.isOnline}></Status>
        <PictureFriend
          className="avatar"
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <NameFriend className="name">{friend.name}</NameFriend>
      </FriendCard>
    );
  });

FriendItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
