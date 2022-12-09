import "./Profile.css"
const Profile = ({username, tag, location, avatar, statsFollower, statsViews, statsLikes}) => {

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar"></img>
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="item">
          <span className="label">Follower</span>
          <span className="quantity">{statsFollower}</span>
        </li>
        <li className="item">
          <span className="label">Views</span>
          <span className="quantity">{statsViews}</span>
        </li>
        <li className="item">
          <span className="label">Likes</span>
          <span className="quantity">{statsLikes}</span>
        </li>
      </ul>
    </div>
  )
};

export default Profile