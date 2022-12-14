import friendListItemStyles from "./FriendListItem.module.css";

const FriendListItem = ({friendsArray}) => {
    return (
      <>
        {friendsArray && (
          <>
            {friendsArray.map(friend => (
              <li key={friend.id} className={friendListItemStyles.item}>
                <div className={`${friendListItemStyles.status} ${friendListItemStyles[(friend.isOnline) ? 'is_active' : 'is_not_active']}`}></div>
                <img className={friendListItemStyles.avatar} alt="User avatar" src={friend.avatar}></img>
                <p className={friendListItemStyles.name}>{friend.name}</p>
              </li>
            ))}
          </>
        )}
      </>
    )
  };
  export default FriendListItem;