import styles from "./FriendListItem.module.css";
function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friend}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={styles.friendName}>{name}</p>
      <p
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
