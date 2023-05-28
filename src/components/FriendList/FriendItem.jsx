import {
  FriendCard,
  Status,
  NameFriend,
  PictureFriend,
} from './FriendItem.styled';
export const FriendItem = function ({ friends }) {
  return friends.map(friend => {
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
};


// {
//   friend.isOnline;
// }