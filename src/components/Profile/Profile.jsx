import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className="profile-image" src={image} alt="User avatar" />
        <p className={css.bold}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span className={css.bold}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={css.bold}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={css.bold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
