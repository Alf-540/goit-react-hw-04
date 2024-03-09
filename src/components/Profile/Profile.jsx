import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileItem}>
      {' '}
      <div>
        {' '}
        <img className={css.userAvatar} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>{' '}
      </div>{' '}
      <ul className={css.statList}>
        {' '}
        <li className={css.statItem}>
          <span className={css.statType}>Followers</span>
          <span className={css.statInfo}>{stats.followers}</span>{' '}
        </li>{' '}
        <li className={css.statItem}>
          <span className={css.statType}>Views</span>
          <span className={css.statInfo}>{stats.views}</span>{' '}
        </li>{' '}
        <li className={css.statItem}>
          <span className={css.statType}>Likes</span>
          <span className={css.statInfo}>{stats.likes}</span>{' '}
        </li>{' '}
      </ul>
    </div>
  );
};
export default Profile;
