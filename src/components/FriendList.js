import friendListStyles from "./FriendList.module.css";

function getStatusClass (status) {
  if(status===true){
    return "is_active"
  }else if(status===false){
    return "is_not_active"
  }
};

const FriendList = ({friendsArr}) => {

  return (
    <>
      {friendsArr && (
        <ul className={friendListStyles.friend_list}>
          {friendsArr.map(friend => (
            <li key={friend.id} className={friendListStyles.item}>
              <div className={`${friendListStyles.status} ${friendListStyles[getStatusClass(friend.isOnline)]}`}></div>
              <img className={friendListStyles.avatar} alt="User avatar" src={friend.avatar}></img>
              <p className={friendListStyles.name}>{friend.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  )
};
export default FriendList;