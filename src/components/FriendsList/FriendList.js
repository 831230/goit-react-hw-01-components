import friendListStyles from './FriendList.module.css';

const FriendList = ({ children }) => {
  return (
    <>
      <ul className={friendListStyles.friend_list}>{children}</ul>
    </>
  );
};

export default FriendList;
