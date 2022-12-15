import friendListStyles from './FriendList.module.css';
import FriendListItem from '../../components/friend-list-item/FriendListItem';
import friends from '../../data/friends.json';
import PropTypes from 'prop-types';

const FriendList = ({ friendsArr }) => {
  return (
    <>
      <ul className={friendListStyles.friend_list}>
        <FriendListItem friendsArray={friends} />
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friendsArr: PropTypes.array.isRequired,
};

export default FriendList;
