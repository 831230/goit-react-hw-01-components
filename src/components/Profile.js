import profileStyles from "./Profile.module.css";

const Profile = ({username, tag, location, avatar, statsFollower, statsViews, statsLikes}) => {

  return (
    <div className={profileStyles.profile}>
      <div className={profileStyles.description}>
        <img src={avatar} alt="User avatar" className={profileStyles.avatar}></img>
        <p className={profileStyles.name}>{username}</p>
        <p className={profileStyles.tag}>{tag}</p>
        <p className={profileStyles.location}>{location}</p>
      </div>
      <ul className={profileStyles.stats}>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Follower</span>
          <span className={profileStyles.quantity}>{statsFollower}</span>
        </li>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Views</span>
          <span className={profileStyles.quantity}>{statsViews}</span>
        </li>
        <li className={profileStyles.item}>
          <span className={profileStyles.label}>Likes</span>
          <span className={profileStyles.quantity}>{statsLikes}</span>
        </li>
      </ul>
    </div>
  )
};

export default Profile