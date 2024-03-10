import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.avatar} src={avatar} alt="Avatar" width="148px" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.isOnline}>Online</p>
      ) : (
        <p className={css.isOffline}>Offline</p>
      )}
    </div>
  );
};
export default FriendListItem;
