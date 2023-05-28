import { FriendItem } from "./FriendItem";
import friends from '../json/friends.json';
import { Friendslist } from "./FriendList.styled";
export const FriendList = () => {
    return (
      <Friendslist className="friend-list">
        <FriendItem friends={friends} />
      </Friendslist>
    );
}


