import FriendListItem from "../FriendListItem/FriendListItem.jsx";
import styles from "./FriendList.module.css";
function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <li className={styles.frindListItemWrapper} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
