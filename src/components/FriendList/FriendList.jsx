import { FriendItem } from "./FriendItem";
import friends from '../json/friends.json';
export const FriendList = () => {
    return (
      <ul className="friend-list">
        <FriendItem friends={friends} />
      </ul>
    );
}


