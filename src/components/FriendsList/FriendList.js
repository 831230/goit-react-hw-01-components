import friendListStyles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends, children }) => {
  return (
    <>
      <ul className={friendListStyles.friend_list}>{children}</ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  optionalObjectWithShape: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
  }),
};

export default FriendList;
