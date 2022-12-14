import friendListStyles from "./FriendList.module.css";
import FriendListItem from "../../components/friend-list-item/FriendListItem";
import friends from "../../data/friends.json";

const FriendList = ({friendsArr}) => {
  return (
    <>
      {friendsArr && (
        <ul className={friendListStyles.friend_list}>
          <FriendListItem friendsArray={friends}/>
        </ul>
      )}
    </>
  )
};
export default FriendList;